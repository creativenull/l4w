import { get, request } from "https";
import { security } from "./security";
import { session } from "./session";
import { HttpStatus } from "../common/Constants";
import { Utils } from "../common/Utils";
export var services;
(function (services) {
    services.FACEBOOK_APPLICATION_ID = "1885551381575204";
    services.GOOGLE_APPLICATION_ID = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";
    function validateGoogleToken(request, response, onSuccess, onFailure, token) {
        get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + token, function (res) {
            let authResponse = "";
            res.on("data", function (buffer) {
                authResponse += buffer;
            });
            res.on("end", function () {
                try {
                    let auth = JSON.parse(authResponse);
                    if (security.validateGoogleTokeninfoResponse(auth)) {
                        onSuccess(auth.email);
                    }
                    else {
                        onFailure();
                    }
                }
                catch (e) {
                    console.error("Unrecoverable session:");
                    console.error(e);
                    onFailure();
                }
            });
        }).on("error", function (e) {
            console.error(e);
            onFailure();
        });
    }
    services.validateGoogleToken = validateGoogleToken;
    function validateFacebookToken(request, response, onSuccess, onFailure, token, userId) {
        if (Utils.isEmpty(process.env.FACEBOOK_SECRET)) {
            console.error("No env variable FACEBOOK_SECRET defined");
            onFailure();
            return;
        }
        let access_token = services.FACEBOOK_APPLICATION_ID + "|" + process.env.FACEBOOK_SECRET;
        get("https://graph.facebook.com/debug_token?input_token=" + token + "&access_token=" + access_token, function (res) {
            let authResponse = "";
            res.on("data", function (buffer) {
                authResponse += buffer;
            });
            res.on("end", function () {
                try {
                    let auth = JSON.parse(authResponse);
                    if (security.validateFacebookTokeninfoResponse(auth.data, userId)) {
                        get("https://graph.facebook.com/" + userId + "?fields=email&access_token=" + token, function (res) {
                            let graphResponse = "";
                            res.on("data", function (buffer) {
                                graphResponse += buffer;
                            });
                            res.on("end", function () {
                                try {
                                    let graphData = JSON.parse(graphResponse);
                                    onSuccess(graphData.email);
                                }
                                catch (e) {
                                    console.error("Cannot read graph response");
                                    console.error(e);
                                    onFailure();
                                }
                            });
                        }).on("error", function (e) {
                            console.error(e);
                            onFailure();
                        });
                    }
                    else {
                        onFailure();
                    }
                }
                catch (e) {
                    console.error("Unrecoverable session:");
                    console.error(e);
                    onFailure();
                }
            });
        }).on("error", function (e) {
            console.error(e);
            onFailure();
        });
    }
    services.validateFacebookToken = validateFacebookToken;
    function validateReCaptchaToken(request, response, callback, token, ip) {
        let body = "secret=" + process.env.RECAPTCHA_SECRET + "&response=" + token + "&remoteip=" + ip;
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        post("www.google.com", "/recaptcha/api/siteverify", body, headers, function (responseBody) {
            try {
                if (responseBody === undefined) {
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
                }
                else {
                    let gResponse = JSON.parse(responseBody);
                    callback(security.validateGoogleReCaptchaResponse(gResponse));
                }
            }
            catch (e) {
                console.error("Cannot read Google ReCaptcha response");
                console.error(e);
                callback(false);
            }
        });
    }
    services.validateReCaptchaToken = validateReCaptchaToken;
    const ACCEPTED_LABELS = [
        "bug", "enhancement", "question"
    ];
    function openGitHubIssue(request, response, req) {
        let user = session.getUser(request);
        if (user === undefined) {
            console.error("Cannot open issue if there is no valid session");
            response.status(HttpStatus.FORBIDDEN).send("");
            return;
        }
        if (Utils.isEmpty(process.env.GITHUB_TOKEN)) {
            console.error("No env variable GITHUB_TOKEN defined");
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            return;
        }
        let issueDescription = "Issue generated from L4W bug reporting interface\nUser #" + user + " wrote:\n> ";
        issueDescription += security.sanitizeIssueDescription(req.description);
        let body = {
            title: "Feedback by " + user,
            body: issueDescription,
            labels: []
        };
        if (req.label !== undefined && ACCEPTED_LABELS.includes(req.label)) {
            body.labels.push(req.label);
        }
        let headers = {
            "Accept": "application/vnd.github.v3+json",
            "Authorization": "token " + process.env.GITHUB_TOKEN,
            "User-Agent": "giovannipessiva"
        };
        post("api.github.com", "/repos/giovannipessiva/l4w/issues", JSON.stringify(body), headers, function (responseBody) {
            try {
                if (responseBody === undefined) {
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
                }
                else {
                    let ghResponse = JSON.parse(responseBody);
                    let res = {
                        url: ghResponse.html_url
                    };
                    response.json(res);
                }
            }
            catch (e) {
                console.error("Cannot read GitHub response");
                console.error(e);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            }
        });
    }
    services.openGitHubIssue = openGitHubIssue;
    function post(host, path, body, headers, callback) {
        let options = {
            protocol: "https:",
            host: host,
            path: path,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(body)
            }
        };
        Object.assign(options.headers, headers);
        let req = request(options, function (res) {
            let responseBody = "";
            res.setEncoding("utf8");
            res.on("data", function (buffer) {
                responseBody += buffer;
            }).on("end", function () {
                callback(responseBody);
            }).on("error", function (e) {
                console.error(e);
                callback();
            });
        });
        req.write(body);
        req.end();
    }
})(services || (services = {}));

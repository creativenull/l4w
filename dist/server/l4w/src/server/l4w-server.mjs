import path from "path";
import express from "express";
import compression from "compression";
import { readFile } from "fs";
import { createServer } from "https";
import { HttpStatus, ResourceType } from "../common/Constants";
import { Utils } from "../common/Utils";
import { session } from "./session";
import * as utils from "./utils";
import { security } from "./security";
import { database } from "./database";
import { services } from "./services";
let dirname = process.cwd() + path.sep;
database.init().then(function () {
    onDatabaseInit(true);
}).catch(function () {
    onDatabaseInit(false);
});
function onDatabaseInit(flagDBAvailable) {
    let app = express();
    app.set("port", (process.env.PORT || 5000));
    let server;
    if (!security.isDevEnv()) {
        server = app.listen(app.get("port"));
    }
    else {
        server = createServer(security.getLocalServerOptions(), app).listen(app.get("port"));
    }
    server.on("listening", function () {
        console.log("L4W is running on port", app.get("port"));
    }).on("error", function (err) {
        if (err.code === "EADDRINUSE") {
            console.error("Another instance is already running on port " + err.port);
        }
        else {
            console.error(err);
        }
        process.exit();
    });
    if (flagDBAvailable) {
        app.use(session.init());
    }
    app.use(compression());
    app.use(function (req, res, next) {
        if (req.path.substr(-1) === "/" && req.path.length > 1) {
            let query = req.url.slice(req.path.length);
            res.redirect(HttpStatus.MOVED_PERMANENTLY, req.path.slice(0, -1) + query);
        }
        else {
            next();
        }
    });
    app.use(function (req, res, next) {
        security.requestFilter(req, res);
        next();
    });
    app.all("/", function (request, response) {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "home.html", response);
    });
    app.all("/edit", function (request, response) {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "hub.html", response);
    });
    app.all("/edit/:editor", function (request, response) {
        let editor = request.params.editor;
        utils.sendFile(dirname + path.sep + "views" + path.sep + "editor" + path.sep, editor + ".html", response);
    });
    app.all("/test", function (request, response) {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "test.html", response);
    });
    app.all("/privacy", function (request, response) {
        utils.sendFile(dirname + path.sep + "views" + path.sep, "privacy.html", response);
    });
    app.get("/js/:script", function (request, response) {
        let file = request.params.script;
        let filePath = path.resolve(dirname + "dist" + path.sep + "client");
        if (security.isDevEnv()) {
            file = file.replace(".min.", ".");
        }
        utils.sendFile(filePath, file, response);
    });
    app.get("/lib/:script", function (request, response) {
        let file = request.params.script;
        let filePath = path.resolve(dirname + "assets" + path.sep + "lib");
        utils.sendFile(filePath, file, response);
    });
    app.get("/data/:type/:file", function (request, response) {
        let file = request.params.file;
        let type = Utils.convertStringToEnum(ResourceType, request.params.type);
        if (type === ResourceType.CONFIGURATION) {
            let filePath = path.resolve(dirname + "data" + path.sep + ResourceType.CONFIGURATION);
            utils.sendFile(filePath, file, response);
            return;
        }
        else {
            let lang = request.headers.lang;
            database.read(type, file, session.getUser(request), response, lang);
        }
    });
    app.get("/assets/:file", function (request, response) {
        let file = request.params.file;
        let filePath = path.resolve(dirname + "assets");
        utils.sendFile(filePath, file, response);
    });
    app.get("/assets/:type/:file", function (request, response) {
        let file = request.params.file;
        let type = Utils.convertStringToEnum(ResourceType, request.params.type);
        let filePath = path.resolve(dirname + "assets" + path.sep + type);
        utils.sendFile(filePath, file, response);
    });
    app.get("/assetlist/:type/", function (request, response) {
        let type = Utils.convertStringToEnum(ResourceType, request.params.type);
        let filePath = path.resolve(dirname + "assets" + path.sep + type);
        utils.listFiles(filePath, response);
    });
    app.get("/style/:file", function (request, response) {
        let file = request.params.file;
        let filePath = path.resolve(dirname + "style");
        utils.sendFile(filePath, file, response);
    });
    app.get("/style/:path/:file", function (request, response) {
        let pathS = request.params.path;
        let file = request.params.file;
        let filePath = path.resolve(dirname + "style" + path.sep + pathS);
        utils.sendFile(filePath, file, response);
    });
    app.get("/workers/:script", function (request, response) {
        let file = request.params.script;
        let filePath = path.resolve(dirname + "src" + path.sep + "workers");
        response.set("Service-Worker-Allowed", "..");
        utils.sendFile(filePath, file, response);
    });
    app.post("/edit/:type/:id", function (request, response) {
        if (session.isAuthenticated(request)) {
            let fileId = request.params.id;
            let type = Utils.convertStringToEnum(ResourceType, request.params.type);
            security.getBodyData(request, response, function (data) {
                database.write(type, fileId, data, session.getUser(request), response);
            });
        }
        else {
            response.status(HttpStatus.FORBIDDEN).send("");
        }
    });
    app.get("/news", function (request, response) {
        if (session.isAuthenticated(request)) {
            database.getNews(session.getUser(request), response);
        }
        else {
            response.status(HttpStatus.FORBIDDEN).send("");
        }
    });
    app.get("/v", function (request, response) {
        readFile("package.json", "utf8", function (err, data) {
            if (err !== null) {
                console.error(err);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            }
            else {
                let packageJson = JSON.parse(data);
                response.send(packageJson.name + " " + packageJson.version);
            }
        });
    });
    app.post("/auth", function (request, response) {
        let authResponse;
        session.doLogin(request, response, function () {
            authResponse = {
                result: true
            };
            response.json(authResponse);
        }, function () {
            console.error("Login failed");
            authResponse = {
                result: false
            };
            response.json(authResponse);
        });
    });
    app.get("/logout", function (request, response) {
        session.doLogout(request, response, function () {
            response.send("");
        });
    });
    app.post("/issue", function (request, response) {
        security.getBodyData(request, response, function (data) {
            let req;
            try {
                req = JSON.parse(data);
            }
            catch (e) {
                console.error("Cannot parse body: ");
                console.error(data);
                response.status(HttpStatus.BAD_REQUEST).send("");
                return;
            }
            let reCaptchaCallback = function (success) {
                if (success) {
                    services.openGitHubIssue(request, response, req);
                }
                else {
                    console.error("ReCaptcha token validation failed");
                    response.status(HttpStatus.BAD_REQUEST).send("");
                }
            };
            services.validateReCaptchaToken(request, response, reCaptchaCallback, req.captchaToken, request.ip);
        });
    });
    app.all("/teapot", function (request, response) {
        response.status(HttpStatus.IM_A_TEAPOT).send("🫖");
    });
}

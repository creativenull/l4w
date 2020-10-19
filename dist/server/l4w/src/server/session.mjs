import Session from "express-session";
import SequelizeSessionInit from "connect-session-sequelize";
let SequelizeStoreConstructor = SequelizeSessionInit(Session.Store);
import * as utils from "./utils";
import { security } from "./security";
import { services } from "./services";
import { models } from "./models/index";
import { database } from "./database";
export var session;
(function (session) {
    session.cookieName = "l4w.session";
    function init() {
        let secret = process.env.SESSION_SECRET;
        let sessionOptions = {
            cookie: security.getCookieSettings(),
            name: session.cookieName,
            proxy: true,
            resave: false,
            saveUninitialized: true,
            secret: secret,
            store: new SequelizeStoreConstructor({
                db: models,
                table: "usr_session"
            })
        };
        return Session(sessionOptions);
    }
    session.init = init;
    function getUser(request) {
        if (request.session === undefined || utils.isEmpty(request.session.user)) {
            if (security.isAuthenticationDisabled()) {
                return "0";
            }
            return undefined;
        }
        return request.session.user;
    }
    session.getUser = getUser;
    function isAuthenticated(request) {
        if (security.isAuthenticationDisabled()) {
            return true;
        }
        return !utils.isEmpty(getUser(request));
    }
    session.isAuthenticated = isAuthenticated;
    function doLogin(request, response, onSuccess, onFailure) {
        if (!session.isAuthenticated(request)) {
            security.getBodyData(request, response, function (data) {
                if (!utils.isEmpty(data)) {
                    let authRequest;
                    try {
                        authRequest = JSON.parse(data);
                    }
                    catch (e) {
                        console.error("Cannot parse body: ");
                        console.error(data);
                        onFailure();
                        return;
                    }
                    let successCallback = function (email) {
                        database.doUserLogin(email, request, response);
                        onSuccess();
                    };
                    let errorCallback = function () {
                        doLogout(request, response, onFailure);
                    };
                    if (authRequest.service === "google") {
                        services.validateGoogleToken(request, response, successCallback, errorCallback, authRequest.token);
                    }
                    else if (authRequest.service === "facebook") {
                        services.validateFacebookToken(request, response, successCallback, errorCallback, authRequest.token, authRequest.userId);
                    }
                    else {
                        console.error("Unexpected auth service:" + authRequest.service);
                        onFailure();
                    }
                }
                else {
                    onFailure();
                }
            });
        }
        else {
            database.logAccess(getUser(request));
            onSuccess();
        }
    }
    session.doLogin = doLogin;
    function doLogout(request, response, callback) {
        response.clearCookie(session.cookieName, { path: "/" });
        if (request.session !== undefined) {
            request.session.destroy(function () {
                request.session = undefined;
                callback();
            });
        }
        else {
            callback();
        }
    }
    session.doLogout = doLogout;
})(session || (session = {}));

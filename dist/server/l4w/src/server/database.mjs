var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as SequelizeModule from "sequelize";
const sequelize = SequelizeModule["default"];
import * as LowdbModule from "lowdb";
import * as FileSyncModule from "lowdb/adapters/FileSync";
const lowdb = LowdbModule["default"];
const fileSync = FileSyncModule["default"];
import { LanguageEnum } from "../common/model/Commons";
import { HttpStatus, ResourceType } from "../common/Constants";
import { models } from "./models/index";
import * as utils from "./utils";
import { constants } from "./constants";
import { DataDefaults } from "../common/DataDefaults";
import { gameConfig } from "../common/GameConfig";
import { Utils } from "../common/Utils";
import { GLOBAL_GROUP_ID } from "../common/StringsConstants";
import { security } from "./security";
export var database;
(function (database) {
    let gameData;
    let flagPostgresUnavailable = false;
    function logAccess(user) {
        if (flagPostgresUnavailable || user === undefined) {
            return;
        }
        models.log_access.update({
            last_seen: new Date(),
            access_counter: sequelize.literal("access_counter + 1")
        }, {
            where: {
                user: user,
            }
        }).then(function (r) {
        }, function (error) {
            console.log(error);
        });
    }
    database.logAccess = logAccess;
    ;
    function manageQueryError(response, error) {
        console.error(error);
        response.status(HttpStatus.BAD_REQUEST).send("");
    }
    ;
    function init() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                return __awaiter(this, void 0, void 0, function* () {
                    gameData = {
                        dialogs: lowdb(new fileSync("data/dialogs.json")),
                        maps: lowdb(new fileSync("data/maps.json")),
                        trees: lowdb(new fileSync("data/trees.json")),
                        tilesets: lowdb(new fileSync("data/tilesets.json")),
                        genericMessages: lowdb(new fileSync("data/dynmsgs.json")),
                        langs: new Map()
                    };
                    let files = yield utils.listFiles("data/lang/");
                    for (let file of files) {
                        try {
                            let lang = file.replace("messages_", "").replace(".json", "");
                            gameData.langs.set(lang, lowdb(new fileSync("data/lang/" + file)));
                        }
                        catch (e) {
                            console.error("Error while reading language file: " + file);
                            console.trace(e);
                        }
                    }
                    models.sequelize.authenticate().then(function () {
                        resolve();
                    }, function (err) {
                        if (security.isDevEnv()) {
                            console.info("PostgreSQL database not available, functionalities will be limitated");
                            flagPostgresUnavailable = true;
                            reject();
                        }
                        else {
                            console.error("Authentication on PostgreSQL failed: " + err);
                            process.exit();
                        }
                    });
                });
            });
        });
    }
    database.init = init;
    function read(type, file, user, response, lang) {
        let langVal = lang !== undefined ? LanguageEnum[lang] : lang;
        switch (type) {
            case ResourceType.MAP:
                let map = gameData.maps.get(["maps", file]).value();
                if (map === undefined) {
                    console.log("Map \"" + file + "\" not found, returning default");
                    map = DataDefaults.getMap();
                    map.id = file;
                }
                response.json(map);
                break;
            case ResourceType.TREE:
                let tree = gameData.trees.get(["trees", file]).value();
                if (tree === undefined) {
                    console.log("Tree \"" + file + "\" not found, returning default");
                    tree = DataDefaults.getTree();
                    tree.id = file;
                }
                response.json(tree);
                break;
            case ResourceType.TILESET:
                let tile = gameData.tilesets.get("tilesets")["find"]({ image: file })
                    .value();
                if (tile === undefined) {
                    console.log("Tileset \"" + file + "\" not found, returning default");
                    tile = DataDefaults.getTileset();
                    tile.image = file;
                }
                response.json(tile);
                break;
            case ResourceType.STRING:
                let value = getString(langVal, GLOBAL_GROUP_ID, file);
                if (value !== undefined) {
                    response.send(value);
                }
                else {
                    response.status(HttpStatus.NOT_FOUND)
                        .send(DataDefaults.getString());
                }
                break;
            case ResourceType.DIALOG:
                if (!Utils.isNumeric(file)) {
                    console.warn("Cannot read not-numeric dialog id: " + file);
                    response.status(HttpStatus.BAD_REQUEST)
                        .send("");
                }
                let dialogId = parseInt(file);
                let nodes = [];
                let edges = [];
                traverseDialogDatabase(dialogId, DataDefaults.FIRST_ELEM_ID, nodes, edges);
                if (nodes.length > 0) {
                    populateDialogMessages(dialogId, nodes, edges, langVal);
                    response.send({
                        nodes: nodes,
                        edges: edges
                    });
                }
                else {
                    response.status(HttpStatus.NOT_FOUND)
                        .send("");
                }
                break;
            case ResourceType.SAVE:
                if (!utils.isEmpty(user) && !flagPostgresUnavailable) {
                    models.usr_save.findOne({
                        where: {
                            user: user,
                            id: file
                        },
                        attributes: ["save"]
                    }).then(function (result) {
                        if (!utils.isEmpty(result)) {
                            response.send(result.dataValues.save);
                        }
                        else {
                            response.send(DataDefaults.getSave());
                        }
                    }, function (error) {
                        console.log(error);
                        response.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .send(DataDefaults.getSave());
                    });
                }
                else {
                    response.status(HttpStatus.OK).send(DataDefaults.getSave());
                }
                break;
            default:
                console.error("database.read - Unexpected case: " + type);
                response.status(HttpStatus.NOT_FOUND).send(DataDefaults.getString());
        }
        ;
    }
    database.read = read;
    function write(type, file, data, user, response) {
        switch (type) {
            case ResourceType.MAP:
                let newMap = JSON.parse(data);
                gameData.maps.set(["maps", file], newMap).write();
                response.status(HttpStatus.OK).send("");
                break;
            case ResourceType.TREE:
                let newTree = JSON.parse(data)[0];
                gameData.trees.set(["trees", file], newTree).write();
                response.status(HttpStatus.OK).send("");
                break;
            case ResourceType.TILESET:
                let oldTileset = gameData.tilesets.get("tilesets")["find"]({ image: file });
                let newTileset = JSON.parse(data);
                if (oldTileset.value() !== undefined) {
                    oldTileset.assign(newTileset).write();
                }
                else {
                    gameData.maps.get("tilesets")["push"]({
                        id: file,
                        value: newTileset
                    });
                }
                response.status(HttpStatus.OK).send("");
                break;
            case ResourceType.STRING:
                let id = setString(GLOBAL_GROUP_ID, file, data);
                response.status(HttpStatus.OK).send(id + "");
                break;
            case ResourceType.DIALOG:
                let dialogData = JSON.parse(data);
                let nodesList = dialogData.nodes;
                let edgesList = dialogData.edges;
                if (!Utils.isNumeric(file)) {
                    response.status(HttpStatus.BAD_REQUEST).send("DialogId should be numeric: " + file);
                    return;
                }
                let dialogId = parseInt(file);
                if (dialogId === DataDefaults.DEFAULT_ID) {
                    let maxId = DataDefaults.DEFAULT_ID;
                    for (let id of gameData.dialogs.keys().value()) {
                        if (Utils.isNumeric(id) && parseInt(id) > maxId) {
                            maxId = parseInt(id);
                        }
                    }
                    dialogId = (maxId + 1);
                }
                let groupdId = getDialogGroupId(dialogId);
                clearStrings(groupdId);
                for (let node of nodesList) {
                    if (node.message !== undefined) {
                        setString(groupdId, getNodeMessageStringId(node), node.message);
                        node.message = undefined;
                    }
                    utils.cleanDialogNode(node);
                }
                for (let edge of edgesList) {
                    if (edge.message !== undefined) {
                        setString(groupdId, getEdgeMessageStringId(edge), edge.message);
                        edge.message = undefined;
                    }
                    utils.cleanDialogEdge(edge);
                }
                gameData.dialogs.unset(dialogId).write();
                gameData.dialogs.set([dialogId, "nodes"], nodesList).write();
                gameData.dialogs.set([dialogId, "edges"], edgesList).write();
                response.status(HttpStatus.OK).send(dialogId + "");
                break;
            case ResourceType.SAVE:
                if (flagPostgresUnavailable) {
                    response.status(HttpStatus.OK).send("");
                    return;
                }
                models.usr_save.upsert({
                    user: user,
                    id: file,
                    date: new Date(),
                    name: null,
                    save: JSON.parse(data)
                }).then(function (result) {
                    response.status(HttpStatus.OK).send("");
                }, function (error) {
                    manageQueryError(response, error);
                });
                break;
            default:
                console.error("Unexpected case: " + type);
                response.status(HttpStatus.NOT_FOUND).send("");
        }
    }
    database.write = write;
    function doUserLogin(mail, request, response) {
        if (flagPostgresUnavailable) {
            response.status(HttpStatus.NOT_IMPLEMENTED).send("");
        }
        security
            .computeUnsafeHash(mail)
            .catch((reason) => {
            console.error(reason);
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
        })
            .then((hashedMail) => {
            if (hashedMail === undefined) {
                console.log("Hash not available");
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            }
            models.usr_list.findOne({
                where: {
                    mail: hashedMail
                }
            }).then(function (user_record) {
                if (user_record == null) {
                    models.usr_list.upsert({
                        mail: hashedMail,
                    }).then(function (updated) {
                        models.usr_list.findOne({
                            where: {
                                mail: hashedMail
                            }
                        }).then(function (user_new_record) {
                            if (user_record == null) {
                                request.session.user = user_new_record.user;
                                request.session.save(function (err) {
                                    if (!Utils.isEmpty(err)) {
                                        console.error("Error while saving session: %s", err);
                                    }
                                });
                                models.usr_event.upsert({
                                    user: user_new_record.user,
                                    event: constants.event.WELCOME,
                                    date: new Date()
                                }).then(function (res) {
                                }, function (error) {
                                    console.log(error);
                                });
                                models.log_access.upsert({
                                    user: user_new_record.user,
                                    first_seen: new Date(),
                                    last_seen: new Date(),
                                    access_counter: 1
                                }).then(function (res) {
                                }, function (error) {
                                    console.log(error);
                                });
                            }
                            else {
                                console.error("Registration failed for: " + hashedMail);
                            }
                        }, function (error) {
                            console.log(error);
                            response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
                        });
                    }, function (error) {
                        console.log(error);
                        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
                    });
                }
                else {
                    request.session.user = user_record.user;
                    request.session.save(function (err) {
                        if (!Utils.isEmpty(err)) {
                            console.error("Error while saving session: %s", err);
                        }
                    });
                    logAccess(user_record.user);
                }
            }, function (error) {
                console.log(error);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("");
            });
        });
    }
    database.doUserLogin = doUserLogin;
    function getNews(user, response) {
        if (utils.isEmpty(user) || flagPostgresUnavailable) {
            response.json({});
        }
        else {
            models.usr_event.findAll({
                where: {
                    user: user
                },
                attributes: ["event"],
            }).then(function (events) {
                if (!utils.isEmpty(events)) {
                    var eventsArray = new Array;
                    for (var i = 0; i < events.length; i++) {
                        eventsArray.push(events[i].event);
                    }
                    models.lst_event.findAll({
                        where: {
                            event: eventsArray
                        }
                    }).then(function (datas) {
                        response.json(datas);
                    });
                }
                else {
                    response.json({});
                }
            });
        }
    }
    database.getNews = getNews;
    function traverseDialogDatabase(dialogId, nodeId, nodes, edges, parentEdgeId) {
        let node = gameData.dialogs.get([dialogId, "nodes"])["find"]({ id: nodeId })
            .value();
        if (node !== undefined) {
            nodes.push(node);
            if (node.edgeIds !== undefined) {
                for (let edgeId of node.edgeIds) {
                    let edge = gameData.dialogs.get([dialogId, "edges"])["find"]({ id: edgeId })
                        .value();
                    if (edge !== undefined) {
                        edges.push(edge);
                        if (edge.nodeId !== undefined) {
                            traverseDialogDatabase(dialogId, edge.nodeId, nodes, edges, edgeId);
                        }
                    }
                    else {
                        console.error("node " + node.id + " reference not-existing edge: " + edgeId);
                    }
                }
            }
        }
        else {
            if (parentEdgeId === undefined) {
                console.error("not-existing node: " + nodeId);
            }
            else {
                console.error("edge " + parentEdgeId + " reference not-existing node: " + nodeId);
            }
        }
    }
    function getString(lang, groupId, id) {
        if (lang === undefined || !gameData.langs.has(lang)) {
            lang = gameConfig.ui.lang;
        }
        let langMap = gameData.langs.get(lang);
        if (langMap === undefined) {
            console.error("Cannot load language: " + lang);
        }
        else {
            if (langMap.has([groupId, id]).value()) {
                return langMap.get([groupId, id]).value();
            }
            if (lang !== gameConfig.ui.lang) {
                langMap = gameData.langs.get(gameConfig.ui.lang);
                if (langMap === undefined) {
                    console.error("Cannot load default language: " + lang);
                }
                else if (langMap.has([groupId, id]).value()) {
                    return langMap.get([groupId, id]).value();
                }
            }
        }
        return;
    }
    function clearStrings(groupId) {
        let langMap = gameData.langs.get(gameConfig.ui.lang);
        if (langMap === undefined) {
            console.error("Cannot load default language: " + langMap);
        }
        else {
            langMap.unset(groupId).write();
        }
    }
    function setString(groupId, id, value) {
        if (Utils.isEmpty(value) || value.trim().length === 0) {
            return;
        }
        let langMap = gameData.langs.get(gameConfig.ui.lang);
        if (langMap === undefined) {
            console.error("Cannot load default language: " + langMap);
        }
        else {
            if (id === undefined) {
                let idNum;
                if (!langMap.has(groupId).value()) {
                    idNum = DataDefaults.FIRST_ELEM_ID;
                }
                else {
                    let maxId = DataDefaults.DEFAULT_ID;
                    for (let id of langMap.get(groupId).keys().value()) {
                        if (Utils.isNumeric(id) && parseInt(id) > maxId) {
                            maxId = parseInt(id);
                        }
                    }
                    idNum = (maxId + 1);
                }
                id = idNum + "";
            }
            langMap.set([groupId, id], value.trim()).write();
            return id;
        }
        return;
    }
    function populateDialogMessages(dialogId, nodes, edges, lang) {
        for (let node of nodes) {
            node.message = getString(lang, getDialogGroupId(dialogId), getNodeMessageStringId(node));
        }
        for (let edge of edges) {
            edge.message = getString(lang, getDialogGroupId(dialogId), getEdgeMessageStringId(edge));
        }
    }
    function getDialogGroupId(dialogId) {
        return "D" + dialogId;
    }
    function getNodeMessageStringId(node) {
        return "N" + node.id + "M";
    }
    function getEdgeMessageStringId(edge) {
        return "E" + edge.id + "M";
    }
})(database || (database = {}));

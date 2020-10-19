import { gameConfig } from "../common/GameConfig";
import { Utils } from "./Utils";
export var DataDefaults;
(function (DataDefaults) {
    DataDefaults.DEFAULT_ID = -1;
    DataDefaults.DEFAULT_ID_STR = DataDefaults.DEFAULT_ID + "";
    DataDefaults.FIRST_ELEM_ID = 0;
    DataDefaults.DEFAULT_STR = "";
    function getDialogNode(nodeId) {
        return {
            id: nodeId !== undefined ? nodeId : DataDefaults.DEFAULT_ID
        };
    }
    DataDefaults.getDialogNode = getDialogNode;
    function getDialogEdge(edgeId) {
        return {
            id: edgeId !== undefined ? edgeId : DataDefaults.DEFAULT_ID
        };
    }
    DataDefaults.getDialogEdge = getDialogEdge;
    function getEmptyMap(name) {
        let map = getMap(name);
        for (let layer of map.layers) {
            layer.data = undefined;
        }
        return map;
    }
    DataDefaults.getEmptyMap = getEmptyMap;
    function getMap(name) {
        return {
            id: Utils.getRandomString(),
            name: name !== undefined ? name : "Map",
            height: 20,
            width: 25,
            layers: [
                {
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                },
                {
                    type: "tilelayer",
                    x: 0,
                    y: 0
                }
            ],
            nextobjectid: 2,
            tileset: getTileset(),
            events: []
        };
    }
    DataDefaults.getMap = getMap;
    function getTileset() {
        return {
            firstgid: 1,
            image: "002-Woods01.png",
            blocks: [],
            onTop: []
        };
    }
    DataDefaults.getTileset = getTileset;
    function getSave() {
        return {
            id: DataDefaults.FIRST_ELEM_ID,
            timestamp: Utils.now(),
            currentMap: gameConfig.maps.start.map,
            hero: getHero(),
            maps: [],
            config: getConfig()
        };
    }
    DataDefaults.getSave = getSave;
    function getConfig() {
        return {
            lang: gameConfig.ui.lang,
            skin: gameConfig.ui.skin,
            flagAntialiasing: true,
            flagDouble: false,
            flagNatural: false
        };
    }
    DataDefaults.getConfig = getConfig;
    function getEvent() {
        let event = {
            id: -1,
            name: "NPC",
            i: 0,
            j: 0,
            states: [{
                    charaset: "",
                    condition: "always",
                    trigger: 0,
                    action: ""
                }],
            memory: {},
            script: "BaseScript",
            currentState: 0
        };
        return event;
    }
    DataDefaults.getEvent = getEvent;
    ;
    function getHero() {
        let hero = getEvent();
        hero.name = gameConfig.hero.name;
        hero.i = gameConfig.maps.start.i;
        hero.j = gameConfig.maps.start.j;
        hero.states = [];
        hero.states[0] = {
            charaset: gameConfig.hero.charaset,
            condition: "always",
            trigger: 0,
            action: ""
        };
        return hero;
    }
    DataDefaults.getHero = getHero;
    function getEventState() {
        return {
            condition: "always",
            trigger: 0
        };
    }
    DataDefaults.getEventState = getEventState;
    ;
    function getString() {
        return "";
    }
    DataDefaults.getString = getString;
    function getTree() {
        return {};
    }
    DataDefaults.getTree = getTree;
    function getCharacter() {
        return {
            charaset: ""
        };
    }
    DataDefaults.getCharacter = getCharacter;
    ;
})(DataDefaults || (DataDefaults = {}));
;

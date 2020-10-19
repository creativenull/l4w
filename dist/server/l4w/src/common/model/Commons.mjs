;
;
;
;
;
;
;
export class BlockDirection {
}
BlockDirection.NONE = 0;
BlockDirection.UP = Math.pow(2, 0);
BlockDirection.DOWN = Math.pow(2, 1);
BlockDirection.LEFT = Math.pow(2, 2);
BlockDirection.RIGHT = Math.pow(2, 3);
BlockDirection.ALL = BlockDirection.UP + BlockDirection.DOWN + BlockDirection.LEFT + BlockDirection.RIGHT;
;
;
;
;
export var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["IT"] = "it";
    LanguageEnum["EN"] = "en";
})(LanguageEnum || (LanguageEnum = {}));

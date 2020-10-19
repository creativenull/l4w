import { LanguageEnum } from "./model/Commons";
export const gameConfig = {
    maps: {
        start: {
            map: "0",
            i: 0,
            j: 0
        }
    },
    hero: {
        name: "Fart",
        charaset: "fart.png"
    },
    ui: {
        lang: LanguageEnum.EN,
        skin: "ld3-webskin1.png",
        enableCLI: true
    }
};

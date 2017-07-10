///<reference path="../model/Commons.ts" />

/**
 * Module for generic utility methods
 */
namespace Utils {

    export function isEmpty(obj: any): boolean {
        if (obj === null || typeof obj === "undefined") {
            return true;
        } else if (typeof obj === "string") {
            return obj === "";
        } else if (typeof obj === "object" && "size" in obj) {
            return obj.size === 0;
        } else if (obj.constructor === Array || obj.constructor === String) {
            return obj.length === 0;
        }
        return false;
    }
    
    export function now() {
        return (new Date()).getTime();    
    }
    
    export function mergeMaps<T>(primary: Map<string, T>, secondary: Map<string, T>): Map<string, T> {
        var newMap: Map<string, T> = new Map<string, T>();
        function addToNewMap(value: T, index: string, map: Map<string, T>) {
            newMap.set(index, value);
        }
        secondary.forEach(addToNewMap);
        primary.forEach(addToNewMap);
        return newMap;
    }
    
    export function gIDToCell(gid: number, width: number): ICell {
        return {
            i: gid % width,
            j: Math.floor(gid / width)
        };
    }
    
    export function isBlocked(block: number, blockDirection: number): boolean {
        return (block & blockDirection) === blockDirection;
    }
    
    export function getBlock(up: boolean, down: boolean, left: boolean, right: boolean): number {
        let block: number = 0;
        block |= up? BlockDirection.UP : 0;
        block |= down? BlockDirection.DOWN : 0;
        block |= left? BlockDirection.LEFT : 0;
        block |= right? BlockDirection.RIGHT : 0;
        return block;
    }
    
    export function isDirectionsOpposed(d1: DirectionEnum, d2: DirectionEnum) {
        switch (d1) {
            case DirectionEnum.UP:
                if (d2 === DirectionEnum.DOWN) {
                    return true;
                }
                break;
            case DirectionEnum.DOWN:
                if (d2 === DirectionEnum.UP) {
                    return true;
                }
                break;
            case DirectionEnum.LEFT:
                if (d2 === DirectionEnum.RIGHT) {
                    return true;
                }
                break;
            case DirectionEnum.RIGHT:
                if (d2 === DirectionEnum.LEFT) {
                    return true;
                }
                break;
        }
        return false;
    }
    
    export function getRandomBoolean(): boolean {
        return Math.random() >= 0.5;
    }
}
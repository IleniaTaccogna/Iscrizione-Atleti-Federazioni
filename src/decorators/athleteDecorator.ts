import "reflect-metadata";

export function isIscrivibile(isIscribible: boolean) {
    return function(target: Function) {
        Reflect.defineMetadata("isIscribible", isIscribible, target);
    };
}

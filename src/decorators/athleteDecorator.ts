import "reflect-metadata";

export function isIscrivibile(isIscrivibile: boolean) {
    return function(target: Function) {
        Reflect.defineMetadata("isIscrivibile", isIscrivibile, target);
    };
}

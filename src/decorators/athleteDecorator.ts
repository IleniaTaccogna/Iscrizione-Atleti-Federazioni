import "reflect-metadata";

export function Federable(isIscrivibile: boolean) {
    return function(target: Function) {
        Reflect.defineMetadata("Iscrivibile", isIscrivibile, target);
    };
}
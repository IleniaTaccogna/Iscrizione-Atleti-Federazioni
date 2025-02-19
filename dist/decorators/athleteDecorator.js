"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Federable = Federable;
require("reflect-metadata");
function Federable(isIscrivibile) {
    return function (target) {
        Reflect.defineMetadata("Iscrivibile", isIscrivibile, target);
    };
}

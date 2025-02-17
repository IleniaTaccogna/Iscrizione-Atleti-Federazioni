"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIscrivibile = isIscrivibile;
require("reflect-metadata");
function isIscrivibile(isIscribible) {
    return function (target) {
        Reflect.defineMetadata("isIscribible", isIscribible, target);
    };
}

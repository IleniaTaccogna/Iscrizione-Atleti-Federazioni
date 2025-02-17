"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIscrivibile = isIscrivibile;
require("reflect-metadata");
function isIscrivibile(isIscrivibile) {
    return function (target) {
        Reflect.defineMetadata("isIscrivibile", isIscrivibile, target);
    };
}

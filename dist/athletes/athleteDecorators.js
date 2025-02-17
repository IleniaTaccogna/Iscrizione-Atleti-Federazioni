"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIscribable = IsIscribable;
require("reflect-metadata");
// Decoratore per aggiungere metadati sul tipo di atleta e se è iscrivibile
function IsIscribable(isIscribible) {
    return function (target) {
        // Usa i metadati per associare la possibilità di iscrizione alla classe
        Reflect.defineMetadata("isIscribible", isIscribible, target);
    };
}

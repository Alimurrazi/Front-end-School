"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(response) {
        this.name = response.name;
        this.description = response.description;
        this.language = response.language;
        this.forks = response.forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;

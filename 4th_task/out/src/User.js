"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(response) {
        this.name = response.name;
        this.repo = response.public_repos;
        this.followers = response.followers;
        this.following = response.following;
    }
    return User;
}());
exports.User = User;

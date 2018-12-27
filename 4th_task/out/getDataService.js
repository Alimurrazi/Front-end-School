"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var _ = __importStar(require("lodash"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var security = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var getDataService = /** @class */ (function () {
    function getDataService() {
    }
    getDataService.prototype.getUserData = function (userName) {
        request.get('https://api.github.com/users/' + userName, security, function (error, response, body) {
            var user = new User_1.User(body);
            console.log(user);
        });
    };
    getDataService.prototype.getRepoData = function (userName) {
        var repoInfo;
        request.get('https://api.github.com/users/' + userName + '/repos', security, function (error, response, body) {
            var length;
            length = _.size(body);
            for (var i = 0; i < length; i++) {
                var repo = new Repo_1.Repo(body[i]);
                // console.log(repo);
                repoInfo[i] = repo;
            }
            console.log(repoInfo);
        });
    };
    return getDataService;
}());
exports.getDataService = getDataService;

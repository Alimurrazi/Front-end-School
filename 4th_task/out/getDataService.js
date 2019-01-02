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
var es6_promise_1 = require("es6-promise");
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
        /*
        request.get('https://api.github.com/users/' + userName, security, (error: any, response: any, body: any) => {
            console.log("statusCode.....");
            console.log(response.statusCode);
            if(response.statusCode == 200)
            {
                var user = new User(body);
            //    console.log(user);
                return user;
            }
            else
            {
                console.log(response.statusCode);
            }
        })*/
        return new es6_promise_1.Promise(function (resolve, reject) {
            request.get('https://api.github.com/users/' + userName, security, function (error, response, body) {
                if (response.statusCode == 200) {
                    var user = new User_1.User(body);
                    return resolve(user);
                }
                else {
                    return reject(error);
                }
            });
        });
    };
    getDataService.prototype.getRepoData = function (userName) {
        var repoInfo = new Array();
        request.get('https://api.github.com/users/' + userName + '/repos', security, function (error, response, body) {
            if (error != null)
                console.log(error);
            else {
                var length;
                length = _.size(body);
                //  console.log(body);
                for (var i = 0; i < length; i++) {
                    var repo = new Repo_1.Repo(body[i]);
                    repoInfo.push(repo);
                }
                console.log(repoInfo);
            }
        });
    };
    return getDataService;
}());
exports.getDataService = getDataService;

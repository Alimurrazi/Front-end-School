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
        return new es6_promise_1.Promise(function (resolve, reject) {
            request.get('https://api.github.com/users/' + userName, security, function (error, response, body) {
                if (response.statusCode == 200) {
                    return resolve(body);
                }
                else {
                    return reject(body);
                }
            });
        });
    };
    getDataService.prototype.getRepoData = function (userName) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            request.get('https://api.github.com/users/' + userName + '/repos', security, function (error, response, body) {
                if (response.statusCode == 200) {
                    return resolve(body);
                }
                else {
                    return reject(body);
                }
            });
        });
    };
    return getDataService;
}());
exports.getDataService = getDataService;

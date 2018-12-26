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
var getDataService = /** @class */ (function () {
    function getDataService() {
    }
    getDataService.prototype.getUserData = function (userName) {
        request.get('https://api.github.com/users' + userName, function (response) {
            console.log(response);
        });
    };
    return getDataService;
}());
exports.getDataService = getDataService;

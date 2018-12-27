import * as request from 'request';
import * as _ from 'lodash';
import { User } from "./User";
import { Repo } from "./Repo";

var security: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

export class getDataService {
    getUserData(userName: string) {
        request.get('https://api.github.com/users/' + userName, security, (error: any, response: any, body: any) => {
            var user = new User(body);
            console.log(user);
        })
    }

    getRepoData(userName: string) {
        var repoInfo = [];
        request.get('https://api.github.com/users/' + userName + '/repos', security, (error: any, response: any, body: any) => {
            var length: number;
            length = _.size(body);
            for (let i = 0; i < length; i++) {
                var repo: Repo = new Repo(body[i]);
               // console.log(repo);
                repoInfo.push(repo);
            }
            console.log(repoInfo);
        })
    }
}
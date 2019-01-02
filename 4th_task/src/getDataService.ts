import * as request from 'request';
import * as _ from 'lodash';
import { User } from "./User";
import { Repo } from "./Repo";
import {Promise} from 'es6-promise';

var security: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

export class getDataService {

    getUserData(userName: string) {
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
        return new Promise(function(resolve, reject){
            request.get('https://api.github.com/users/' + userName, security, (error: any, response: any, body: any) => {
                    if(response.statusCode == 200)
                    {
                        var user = new User(body);
                        return resolve(user);
                    }
                    else
                    {
                        return reject(error);
                    }
            })
        });

    }



    getRepoData(userName: string) {
        var repoInfo = new Array();
        request.get('https://api.github.com/users/' + userName + '/repos', security, (error: any, response: any, body: any) => {

            if (error!=null)
                console.log(error);
            else {
                var length: number;
                length = _.size(body);
                //  console.log(body);
                for (let i = 0; i < length; i++) {
                    var repo: Repo = new Repo(body[i]);
                    repoInfo.push(repo);
                }
                console.log(repoInfo);
            }

        })
    }
}
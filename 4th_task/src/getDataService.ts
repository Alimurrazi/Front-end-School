import * as request from 'request';
import * as _ from 'lodash';
import { Promise } from 'es6-promise';

var security: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

export class getDataService {

    getUserData(userName: string) {
        return new Promise(function (resolve, reject) {
            request.get('https://api.github.com/users/' + userName, security, (error: any, response: any, body: any) => {
                if (response.statusCode == 200) {
                      return resolve(body);
                }
                else {
                    return reject(body);
                }
            })
        });

    }



    getRepoData(userName: string) {

        return new Promise(function (resolve, reject) {
            request.get('https://api.github.com/users/' + userName + '/repos', security, (error: any, response: any, body: any) => {

                if (response.statusCode == 200) {
                    return resolve(body);
                }
                else {
                    return reject(body);
                }
            });
        });
    }


}
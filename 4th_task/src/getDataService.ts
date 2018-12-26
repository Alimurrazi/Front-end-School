import * as request from 'request';
import { User } from "./User";

export class getDataService {
    getUserData(userName: string) {
        let security: any = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }
        request.get('https://api.github.com/users/' + userName, security, (error: any, response: any, body: any) => {
            console.log(body);
            var user = new User(body);
            console.log(user);
        })
    }
}
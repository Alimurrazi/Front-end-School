export class User{
    name: string;
    repo: number;
    followers: number;
    following: number;

    constructor(response: any){
        this.name = response.name;
        this.repo = response.public_repos;
        this.followers = response.followers;
        this.following = response.following;
    }
}
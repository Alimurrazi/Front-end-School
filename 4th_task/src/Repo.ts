export class Repo{
    name: string;
    description: string;
    language: string;
    forks: number;

    constructor(response: any){
        this.name = response.name;
        this.description = response.description;
        this.language = response.language;
        this.forks = response.forks_count;
    }
}
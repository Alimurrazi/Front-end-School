import { getDataService } from './getDataService';
import * as _ from 'lodash';
import { User } from "./User";
import { Repo } from "./Repo";

var data = new getDataService();

async function getUser() {
  try {
    var user: any = await data.getUserData("alimurrazi");
    user = new User(user);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

async function getRepo() {
  try {
    var repo: any = await data.getRepoData("alimurrazi");
    var repoInfo = new Array();
    var length: number;
    length = _.size(repo);
    for (let i = 0; i < length; i++) {
      var singleRepo: Repo = new Repo(repo[i]);
      repoInfo.push(singleRepo);
    }
    console.log(repoInfo);
  } catch (error) {
    console.log(error);
  }
}

getUser();
getRepo();
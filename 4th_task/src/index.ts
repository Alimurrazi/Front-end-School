import {getDataService} from './getDataService';

var data  = new getDataService();
/*
var userData:any = data.getUserData("alimurrazi1");
console.log(userData);
*/

async function init()
{
   try{
    var userData:any = await data.getUserData("alimurrazi");
    console.log(userData);
   }catch(error){
     console.log(error);
   }
}

init();
//data.getRepoData("alimurrazi");
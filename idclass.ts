import { config } from "dotenv";
config();

const isTest = process.env.isTest === "true";

class IDClass {

  ownershipID() {
    return "771514771295436851";
  }


  logChannel() {
    return isTest ? "1355635959860826348" : "1353519265684127744";
  }

   
  
  restrictedCategory() {
    return isTest ? "1376046173403484281" : "1376046173403484281";
  }

  roleMods() {
  return [
    this.roleAdmin(),
  ];
}

  roleAdmin() {
    return isTest ? "1375931796180566109" : "1375931796180566109";
  }

  channelErrorLogs() {
    return isTest ? "1376192088474910801" : "1376192088474910801";
  }

  

  
  channelJL() {
    return isTest ? "1376214623073865768" : "1376214623073865768";
  }
 
  channelEL() {
    return isTest ? "1376047084196859934" : "1376047084196859934";
  }
 
  
}

// role/channelNAME() {
//  return isTest ? "TEST_ROLE/CHANNEL_ID" : "MAIN_ROLE_CHANNEL_ID";
//}

const idclass = new IDClass();
export default idclass;

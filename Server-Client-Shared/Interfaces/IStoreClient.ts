const UserClient = require("../ModelsClient/UserClient")
interface IStore{
    isLogin         : boolean;
    user            : typeof UserClient;
    mainPage        : AllMainPagesType;
    subPage         : AllSubPagesType;
    allAvatars      : any;
    activeAvatars   : any;


    avatarName          : string;
    avatarHp            : number;          
    avatarDamage        : number;              
    avatarEnergy        : number;              
    avatarRefillEnergy  : number;                  
    avatarExp           : number;
    avatarSilver        : number;
    avatarGold          : number;
    avatarRedPowder     : number;
    avatarDiamond       : number;
    createdDate         : string;

    sound : boolean;
    music : boolean;

    tempAudioRef: any;
}



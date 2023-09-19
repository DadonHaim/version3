interface IStore<>{
    isLogin         : boolean;
    user            : IUser;
    mainPage        : AllMainPages;
    subPage         : AllSubPage;
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



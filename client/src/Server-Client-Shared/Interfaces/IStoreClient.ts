const UserClient = require("../ModelsClient/UserClient")
interface IStore{
    isLogin         : boolean;
    user            : typeof UserClient;
    mainPage        : AllMainPagesType;
    subPage         : AllSubPagesType;
    allAvatars      : any;
    activeAvatar    : any;


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

    tempAudioRef ?: any;
    settings:{
        CONTAINER_APP_GRID          : string,
        GUEST_HEADER_POSITION       : string,
        GUEST_MENU_POSITION         : string,
        GUEST_MAIN_POSITION         : string,
        GUEST_FOOTER_POSITION       : string,
        GUEST_COPYRIGHT_POSITION    : string,
        
        AVATAR_VIEW_GRID            : string,      
        GIRL_AVATAR_BODY_POSITION   : string,      
        GIRL_SHIRT_POSITION         : string,      
        GIRL_SHOES_POSITION         : string,      
        GIRL_PANTS_POSITION         : string,      
        BOY_AVATAR_BODY_POSITION    : string,      
        BOY_SHIRT_POSITION          : string,      
        BOY_SHOES_POSITION          : string,      
        BOY_PANTS_POSITION          : string,      
    }

}


interface IStore2{
    isLogin         ?: boolean;
    user            ?: typeof UserClient;
    mainPage        ?: AllMainPagesType;
    subPage         ?: AllSubPagesType;
    allAvatars      ?: any;
    activeAvatar    ?: any;


    avatarName          ?: string;
    avatarHp            ?: number;          
    avatarDamage        ?: number;              
    avatarEnergy        ?: number;              
    avatarRefillEnergy  ?: number;                  
    avatarExp           ?: number;
    avatarSilver        ?: number;
    avatarGold          ?: number;
    avatarRedPowder     ?: number;
    avatarDiamond       ?: number;
    createdDate         ?: string;

    sound ?: boolean;
    music ?: boolean;

    tempAudioRef ?: any;
    settings?:{
        CONTAINER_APP_GRID          ?: string,
        GUEST_HEADER_POSITION       ?: string,
        GUEST_MENU_POSITION         ?: string,
        GUEST_MAIN_POSITION         ?: string,
        GUEST_FOOTER_POSITION       ?: string,
        GUEST_COPYRIGHT_POSITION    ?: string,
        
        AVATAR_VIEW_GRID            ?: string,      
        GIRL_AVATAR_BODY_POSITION   ?: string,      
        GIRL_SHIRT_POSITION         ?: string,      
        GIRL_SHOES_POSITION         ?: string,      
        GIRL_PANTS_POSITION         ?: string,      
        BOY_AVATAR_BODY_POSITION    ?: string,      
        BOY_SHIRT_POSITION          ?: string,      
        BOY_SHOES_POSITION          ?: string,      
        BOY_PANTS_POSITION          ?: string,      
    }

}



const  AvatarClient = require("../Server-Client-Shared/ModelsClient/AvatarClient");
const UserClient    = require("../Server-Client-Shared/ModelsClient/UserClient");
const ItemClient    = require("../Server-Client-Shared/ModelsClient/ItemClient");

interface IStore{
    //flags:
    isLogin     : boolean;
    sound       : boolean;
    music       : boolean;

    //settings:
    settings:IGlobalSettings&IClientSettings; 

    //active Avatar:
    activeAvatar:typeof AvatarClient;

    createAvatar_name    : string;
    createAvatar_gender  : IGender;
    createAvatar_magic   : MagicNameType;
    createAvatar_hat     : any;//typeof ItemClient;
    createAvatar_shirt   : any;//typeof ItemClient;
    createAvatar_pants   : any;//typeof ItemClient;
    createAvatar_shoes   : any;//typeof ItemClient;
    createAvatar_weapon  : any;//typeof ItemClient;


    //navigate
    mainPage        : AllMainPagesType;
    subPage         : AllSubPagesType;

    //references
    user            : typeof UserClient;
    allAvatars      : typeof AvatarClient[];


    avatarItems     : typeof ItemClient[]


}


type allStoreType =
     "isLogin"|
     "sound"|
     "music"|
     "createAvatar_name  "|
     "createAvatar_gender"|
     "createAvatar_magic" |
     "createAvatar_hat   "|
     "createAvatar_shirt "|
     "createAvatar_pants "|
     "createAvatar_shoes "|
     "createAvatar_weapon"|
     "settings"|
     "subPage"|
     ""
;
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

    //navigate
    mainPage        : AllMainPagesType;
    subPage         : AllSubPagesType;

    //references
    user            : typeof UserClient;
    allAvatars      : typeof AvatarClient[];


    avatarItems     : typeof ItemClient[]


}
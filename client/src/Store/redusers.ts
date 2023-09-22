import { AvatarClient, UserClient } from "../importAll";

const reducers = {
    setIsLogin : (state:IStore , action:IAction<boolean>)=>{
        state.isLogin   = action.payload;
        if(action.payload == true){
            state.mainPage  = "Game";
            state.subPage   = "Game-SelectAvatar";
        }
        else{
            state.mainPage  = "Guest";
            state.subPage   = "Guest-Home";
            UserClient.KillToken();
        }
    },
    setUser     : (state:IStore , action:IAction<UserClient>)       => {state.user     = action.payload},
    setMainPage : (state:IStore , action:IAction<AllMainPagesType>) => {
        state.mainPage = action.payload;
        if(action.payload == "Game")
            state.subPage  = "Game-SelectAvatar"
        if(action.payload == "Guest")
            state.subPage  = "Guest-Home"
    },
    setSubPage  : (state:IStore , action:IAction<AllSubPagesType>)   => {state.subPage  = action.payload},

    setAllAvatars         : (state:IStore , action:IAction<AvatarClient[]>) => {state.allAvatars           = action.payload},
    setActiveAvatars      : (state:IStore , action:IAction<AvatarClient>)   => {state.activeAvatars        = action.payload},
    setAvatarName         : (state:IStore , action:IAction<string>)         => {state.avatarName           = action.payload},
    setAvatarExp          : (state:IStore , action:IAction<number>)         => {state.avatarExp            = action.payload},
    setAvatarHp           : (state:IStore , action:IAction<number>)         => {state.avatarHp             = action.payload},
    setAvatarDamage       : (state:IStore , action:IAction<number>)         => {state.avatarDamage         = action.payload},
    setAvatarEnergy       : (state:IStore , action:IAction<number>)         => {state.avatarEnergy         = action.payload},
    setAvatarRefillEnergy : (state:IStore , action:IAction<number>)         => {state.avatarRefillEnergy   = action.payload},
    setAvatarSilver       : (state:IStore , action:IAction<number>)         => {state.avatarSilver         = action.payload},
    setAvatarGold         : (state:IStore , action:IAction<number>)         => {state.avatarGold           = action.payload},
    setAvatarRedPowder    : (state:IStore , action:IAction<number>)         => {state.avatarRedPowder      = action.payload},
    setAvatarDiamond      : (state:IStore , action:IAction<number>)         => {state.avatarDiamond        = action.payload},
    setMusic              : (state:IStore , action:IAction<boolean>)        => {state.music                = action.payload},
    setSound              : (state:IStore , action:IAction<boolean>)        => {state.sound                = action.payload},
}

export default reducers


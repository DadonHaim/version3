import { AvatarClient, UserClient } from "../importAll";

const reducers = {
    setIsLogin : (state:IStore , action:IAction<boolean>)=>{
        state.isLogin   = action.payload;
        if(action.payload == true)
            state.mainPage  = "Game";
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
    setSubPage            : (state:IStore , action:IAction<AllSubPagesType>)=> {state.subPage  = action.payload},
    setActiveAvatar       : (state:IStore , action:IAction<AvatarClient>)   => {state.activeAvatar                = action.payload},
    setCreateAvatar       : (state:IStore , action:IAction<AvatarClient>)   => {state.createAvatar                = action.payload},
    setAllAvatars         : (state:IStore , action:IAction<AvatarClient[]>) => {state.allAvatars                  = action.payload},
    setAvatarName         : (state:IStore , action:IAction<string>)         => {state.activeAvatar.name           = action.payload},
    setAvatarExp          : (state:IStore , action:IAction<number>)         => {state.activeAvatar.exp            = action.payload},
    setAvatarHp           : (state:IStore , action:IAction<number>)         => {state.activeAvatar.hp             = action.payload},
    setAvatarDamage       : (state:IStore , action:IAction<number>)         => {state.activeAvatar.damage         = action.payload},
    setAvatarEnergy       : (state:IStore , action:IAction<number>)         => {state.activeAvatar.energy         = action.payload},
    setAvatarRefillEnergy : (state:IStore , action:IAction<number>)         => {state.activeAvatar.refillEnergy   = action.payload},
    setAvatarSilver       : (state:IStore , action:IAction<number>)         => {state.activeAvatar.silver         = action.payload},
    setAvatarGold         : (state:IStore , action:IAction<number>)         => {state.activeAvatar.gold           = action.payload},
    setAvatarRedPowder    : (state:IStore , action:IAction<number>)         => {state.activeAvatar.redPowder      = action.payload},
    setAvatarDiamond      : (state:IStore , action:IAction<number>)         => {state.activeAvatar.diamond        = action.payload},
    setMusic              : (state:IStore , action:IAction<boolean>)        => {state.music                       = action.payload},
    setSound              : (state:IStore , action:IAction<boolean>)        => {state.sound                       = action.payload},

    setAllSettings        : (state:IStore , action:IAction<ISettings>)      => { for(let key in action.payload) state.settings[key] = action.payload[key]},
}

export default reducers


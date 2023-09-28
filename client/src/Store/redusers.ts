import { AvatarClient, Settings, UserClient } from "../importAll";

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
    setSubPage  : (state:IStore , action:IAction<AllSubPagesType>)   => {state.subPage  = action.payload},

    setAllAvatars         : (state:IStore , action:IAction<AvatarClient[]>) => {state.allAvatars           = action.payload},
    setActiveAvatar      : (state:IStore , action:IAction<AvatarClient>)   => {state.activeAvatar        = action.payload},
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

    setAllSettings         : (state:IStore , action:IAction<Settings>)       => {
        state.settings.CONTAINER_APP_GRID           = (action.payload.CONTAINER_APP_GRID        )? action.payload.CONTAINER_APP_GRID       :"";
        state.settings.GUEST_HEADER_POSITION        = (action.payload.GUEST_HEADER_POSITION     )? action.payload.GUEST_HEADER_POSITION    :"";
        state.settings.GUEST_MENU_POSITION          = (action.payload.GUEST_MENU_POSITION       )? action.payload.GUEST_MENU_POSITION      :"";
        state.settings.GUEST_MAIN_POSITION          = (action.payload.GUEST_MAIN_POSITION       )? action.payload.GUEST_MAIN_POSITION      :"";
        state.settings.GUEST_FOOTER_POSITION        = (action.payload.GUEST_FOOTER_POSITION     )? action.payload.GUEST_FOOTER_POSITION    :"";
        state.settings.GUEST_COPYRIGHT_POSITION     = (action.payload.GUEST_COPYRIGHT_POSITION  )? action.payload.GUEST_COPYRIGHT_POSITION :"";
        state.settings.AVATAR_VIEW_GRID             = (action.payload.AVATAR_VIEW_GRID          )? action.payload.AVATAR_VIEW_GRID          :""; 
        state.settings.GIRL_AVATAR_BODY_POSITION    = (action.payload.GIRL_AVATAR_BODY_POSITION )? action.payload.GIRL_AVATAR_BODY_POSITION :""; 
        state.settings.GIRL_SHIRT_POSITION          = (action.payload.GIRL_SHIRT_POSITION       )? action.payload.GIRL_SHIRT_POSITION       :""; 
        state.settings.GIRL_SHOES_POSITION          = (action.payload.GIRL_SHOES_POSITION       )? action.payload.GIRL_SHOES_POSITION       :""; 
        state.settings.GIRL_PANTS_POSITION          = (action.payload.GIRL_PANTS_POSITION       )? action.payload.GIRL_PANTS_POSITION       :""; 
        state.settings.BOY_AVATAR_BODY_POSITION     = (action.payload.BOY_AVATAR_BODY_POSITION  )? action.payload.BOY_AVATAR_BODY_POSITION  :""; 
        state.settings.BOY_SHIRT_POSITION           = (action.payload.BOY_SHIRT_POSITION        )? action.payload.BOY_SHIRT_POSITION        :""; 
        state.settings.BOY_SHOES_POSITION           = (action.payload.BOY_SHOES_POSITION        )? action.payload.BOY_SHOES_POSITION        :""; 
        state.settings.BOY_PANTS_POSITION           = (action.payload.BOY_PANTS_POSITION        )? action.payload.BOY_PANTS_POSITION        :""; 
    },
}

export default reducers


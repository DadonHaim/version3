import {configureStore} from "@reduxjs/toolkit";
import {createSlice   } from "@reduxjs/toolkit";
import reducers         from "./redusers";

const initialState :IStore = {
    isLogin             : false,
    user                : {},
    mainPage            : "Guest",
    subPage             : "Guest-Home",
    allAvatars          : [{}],
    activeAvatar       : {},

    avatarName          : "",
    avatarHp            : 0,
    avatarDamage        : 0,
    avatarEnergy        : 0,
    avatarRefillEnergy  : 0,
    avatarExp           : 0,
    avatarSilver        : 0,
    avatarGold          : 0,
    avatarRedPowder     : 0,
    avatarDiamond       : 0,

    createdDate         : "",

    music : true,
    sound : true, 
    tempAudioRef : null,

    settings:{
        CONTAINER_APP_GRID           : "",
        GUEST_HEADER_POSITION        : "",
        GUEST_MENU_POSITION          : "",
        GUEST_MAIN_POSITION          : "",
        GUEST_FOOTER_POSITION        : "",
        GUEST_COPYRIGHT_POSITION     : "",
        AVATAR_VIEW_GRID             : "",
        GIRL_AVATAR_BODY_POSITION    : "",
        GIRL_SHIRT_POSITION          : "",
        GIRL_SHOES_POSITION          : "",
        GIRL_PANTS_POSITION          : "",
        BOY_AVATAR_BODY_POSITION     : "",
        BOY_SHIRT_POSITION           : "",
        BOY_SHOES_POSITION           : "",
        BOY_PANTS_POSITION           : "",
    }


}


const states  = createSlice({name:"store",initialState,reducers})
const myStore = configureStore({reducer:states.reducer});
const actions = states.actions;

export {actions};
export default myStore;





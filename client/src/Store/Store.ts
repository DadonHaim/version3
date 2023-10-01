// import { AvatarClient } from "../importAll";
import {configureStore} from "@reduxjs/toolkit";
import {createSlice   } from "@reduxjs/toolkit";
import reducers         from "./redusers";
import { AvatarClient } from "../importAll";
const initialState :IStore = {
    isLogin             : false,
    user                : {},
    mainPage            : "Guest",
    subPage             : "Guest-Home",
    allAvatars          : [],

    activeAvatar :{},
    createAvatar: {
        name        : null,
        gender      : null,
        hat         : null,
        shirt       : null,
        pants       : null,
        shoes       : null,
        weapon      : null,
    },

    music : true,
    sound : true, 

    settings:{
        CONTAINER_APP_GRID           : "",
        GUEST_HEADER_POSITION        : "",
        GUEST_MENU_POSITION          : "",
        GUEST_MAIN_POSITION          : "",
        GUEST_FOOTER_POSITION        : "",
        GUEST_COPYRIGHT_POSITION     : "",
        AVATAR_VIEW_GRID             : "",
        GIRL_AVATAR_BODY_POSITION    : "",
        GIRL_HAT_POSITION          : "",
        GIRL_SHIRT_POSITION          : "",
        GIRL_SHOES_POSITION          : "",
        GIRL_PANTS_POSITION          : "",
        BOY_AVATAR_BODY_POSITION     : "",
        BOY_HAT_POSITION           : "",
        BOY_SHIRT_POSITION           : "",
        BOY_SHOES_POSITION           : "",
        BOY_PANTS_POSITION           : "",
    },

    avatarItems : [],

}


const states  = createSlice({name:"store",initialState,reducers})
const myStore = configureStore({reducer:states.reducer});
const actions = states.actions;

export {actions};
export default myStore;





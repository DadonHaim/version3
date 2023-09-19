import {configureStore} from "@reduxjs/toolkit";
import {createSlice   } from "@reduxjs/toolkit";
import reducers         from "./redusers";

const initialState :IStore = {
    isLogin             : false,
    user                : {},
    mainPage            : "Guest",
    subPage             : "Guest-Home",
    allAvatars          : [{}],
    activeAvatars       : {},

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
}


const states  = createSlice({name:"store",initialState,reducers})
const myStore = configureStore({reducer:states.reducer});
const actions = states.actions;

export {actions};
export default myStore;





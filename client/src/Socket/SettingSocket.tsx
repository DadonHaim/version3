import { Settings } from "../importAll";
import { socket } from "./Socket";

export function Get_All_Setting(store:any){
    socket.emit("Start-Give-Me-Settings");
    socket.on<Settings>("Start-Get-Settings",(settings=>{
        store.dispatch(store.actions.setAllSettings(settings))
    }))
}


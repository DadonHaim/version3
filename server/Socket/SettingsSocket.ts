import { Settings, SocketVer2, User } from "./../importAll";


export default function SettingsSocket(socket:SocketVer2){
 
    socket.on("Start-Give-Me-Settings",()=>{
        let setting  = new Settings();
        
        socket.emit<Settings>("Start-Get-Settings",setting)
    })


}

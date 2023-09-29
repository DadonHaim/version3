import { DebugSocket, User } from "./../importAll";
import AvatarSocket from "./AvatarSocket";
import GuestSocket from "./GeustSocket";


export default (socket:SocketVer2)=>{
    GuestSocket(socket);
    AvatarSocket(socket);
}

    


export  class SocketVer2{
    public socket;
    public user: User;
    public constructor(socket){
        this.socket = socket
        this.user = new User();
    }
    public On<R=any>(
        id:client,
        obj : middleware,
        call?:(data?:R)=>void
    ){
        let Continue = true;
        for(let key in obj)
            if(!obj[key](this)){
                Continue = false;
                break;
            }
        if(Continue)
            this.socket.on(id, (data)=>{
                DebugSocket("client:\t "+id);          
                call(data);
            }) 
    }

    
    public on<R=any>(id:client,call?:(data?:R)=>void){
        this.socket.on(id, (data)=>{
            DebugSocket("client:\t "+id);
            call(data);
        }) 
    }


    
    public Emit<R=any>(id:server , data?:R){
        DebugSocket("server:\t "+id)
        this.socket.emit(id,data) 
    }
    public emit<R=any>(id:server , data?:R){
        DebugSocket("server:\t "+id)
        this.socket.emit(id,data) 
    }
}   

interface middleware{
    [key: string]:(soc:SocketVer2)=>boolean;

}
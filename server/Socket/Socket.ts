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



    public On<R=any>(id:client,arr :Array<(x:any)=>boolean>, call?:(data?:R)=>void){     
        this.socket.on(id, (data)=>{
                let Continue = arr.every((v,i)=>{return arr[i](this)})
                DebugSocket("client:\t "+id);    
                if(Continue)      
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

type  middleware =boolean;

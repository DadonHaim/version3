import { DebugSocket, User } from "./../importAll";

export default class SocketVer2{
    public socket;

    public user: User;
    public constructor(socket){
        this.socket = socket
        this.user = new User();
    }

    public On<T=any,R=any>(id:T ,call?:(data?:R)=>void){
        this.socket.on(id, (data)=>{
            DebugSocket("client:\t "+id)
            call(data);
        }) 
    }

    public Emit<R=any>(id:server , data?:R){
        DebugSocket("server:\t "+id)
        this.socket.emit(id,data) 
    }

}   
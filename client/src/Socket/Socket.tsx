import {connect} from 'socket.io-client';
import { createContext, useContext } from 'react';

 const SocketContext = createContext<any>( undefined as any);
 const socketConnection = connect('http://localhost:3001'); 



export function SocketProvider({ children }:any) {
    return (
        <SocketContext.Provider value={socket}>
        {children}
        </SocketContext.Provider>
    )
}


class Socket{
  public connection : any;
  
  constructor(soc:any){
    this.connection = soc;
  }


  on<R=any>(id:server , callback:(data:R)=>void){
    this.connection.on(id,(data?:any)=>{
        if(data){
            if(data as R)
                callback(data);
            else throw "callback no valid";
        }
    })
  }
  emit<R=any>(id:client , send?:R){
    this.connection.emit(id,send)    
  }
}

const socket = new Socket(socketConnection);
export {socket}


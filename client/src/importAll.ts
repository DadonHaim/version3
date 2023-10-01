//libs
import React,{useEffect,useState,memo}     from "react";
import { Provider }                        from "react-redux";
import ReactDOM                            from 'react-dom/client';


//global
import {Container,Div,Flex,Footer,Grid,Header,Aside,Main ,Lable,Icon,Name,Button,Img,Box,Copyright,Choice,Menu,Logo,Cloth,Avatar} from "./Components/Containers";
import GlobalStyle                        from "./Components/GlobalStyle";
import myStore                            from "./Store/Store"
import {socket}                           from "./Socket/Socket";
import Component                          from "./Components/ComponentLib";

//server-client
import LoginValidation                    from "./Server-Client-Shared/Validations/LoginValidation";
import RegisterValidation                 from "./Server-Client-Shared/Validations/RegisterValidation";
import UserClient                         from "./Server-Client-Shared/ModelsClient/UserClient";
import ConvertPoint                       from "./Server-Client-Shared/Functions/ConvertPoint";
import RandomString                       from "./Server-Client-Shared/Functions/RandomString";
import Debug                              from "./Server-Client-Shared/Dev/Debug";
import AvatarClient                       from "./Server-Client-Shared/ModelsClient/AvatarClient";
import ItemClient                         from "./Server-Client-Shared/ModelsClient/ItemClient";
import ResultValid                        from "./Server-Client-Shared/ResultValid";
import {LoginSettings,RegisterSettings}   from "./Server-Client-Shared/Validations/LoginValidation"


//components 
import App                                from './App';

//components - guest
import GuestHome                          from "./Components/Guest/GuestHome";
import GuestLogin                         from "./Components/Guest/GuestLogin";
import GuestRegister                      from "./Components/Guest/GuestRegister";
import Guest                              from "./Components/Guest/Guest"

//components - game
import Game                               from "./Components/Game/Game";          
import Inventory                          from "./Components/Game/Inventory";          
import MusicEffect                        from "./Components/Game/MusicEffect";          
import ControllerAudio                    from "./Components/Game/ControllerAudio";          
import {AvatarView, AvatarMinView}        from "./Components/Game/AvatarView";

//Game- Page:
import PageCreateAvatar     from "./Components/Game/pages/Page-Create-Avatar/Page-Create-Avatar";
import PageSelectAvatar     from "./Components/Game/pages/Page-Select-Avatar/Page-Select-Avatar";
import AvatarSelector       from "./Components/Game/pages/Page-Select-Avatar/AvatarSelector";


//hooks
import useStore                           from "./Hooks/useStore";
import useRefV2                           from "./Hooks/useRefV2";
import { useSelector ,useDispatch}        from "react-redux"
import useEffectV2                        from "./Hooks/useEffectV2"
import usePermission                      from "./Hooks/usePermission";  


//sockets:
import { Get_All_Setting }                  from "./Socket/SettingSocket"
import {Start_With_Token }                  from "./Socket/UserSocket"
import {Avatar_Give_Me_List }               from "./Socket/AvatarSocket"

//img                                     
const HeaderBackground = require("./Images/Backgrounds/headerGuest.jpg")
const FooterBackground = require("./Images/Backgrounds/headerGuest.jpg")

//libs              
export  {React                       }                  
export  {ReactDOM                    }                      
export  {useEffect,useState,memo     }                                      
export  {Provider                    }                      

//global
export  {Container,Div,Flex,Footer,Grid,Header,Aside,Main ,Lable,Icon,Name,Button,Img,Box,Copyright,Choice,Menu,Logo,Cloth,Avatar}                                                                                                                                
export  {GlobalStyle  }                                           
export  {myStore      }                                           
export  {socket       }                               
export  {Component    }                               
export  {ItemClient   }                               

//server-client
export {LoginValidation                 }                                   
export {RegisterValidation              }                                   
export {UserClient                      }                                   
export {ConvertPoint                    }                                   
export {RandomString                    }                                   
export {Debug                           }                                   
export {AvatarClient                    }                                   
export {ResultValid                     }                                   
export {LoginSettings,RegisterSettings  }                               

//components 
export  {App}

//components - guest



export  {GuestHome                }                         
export  {GuestLogin               }                         
export  {GuestRegister            }                         
export  {Guest                    }                         


//components - game
export  {Game               }                               
export  {ControllerAudio    }                              
export  {AvatarView         }                              
export  {AvatarMinView      }                              
export  {AvatarSelector     }                              
export  {Inventory          }                          
export  {MusicEffect        }                          
export  {PageCreateAvatar   }                          
export  {PageSelectAvatar   }                          


//hooks
export  {useStore                 }                                            
export  {useRefV2                 }                                            
export  {useSelector ,useDispatch }                                        
export  {useEffectV2              }                            
export  {usePermission            }                            
    
//sockets:
export  {Get_All_Setting       }                            
export  {Start_With_Token      }                                        
export  {Avatar_Give_Me_List   }                                        


//images
export {HeaderBackground}
export {FooterBackground}


class ResultSql{
    public ValidDB(s:any){}
    public NoValidDB(s:any){}
}
class Database{
    public QuerySync(s:string):ResultSql{return new ResultSql()}
}
export {Database}
























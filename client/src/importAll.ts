import React,{useEffect,useState,memo}                      from "react";
import {Container,Div,Flex,Footer,Grid,Header,Aside,Main ,Lable}   from "./Components/Global/Container";
import { Choice, Menu }                                     from "./Components/Global/Menu";
import LoginValidation                                      from "./Validations/LoginValidation";
import RegisterValidation                                   from "./Validations/RegisterValidation";
import useStore                                             from "./Hooks/useStore";
import useRefV2                                             from "./Hooks/useRefV2";
import Copyright                                            from "./Components/Global/Copyright";
import GuestHome                                            from "./Components/Guest/GuestHome";
import GuestLogin                                           from "./Components/Guest/GuestLogin";
import GuestRegister                                        from "./Components/Guest/GuestRegister";
import Guest                                                from "./Components/Guest/Guest";
import User                                                 from "./Models/User";
import Button                                               from "./Components/Global/Button";
import Debug                                                from "./Server-Client-Shared/Dev/Debug";
import { Provider }                                         from "react-redux";
import {SocketProvider}                                     from "./Socket/Socket"
import myStore                                              from "./Store/Store"
import GlobalStyle                                          from "./Components/Global/GlobalStyle";
import { useSelector }                                      from "react-redux"
import useEffectV2                                          from "./Hooks/useEffectV2"
import AvatarView                                           from "./Components/Game/comps/AvatarView";
import { useDispatch }                                      from "react-redux";
import {LoginSettings,RegisterSettings}                     from "./Server-Client-Shared/Settings"
import ConvertPoint                                         from "./Functions/ConvertPoint";
import App                                                  from './App';
import ReactDOM                                             from 'react-dom/client';
import ResultValid                                          from "./Server-Client-Shared/ResultValid";
import {socket}                                             from "./Socket/Socket";
import Game                                                 from "./Components/Game/Game";          
import GameCreateAvatar                                     from "./Components/Game/GameCreateAvatar";      
import GameSelectAvatar                                     from "./Components/Game/GameSelectAvatar";      
import AvatarClient                                         from "./Server-Client-Shared/ModelsClient/AvatarClient";
import ControllerAudio                                      from "./Components/Game/comps/ControllerAudio";                                             



const HeaderBackground = require("./Images/Backgrounds/headerGuest.jpg")
const FooterBackground = require("./Images/Backgrounds/headerGuest.jpg")

export { AvatarClient        } 
export { Game                }
export { AvatarView          } 
export { useEffectV2         } 
export { GameCreateAvatar    } 
export { GameSelectAvatar    } 
export { socket              } 
export { ControllerAudio     } 
export { LoginSettings       } 
export { RegisterSettings    } 
export { Provider            }   
export { myStore             }  
export { useDispatch         }  
export { Lable               }  
export { App                 }  
export { ResultValid         }  
export { ReactDOM            }  
export { ConvertPoint        }  
export { useSelector         }  
export { GuestRegister       }  
export { GuestLogin          }      
export { React               }  
export { memo                }  
export { useRefV2            }      
export { useState            }      
export { useEffect           }      
export { useStore            }      
export { Container           }      
export { Div                 }  
export { Flex                }  
export { Footer              }  
export { Grid                }  
export { Aside               }  
export { Header              }  
export { Main                }  
export { Copyright           }      
export { Choice              }  
export { Menu                }  
export { Guest               }  
export { GuestHome           }      
export { LoginValidation     }              
export { RegisterValidation  }              
export { User                }              
export { Button              }              
export { Debug               }              
export { GlobalStyle         }              



export {HeaderBackground}
export {FooterBackground}
























import React,{useEffect,useState,memo}                                                                          from "react";
import {Container,Div,Flex,Footer,Grid,Header,Aside,Main ,Lable,Icon,Name,Button,Img,Box,Copyright,Choice,Menu} from "./Components/Containers";
import {Avatar,Cloth,Dress,Shoes,Shirt}                                                                         from "./Components/Game/comps/cloths";


import LoginValidation                                      from "./Server-Client-Shared/Validations/LoginValidation";
import RegisterValidation                                   from "./Server-Client-Shared/Validations/RegisterValidation";

import UserClient                                                 from "./Server-Client-Shared/ModelsClient/UserClient";

import ConvertPoint                                         from "./Server-Client-Shared/Functions/ConvertPoint";
import RandomString                                         from "./Server-Client-Shared/Functions/RandomString";

import useStore                                             from "./Hooks/useStore";
import useRefV2                                             from "./Hooks/useRefV2";

import GuestHome                                            from "./Components/Guest/GuestHome";
import GuestLogin                                           from "./Components/Guest/GuestLogin";
import GuestRegister                                        from "./Components/Guest/GuestRegister";
import Guest                                                from "./Components/Guest/Guest"
;
import Debug                                                from "./Server-Client-Shared/Dev/Debug";
import { Provider }                                         from "react-redux";
import myStore                                              from "./Store/Store"
import GlobalStyle                                          from "./Components/GlobalStyle";
import { useSelector }                                      from "react-redux"
import useEffectV2                                          from "./Hooks/useEffectV2"
import AvatarView                                           from "./Components/Game/comps/AvatarView";
import AvatarMinView                                        from "./Components/Game/comps/AvatarMinView";
import { useDispatch }                                      from "react-redux";
import {LoginSettings,RegisterSettings}                     from "./Server-Client-Shared/Settings"
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
export { Shoes               } 
export { Img                 } 
export { Avatar              } 
export { Cloth              } 
export { Dress               } 
export { Shirt               } 
export { Box                 } 
export { Icon                } 
export { Game                }
export { Name                }
export { AvatarView          } 
export { RandomString        } 
export { useEffectV2         } 
export { AvatarMinView       } 
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
export { UserClient          }              
export { Button              }              
export { Debug               }              
export { GlobalStyle         }              



export {HeaderBackground}
export {FooterBackground}
























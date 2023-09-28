import { Database } from "../importAll";

export class Settings{
    public CONTAINER_APP_GRID         ?:string; 
    public GUEST_HEADER_POSITION      ?:string;
    public GUEST_MENU_POSITION        ?:string;
    public GUEST_MAIN_POSITION        ?:string;
    public GUEST_FOOTER_POSITION      ?:string;
    public GUEST_COPYRIGHT_POSITION   ?:string;
    public AVATAR_VIEW_GRID           ?:string;
    public GIRL_AVATAR_BODY_POSITION  ?:string;
    public GIRL_SHIRT_POSITION        ?:string;
    public GIRL_SHOES_POSITION        ?:string;
    public GIRL_PANTS_POSITION        ?:string;
    public BOY_AVATAR_BODY_POSITION   ?:string;
    public BOY_SHIRT_POSITION         ?:string;
    public BOY_SHOES_POSITION         ?:string;
    public BOY_PANTS_POSITION         ?:string;

    constructor(){
        new Database().QuerySync("select * from settings_client")
            .ValidDB((setting:Settings[])=>{
               this.CONTAINER_APP_GRID           = setting[0].CONTAINER_APP_GRID        ||"";              
               this.GUEST_HEADER_POSITION        = setting[0].GUEST_HEADER_POSITION     ||"";              
               this.GUEST_MENU_POSITION          = setting[0].GUEST_MENU_POSITION       ||"";              
               this.GUEST_MAIN_POSITION          = setting[0].GUEST_MAIN_POSITION       ||"";              
               this.GUEST_FOOTER_POSITION        = setting[0].GUEST_FOOTER_POSITION     ||"";              
               this.GUEST_COPYRIGHT_POSITION     = setting[0].GUEST_COPYRIGHT_POSITION  ||"";              
               this.AVATAR_VIEW_GRID             = setting[0].AVATAR_VIEW_GRID          ||"";              
               this.GIRL_AVATAR_BODY_POSITION    = setting[0].GIRL_AVATAR_BODY_POSITION ||"";              
               this.GIRL_SHIRT_POSITION          = setting[0].GIRL_SHIRT_POSITION       ||"";              
               this.GIRL_SHOES_POSITION          = setting[0].GIRL_SHOES_POSITION       ||"";              
               this.GIRL_PANTS_POSITION          = setting[0].GIRL_PANTS_POSITION       ||"";              
               this.BOY_AVATAR_BODY_POSITION     = setting[0].BOY_AVATAR_BODY_POSITION  ||"";              
               this.BOY_SHIRT_POSITION           = setting[0].BOY_SHIRT_POSITION        ||"";              
               this.BOY_SHOES_POSITION           = setting[0].BOY_SHOES_POSITION        ||"";              
               this.BOY_PANTS_POSITION           = setting[0].BOY_PANTS_POSITION        ||"";              
            })
        }
    }




const LoginSettings = {
    username    :{unique:true,  require:true,   min: 4, max:14},
    password    :{unique:false, require:true,   min: 6, max:30},
}
const RegisterSettings = {
    username    :{unique:true,  require:true,   min: 4, max:14},
    email       :{unique:true,  require:true,   min: 6, max:50},
    password    :{unique:false, require:true,   min: 6, max:30},
    firstName   :{unique:false, require:false,  min: 2, max:12},
    lastName    :{unique:false, require:false,  min: 2, max:12}
}





export {LoginSettings}
export {RegisterSettings}


//fadsfasf  
import {Database, LoginSettings,ResultValid} from "../importAll"

export default  function LoginValidation(obj:ILogin) : ResultValid{
    let messages :ILoginMsgs= {
        username:'',
        password:'',
        status  :''
    }
    let valid = true;

    if(!obj.username ){
        messages.username = "שם משתמש חסר";
        valid=false
        messages.status="no-Valid";
    }
    else if(!obj.password ){
        messages.password = "סיסמה חסרה";
        valid=false
        messages.status="no-Valid";
    }
    else{
        if(obj.username.length > LoginSettings.username.max) {messages.status="no-Valid"; messages.username = "שם המשתמש ארוך מדי" ; valid=false ;}
        if(obj.username.length < LoginSettings.username.min) {messages.status="no-Valid"; messages.username = "שם המשתמש קצר מדי"  ; valid=false ;}
        if(obj.password.length < LoginSettings.password.min) {messages.status="no-Valid"; messages.password = "הסיסמה קצרה מדי"    ; valid=false ;}
        if(obj.password.length > LoginSettings.password.max) {messages.status="no-Valid"; messages.password = "הסיסמה ארוכה מדי"   ; valid=false ;}
    }


    return new ResultValid<ILoginMsgs>(messages,valid);
} 




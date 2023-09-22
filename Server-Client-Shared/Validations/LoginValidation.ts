import {ResultValid,LoginSettings} from "../../importAll";

export default  function LoginValidation(obj:ILogin) : ResultValid{
    let valid = true;
    let message: ILoginMsgs={
        username : '',
        password : '',
        status  :''
    };

    if(!obj.username ){
        message.username = "שם משתמש חסר";
        valid=false
    }
    else if(!obj.password ){
        message.password = "סיסמה חסרה";
        valid=false
    }
    else{
        if(obj.username.length > LoginSettings.username.max) { message.username = "שם המשתמש ארוך מדי" ; valid=false };
        if(obj.username.length < LoginSettings.username.min) { message.username = "שם המשתמש קצר מדי"  ; valid=false };
        if(obj.password.length < LoginSettings.password.min) { message.password = "הסיסמה קצרה מדי"    ; valid=false };
        if(obj.password.length > LoginSettings.password.max) { message.password = "הסיסמה ארוכה מדי"   ; valid=false };
    }

    return new ResultValid<ILoginMsgs>(message,valid);
} 


 
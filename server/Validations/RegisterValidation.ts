import { Database ,ResultValid , RegisterSettings } from "./../importAll";


export default function RegisterValidation(obj:IRegister){
    let valid = true;
    let message: IRegisterMsgs;

    if     (!obj.username) {message.username = "שם משתמש חסר" ;message.status="no-valid" ; valid=false; }
    else if(!obj.password) {message.password = "סיסמה חסרה"   ;message.status="no-valid" ; valid=false; }
    else if(!obj.email)    {message.email    = "אימיל חסר"    ;message.status="no-valid" ; valid=false; }
    else{
        if(obj.username.length  > RegisterSettings.username.max  ){message.username = "שם המשתמש ארוך מדי"   ; message.status="no-valid" ; valid=false; }
        if(obj.username.length  < RegisterSettings.username.min  ){message.username = "שם המשתמש קצר מדי"    ; message.status="no-valid" ; valid=false; }
        if(obj.password.length  < RegisterSettings.password.min  ){message.password = "הסיסמה קצרה מדי"      ; message.status="no-valid" ; valid=false; }
        if(obj.password.length  > RegisterSettings.password.max  ){message.password = "הסיסמה ארוכה מדי"     ; message.status="no-valid" ; valid=false; }
        if(obj.email.length     < RegisterSettings.email.min     ){message.email = "האימל קצר מדי"           ; message.status="no-valid" ; valid=false; }
        if(obj.email.length     > RegisterSettings.email.max     ){message.email = "האימל ארוך מדי"          ; message.status="no-valid" ; valid=false; }
        if(obj.firstName.length < RegisterSettings.firstName.min ){message.firstName = "שם פרטי קצר  מדי"    ; message.status="no-valid" ; valid=false; }
        if(obj.firstName.length > RegisterSettings.firstName.max ){message.firstName = "שם פרטי ארוך  מדי"   ; message.status="no-valid" ; valid=false; }
        if(obj.lastName.length  < RegisterSettings.lastName.min  ){message.lastName = "שם משפחה קצר  מדי"    ; message.status="no-valid" ; valid=false; }
        if(obj.lastName.length  > RegisterSettings.lastName.max  ){message.lastName = "שם משפחה ארוך  מדי"   ; message.status="no-valid" ; valid=false; }
    }

  

    new Database().QuerySync(`Select username,email from users where username = '${obj.username}'or email='${obj.email}'`)
    .ValidDB(data=>{
        if(data[0].username == obj.username){
            message.username = "שם המשתמש כבר קיים"
            message.status="no-valid";
            valid=false;
        }
        if(data[0].email == obj.email){
            message.email = "אימייל כבר קיים";
            message.status="no-valid";
            valid=false;
        }
    })
    
    return new ResultValid<IRegisterMsgs>(message,valid);
}



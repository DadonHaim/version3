import {ResultValid, myStore,RegisterSettings} from "../importAll";

export default function RegisterValidation(obj:IRegister){
    let valid = true;
    let message :IRegisterMsgs={
        username  : '',
        password  : '',
        email     : '',
        firstName : '',
        lastName  : '',
    };

    if(!obj.username )     { message.username = "שם משתמש חסר" ; valid=false  }
    else if(!obj.password ){ message.password = "סיסמה חסרה"   ; valid=false  }
    else if(!obj.email )   { message.email    = "אימיל חסר"    ; valid=false  }
    else
    {
        if(obj.username.length   >  RegisterSettings.username.max   )  {message.username = "שם המשתמש ארוך מדי" ; valid=false  }
        if(obj.username.length   <  RegisterSettings.username.min   )  {message.username = "שם המשתמש קצר מדי"  ; valid=false  }
        if(obj.password.length   <  RegisterSettings.password.min   )  {message.password = "הסיסמה קצרה מדי"    ; valid=false  }
        if(obj.password.length   >  RegisterSettings.password.max   )  {message.password = "הסיסמה ארוכה מדי"   ; valid=false  }
        if(obj.email.length      <  RegisterSettings.email.min      )  {message.email    = "האימל קצר מדי"      ; valid=false  }
        if(obj.email.length      >  RegisterSettings.email.max      )  {message.email    = "האימל ארוך מדי"     ; valid=false  }
        if(obj.firstName){
            if(obj.firstName.length  <  RegisterSettings.firstName.min  ) { message.firstName = "שם פרטי קצר  מדי"  ; valid=false  }
            if(obj.firstName.length  >  RegisterSettings.firstName.max  ) { message.firstName = "שם פרטי ארוך  מדי" ; valid=false  }
        }
        if(obj.lastName){
            if(obj.lastName.length   <  RegisterSettings.lastName.min   )  {message.lastName = "שם משפחה קצר  מדי"  ; valid=false  }
            if(obj.lastName.length   >  RegisterSettings.lastName.max   )  {message.lastName = "שם משפחה ארוך  מדי" ; valid=false  }
        }
    }

    return new ResultValid<IRegisterMsgs>(message,valid);
}



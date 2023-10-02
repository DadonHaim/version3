//Server//Client
//<Client>
import {ResultValid,RegisterSettings} from "../../importAll";
//</Client>

//<Server>
import {ResultValid,RegisterSettings,Database} from "../../importAll";
//</Server>

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
    if(!obj.password ){ message.password = "סיסמה חסרה"   ; valid=false  }
    if(!obj.email )   { message.email    = "אימיל חסר"    ; valid=false  }
    if(obj.username && obj.password && obj.email)
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

   
   
    
   
   
   
   //<Server>
    new Database().QuerySync(`Select username,email from users where username = '${obj.username}'or email='${obj.email}'`)
    .ValidDB((data:any)=>{
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
    //</Server>

    
    return new ResultValid<IRegisterMsgs>(message,valid);
}



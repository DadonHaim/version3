import { User ,ILoginTest } from "./../importAll";
import Test, { NoValid, Valid } from "./Test";

let user:User;


let T2 = new Test({
    name:"בדיקת התחברות למשחק",
    description:"",
    options: ILoginTest
}).start()
.Null("username",(data,msg)=>{
    user = new User().Login(data);
    user.IsLogin()?  NoValid(msg): Valid(msg);
    user.DeleteDB();
})
.Null("password",(data,msg)=>{
    user = new User().Login(data); 
    user.IsLogin()?  NoValid(msg): Valid(msg);
    user.DeleteDB();
})
.LenMin("username",(data,msg)=>{
    user = new User().Login(data);
    user.IsLogin()?  NoValid(msg): Valid(msg);
    user.DeleteDB();
})
.LenMin("password",(data,msg)=>{
    user = new User().Login(data);
    user.IsLogin()?  NoValid(msg): Valid(msg);
    user.DeleteDB();
})
.LenMax("username",(data,msg)=>{
    user = new User().Login(data);
    user.IsLogin()?  NoValid(msg): Valid(msg);
    user.DeleteDB();
})
.LenMax("password",(data,msg)=>{
    user = new User().Login(data);
    user.IsLogin()?  NoValid(msg): Valid(msg);
    user.DeleteDB();
})
.Exist("username",(data,msg)=>{
    user = new User().Login(data);
    user.IsLogin()?  Valid(msg): NoValid(msg);
    user.DeleteDB();
})


// logout:

let T3 = new Test({
    name:"התנתקות",
    description:""
}) 
.SomethingTest("logout:",(msg)=>{
    Test.CreateTestDB()
    let user = new User().Login({username:"Testusername",password:"Testpassword"})
    if(!user.IsLogin()) NoValid(msg+'for {username:"Testusername",password:"Testpassword"} no login')
    else{
        user.Logout();
        if(user.IsLogin()) NoValid(msg+"logout no work")
        else    Valid(msg)
    } 
    user.DeleteDB();
})

export default class User{
    public id?           :number;   
    public username?     :string;   
    public email?        :string;   
    public firstName?    :string;   
    public lastName?     :string;   
    public birthday?     :string;   
    public registerDate? :string;   
    public token?        :string;   


    public static CreateToken(token?:any){
        if(token)
            sessionStorage.setItem("token",token)
    }

    public static KillToken(){
        sessionStorage.removeItem("token")
    }



    
}   
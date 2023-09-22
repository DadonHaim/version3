export default class AvatarClient{
    public id           ? :number | null;
    public name         ? :string | null;
    public hp           ? :number | null;
    public energy       ? :number | null;
    public damage       ? :number | null;
    public refillEnergy ? :number | null;
    public exp          ? :number | null;
    public silver       ? :number | null;
    public gold         ? :number | null;
    public redPowder    ? :number | null;
    public diamond      ? :number | null;
    public createdDate  ? :string | null;
    public magicName    ? :MagicNameType  | null;
    public gender       ? :"boy"|"girl"|"all";

    constructor(obj:AvatarClient){
       
       this.id           = (obj.id          )?obj.id           :null;                        
       this.name         = (obj.name        )?obj.name         :null;                          
       this.exp          = (obj.exp         )?obj.exp          :null;                       
       this.silver       = (obj.silver      )?obj.silver       :null;                        
       this.gold         = (obj.gold        )?obj.gold         :null;                          
       this.redPowder    = (obj.redPowder   )?obj.redPowder    :null;                         
       this.diamond      = (obj.diamond     )?obj.diamond      :null;                       
       this.createdDate  = (obj.createdDate )?obj.createdDate  :null;     
       this.hp           = (obj.hp          )?obj.hp           :null;                                           
       this.energy       = (obj.energy      )?obj.energy       :null;                                           
       this.damage       = (obj.damage      )?obj.damage       :null;                                           
       this.refillEnergy = (obj.refillEnergy)?obj.refillEnergy :null;         
       this.magicName    = (obj.magicName   )?obj.magicName    :null;   
       
    }

    public static CreateToken(token?:any){
        if(token)
            sessionStorage.setItem("token",token)
    }

    public static KillToken(){
        sessionStorage.removeItem("token")
    }
}
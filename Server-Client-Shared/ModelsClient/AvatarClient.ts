//Server//Client
import ItemClient from "./ItemClient";

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
    public gender       ? :"boy"|"girl"|"all" |null;
    public mainPage     ? : AllMainPagesType |null;
    public subPage      ? : AllSubPagesType|null;
    public hat          ?: ItemClient; 
    public shirt        ?: ItemClient; 
    public pants        ?: ItemClient; 
    public shoes        ?: ItemClient; 
    public weapon       ?: ItemClient;

    constructor(obj?:AvatarClient){               
        if(obj)                                                                                                                                                                                                                                     
            for(let key in obj)
                this[key] = obj[key]
        
    }

}
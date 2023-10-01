//Server
export default class ResultValid<R=any>{
    public messages: any |any[];
    public valid:boolean;

    public constructor(messages :R , isValid:boolean){
        this.valid = isValid;
        this.messages = messages;
    }

    public Valid<T=any>(callback:(data:T)=>void):ResultValid{
        if(this.valid)
            callback(this.messages);
        return this;
    }
    public NoValid<T=any>(callback:(data:T)=>void):ResultValid{
        if(!this.valid)
            callback(this.messages);
        return this;
    }
}



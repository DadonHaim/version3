
export default class ItemClient{
    public id              ?: number             ;       
    public name            ?: string             ;   
    public description     ?: string             ;   
    public price           ?: IPrice             ;   
    public sale            ?: ISale              ;   
    public stats           ?: IStats             ;
    public upgrade         ?: IUpgradeItem       ;   
    public categoryItem    ?: CategoryItemsType  ;
    public rank            ?: number             ;
    public maxUpgrade      ?: number             ;
    public gender          ?: IGender            ;
    public isActive        ?: boolean            ;
    public magic           ?: MagicNameType      ;
    public image           ?: any                ;

    public constructor(obj?:ItemClient){ 
        if(obj){
            for(let key in obj)
                this[key] = obj[key];
        }
        else{
            this.name = "nul";
            this.gender ="boy"
        }
        this.image = `./items/${this.gender}/${this.categoryItem||""}/${this.name}`;
    }


}   

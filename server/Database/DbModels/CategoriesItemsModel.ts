export default class CategoriesItemsModel{
    public id?            :number;  
    public name?          :string;      
    public ending?        :string;          
    public positionGrid?   :string;      
    public gender?   : "boy"|"girl"|"all";      

    public constructor(obj?:CategoriesItemsModel){
        if(obj){
            this.id             = obj.id;
            this.name           = obj.name;
            this.ending         = obj.ending;
            this.positionGrid   = obj.positionGrid;
            this.gender         = obj.gender;
        }
    }
}

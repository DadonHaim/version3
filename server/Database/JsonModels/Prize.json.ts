import { Item } from "./../../importAll";

export default class Prize{
    public exp        :number;              
    public silver     :number;          
    public gold       :number;      
    public diamond    :number;          
    public redPowder  :number;              
    public items      :Item[];          
    constructor(jsonText:string){}

}


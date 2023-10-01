import { useEffect } from "react";

const objCountUseOneFeffect : IObjCountUseOneFeffect= {}

export default function useOneEffect(id:string,call:()=>void){
    if(!objCountUseOneFeffect[id])
        objCountUseOneFeffect[id]=0;
    useEffect(()=>{
        if(objCountUseOneFeffect[id]==0){
            objCountUseOneFeffect[id]++;
            call();

        }
    })

}

interface IObjCountUseOneFeffect{
    [key :string]  : number;
}
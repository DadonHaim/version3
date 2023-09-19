import { useEffect } from "../importAll";

let obj:any = {}

export default function useEffectV2(key:string ,call:()=>void){
    if(!obj[key]) obj[key] = 0; 
    useEffect(()=>{
        if(obj[key]%2 == 0) call()
        obj[key]++
    })   
}
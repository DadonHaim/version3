import React, { Suspense } from "react";
import {usePermission} from "../importAll";
type ComponentType = (props:any)=>JSX.Element;

export default class Component{
    public Comp :ComponentType;
    public Loading :ComponentType = (props)=>{return<></>}; 
    public name :string;

    constructor(name:string, Comp:ComponentType , Loading?:ComponentType){
        this.Comp = Comp;
        this.name = name;
        if(Loading)
            this.Loading = Loading;
    }

    public SetLoading(Loading:ComponentType){
        this.Loading = Loading;
    }

    public GetPage(permissions:IUsePermission={},set?:ComponentType){
        if(set) 
            this.SetLoading(set);
        let Com = this.Comp
        let Loading = this.Loading
        return (props:any) => {
            let pre = usePermission(permissions)
            if(pre){
                console.log(this.name)
                return <Suspense fallback={<Loading/>}><Com {...props}/></Suspense>  
            }
            return <></>
        }
               
    }

    public GetClose(){
        let Com = this.Comp
        return (props:any) => {
            if(this.name.length>0)
                console.log(this.name)
            return <Com {...props}/>  
        }
    }
    public Get(){
        let Com = this.Comp
        return (props:any) => {
            if(this.name.length>0)
                console.log(this.name)
            return <Com {...props}/>  
        }
    }
    
    public GetOpenClose(){
        let Com = this.Comp
        return (props:any) => {
            if(this.name.length>0)
                console.log(this.name)
            return <Com {...props}> {props.children}</Com>
        }   
    }

    public static Create= (name:string , Com:ComponentType)=>{
        if(name.length>0)
            console.log(name+"-component");
        
        return React.memo(
            (props:any) => <Com {...props} />
        )
    }
}

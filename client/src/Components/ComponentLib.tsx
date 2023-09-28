import { Suspense } from "react";
import {usePermission} from "../importAll";
type ComponentType = (props:any)=>JSX.Element;

export default class Component{
    public Comp :ComponentType;
    public Loading :ComponentType = (props)=>{return<></>}; 

    constructor(Comp:ComponentType , Loading?:ComponentType){
        this.Comp = Comp;
        if(Loading)
            this.Loading = Loading;
    }

    public SetLoading(Loading:ComponentType){
        this.Loading = Loading;
    }

    public Get(permissions:IUsePermission={}){
        let Com = this.Comp
        let Loading = this.Loading
        return (props:any) => {
            let pre = usePermission(permissions)
            if(pre)
                return <Suspense fallback={<Loading/>}><Com {...props}/></Suspense>  
            return <></>
        }
               
    }
}

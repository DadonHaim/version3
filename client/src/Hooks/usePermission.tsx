import { useSelector } from "react-redux"

export default function usePermission(obj:IUsePermission):boolean{
    let mainPage   = useSelector<IStore,AllMainPagesType>(store=>store.mainPage)
    let subPage    = useSelector<IStore,AllSubPagesType>(store=>store.subPage)
    let isLogin    = useSelector<IStore,boolean>(store=>store.isLogin)

    if(obj.Login){
        if(!isLogin) return false; 
    }
    if(obj.Logout){
        if(isLogin) return false;
    }

    if(obj.mainPage){
        if(mainPage != obj.mainPage) return false;
    }
    if(obj.subPage){
        if(subPage != obj.subPage) return false;
    }

    return true;
}


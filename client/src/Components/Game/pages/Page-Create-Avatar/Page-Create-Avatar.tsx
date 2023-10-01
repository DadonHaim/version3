import { useRef } from "react";
import useOneEffect from "../../../../Hooks/useOneEffect";
import { Give_Me_Start_Items, Limit_Avatar } from "../../../../Socket/createAvatar";
import {Copyright, Header, ItemClient, Inventory, Component, Name, useState, useEffectV2, AvatarView, AvatarClient, Lable, Main, useRefV2, useStore, useSelector } from "../../../../importAll";
import { Input } from "../../../Containers";


const PageCreateAvatar = new Component((props :IGameSelectAvatarProps)=>{
    let [allStartItems , setAllStartItems]  = useState<any>({items:[],render:false})
    let [isSubLimit , setIsSubLimit]        = useState<{render:boolean,msg:any}>({render:true , msg:""})
    let createAvatar        = useSelector<IStore,AvatarClient>(store=>store.createAvatar);

    let {dispatch,actions} = useStore()


    useOneEffect("PageCreateAvatar",()=>{
        Give_Me_Start_Items(setAllStartItems)
        Limit_Avatar(setIsSubLimit);
        dispatch(actions.setCreateAvatar({
            name        : null,
            gender      : "girl",
            hat         : null,
            shirt       : null,
            pants       : null,
            shoes       : null,
            weapon      : null,
        }))
    })

    if(!allStartItems.render)
        return <>WAIT</>
    if(!isSubLimit.render) 
        return <>{isSubLimit.msg}</>

    return(
        <>
            <Header position="1,1|50,5" border>
                <Name>צור אווטאר</Name>
            </Header>

            <AvatarView avatar={createAvatar}  position="2,7|15,38" border/>

            <Main position="16,7|48,47" border>
                <Input rtl value={"שם האווטאר"} name="avatarName" type="text" />
             
             <Inventory  items={allStartItems.items} border/> 
            </Main>
            

     


            
            {/*<Copyright />  */}
        </>
    )
});

interface IGameSelectAvatarProps extends IGlobalProps{}
export default PageCreateAvatar.Get({Login:true,mainPage:"Game",subPage:"Game-CreateAvatar"});
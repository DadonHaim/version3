import { useEffect, useRef } from "react";
import useOneEffect from "../../../../Hooks/useOneEffect";
import { Give_Me_Start_Items, Limit_Avatar } from "../../../../Socket/createAvatar";
import {Copyright, Header, ItemClient, Inventory, Component, Name, useState, useEffectV2, AvatarView, AvatarClient, Lable, Main, useRefV2, useStore, useSelector, ControllerAudio } from "../../../../importAll";
import { Button, Input } from "../../../Containers";


const PageCreateAvatar = new Component("PageCreateAvatar",(props :IGameSelectAvatarProps)=>{
    let [allStartItems , setAllStartItems]  = useState<ItemClient[]>([])
    let [isSubLimit , setIsSubLimit]        = useState<{render:boolean,msg:any}>({render:true , msg:""})
    let createAvatar_name                   = useSelector<IStore,string>(store=>store.createAvatar_name);
    
    let [gender , setGender] = useState<"boy"|"girl">("boy")
    
    let [avatarNameInput] = useRefV2()
    let {store,dispatch,actions} = useStore()

    useEffect(()=>{
        if(gender == "boy")
            dispatch(actions.set({type:"createAvatar_gender",value:"boy"}))
        else
            dispatch(actions.set({type:"createAvatar_gender",value:"girl"}))
    },[gender])

    useOneEffect("PageCreateAvatar",()=>{
        Give_Me_Start_Items(setAllStartItems)
        Limit_Avatar(setIsSubLimit);
       
    })

    function submit(){

    }


    return(
        <>
            <Header position="28,1|39,3" border>
                <Name>צור אווטאר</Name>
            </Header>
            <ControllerAudio position="2,2|7,4" />

            <AvatarView  type="createAvatar" position="2,4|15,38" border/>

            <Main position="16,4|48,45" border>
                <Input rtl value={"שם האווטאר"} name="avatarName" type="text" ref={avatarNameInput} onChange ={()=>{}} />

                

                <Inventory  items={allStartItems} border/> 
            </Main>
            

     
            <Button value={"צור אווטאר"} position="2,40|15,45" onClick={submit}/>

            
            {/*<Copyright />  */}
        </>
    )
});

interface IGameSelectAvatarProps extends IGlobalProps{}
export default PageCreateAvatar.GetPage({Login:true,mainPage:"Game",subPage:"Game-CreateAvatar"});
import {Avatar,Grid,Name, memo, useSelector ,Cloth, AvatarClient, Lable, useState, ItemClient, Div, RandomString, React, useStore} from "../../importAll";

const Inventory = memo((props: IInventoryProps)=>{
    let {dispatch,actions} = useStore()
    let [category , setCategory] = useState<"hat"|"shirt"|"shoes"|"pants">("hat")
    let avatarGender = useSelector<IStore,IGender>(store=>store.createAvatar_gender) 
    let avatarMagic = useSelector<IStore,MagicNameType>(store=>store.createAvatar_magic) 

    function setItem(item:ItemClient){
       dispatch(actions.set({
            type:`createAvatar_${category}` as allStoreType ,
            value:item
        }))
    }

    return(
        <Grid {...props} rows={5} cols={4}> 
            <Lable  border height={50} onClick={()=>setCategory("hat")}>כובעים</Lable>
            <Lable  border height={50} onClick={()=>setCategory("shirt")}>חולצות</Lable>
            <Lable  border height={50} onClick={()=>setCategory("pants")}>מכנסיים</Lable>
            <Lable  border height={50} onClick={()=>setCategory("shoes")}>נעליים</Lable>

            {
                props.items.map(item=>{
                    if(item.categoryItem == category && (item.gender == avatarGender || item.gender == "all") && (item.magic==avatarMagic || item.magic =="all"))
                    return (
                     <React.Fragment key={RandomString()}>
                        <Div Flex XYcenter border onClick={()=>setItem(item)}>
                            {item.name}
                        </Div>
                     </React.Fragment>
                    )

                })
            }
        </Grid>
    )

})

interface IInventoryProps extends IGlobalProps{
    items: ItemClient[];
}
export default Inventory;

function Abc(str:string):string{
    return str[0].toUpperCase()+str.substring(1);
}

function abc(str:string):string{
    return str[0].toLowerCase()+str.substring(1);
}
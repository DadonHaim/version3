import {Avatar,Grid,Name, memo, useSelector ,Cloth, AvatarClient, Lable, useState, ItemClient, Div, RandomString, React, useStore} from "../../importAll";

const Inventory = memo((props: IInventoryProps)=>{
    let {dispatch,actions} = useStore()
    let settings      = useSelector<IStore,ISettings>(store=>store.settings)
    let createAvatar   = useSelector<IStore,AvatarClient>(store=>store.createAvatar)
    let [category , setCategory] = useState<"hat"|"shirt"|"shoes"|"pants">("hat")

    function setItem(item:ItemClient){
        let temp = {...createAvatar}
        temp[item.categoryItem as string] = item;
        dispatch(actions.setCreateAvatar(temp))
        
       
    }
    return(
        <Grid {...props} rows={5} cols={4}> 
            <Lable  border height={50} onClick={()=>setCategory("hat")}>כובעים</Lable>
            <Lable  border height={50} onClick={()=>setCategory("shirt")}>חולצות</Lable>
            <Lable  border height={50} onClick={()=>setCategory("pants")}>מכנסיים</Lable>
            <Lable  border height={50} onClick={()=>setCategory("shoes")}>נעליים</Lable>

            {
                props.items.map(item=>{
                    if(item.categoryItem == category)
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


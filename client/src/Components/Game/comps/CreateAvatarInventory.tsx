import { Grid, Name, memo, useState,ItemClient, Div } from "../../../importAll";

const CreateAvatarInventory = memo((props:ICreateAvatarInventoryProps)=>{
    let [category , setCategory] = useState<any>("hat")


    return(
        <>
            <Grid rows={1} cols={5}>
                <Name onClick={()=>{setCategory("hat")}}>כובע</Name>
                <Name onClick={()=>{setCategory("")}}>חולצה</Name>
                <Name onClick={()=>{setCategory("")}}>מכנסיים</Name>
                <Name onClick={()=>{setCategory("")}}>נעליים</Name>
            </Grid>

            <Grid rows={5} cols={5}>
                {
                    props.items.map(item=>{
                        if(item.categoryItem !== category) return <></>
                        return (
                            <Div>
                                <Name>{item.name}</Name>
                            </Div>
                        )
                        
                    })
                }
            </Grid>
        </>
    )
})


interface ICreateAvatarInventoryProps extends IGlobalProps{
    items : ItemClient[];
}

export default CreateAvatarInventory;
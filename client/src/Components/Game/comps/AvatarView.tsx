import { Div, memo, useSelector } from "../../../importAll";


const AvatarView = memo((props:IAvatarViewProps)=>{
    let avatarName = useSelector<IStore,string>(store=>store.avatarName)
    return(
        <Div Grid {...props}  rows={30} columns={30} >
            <Div className="avatarNameView" align="center" fSize="150%" start="1,2" end="30,4">{avatarName}</Div>

            
        </Div>
    )
})


interface IAvatarViewProps extends IGlobalProps{}

export default AvatarView
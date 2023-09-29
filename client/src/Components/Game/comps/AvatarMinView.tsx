import { Grid, Name, memo, useSelector } from "../../../importAll";


const AvatarMinView = memo((props:IAvatarMinViewProps)=>{
    let avatarName = useSelector<IStore,ISettings>(store=>store.activeAvatar.name)
    return(
        <Grid Grid={30} {...props}>
            <Name position="1,2|30,4" fSize="150%">{avatarName}</Name>

            
        </Grid>
    )
})


interface IAvatarMinViewProps extends IGlobalProps{}

export default AvatarMinView
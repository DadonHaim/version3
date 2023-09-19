import { GridBtn } from "../../../devComponent";
import {AvatarClient, Button, Div, Flex, Grid, Lable, memo, useSelector} from "../../../importAll";

const AvatarSelector = memo((props:IAvatarSelectorProps)=>{
    // let avatarName      = useSelector<IStore,string>(store=>store.avatarName);
    // let hp              = useSelector<IStore,number>(store=>store.avatarHp);
    // let damage          = useSelector<IStore,number>(store=>store.avatarDamage);
    // let energy          = useSelector<IStore,number>(store=>store.avatarEnergy);
    // let refillEnergy    = useSelector<IStore,number>(store=>store.avatarRefillEnergy);
    // let silver          = useSelector<IStore,number>(store=>store.avatarSilver);
    // let gold            = useSelector<IStore,number>(store=>store.avatarGold);
    // let redPowder       = useSelector<IStore,number>(store=>store.avatarRedPowder);
    // let diamond         = useSelector<IStore,number>(store=>store.avatarDiamond);
    
    const deleteAvatar = ()=>{}

    return (
        <Grid className="avatarSelector" {...props} rows={15} columns={15} width="95%" height="15%" margin="10px auto" >
            <Lable bgColor className="avatarName" XYcenter start="7,1" end="11,5" rtl>{props.avatar.name}</Lable>

            <Div Empty className="Controll">
                <Button onClick={deleteAvatar} start="1,1" end="1,15" bgColor="red"/>
            </Div>
        </Grid>
    )
})

interface IAvatarSelectorProps extends IGlobalProps{
    avatar:AvatarClient; 
}
export default AvatarSelector;
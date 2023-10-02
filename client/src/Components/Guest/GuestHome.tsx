import { Button, Div, Main, Component, useSelector } from "../../importAll";

const GuestHome = new Component("GuestHome",()=>{
    let settings   = useSelector<IStore,ISettings>(store=>store.settings)
    
    return(
        <Main position={settings.GUEST_MAIN_POSITION} Grid={19}>
            <Button toSubPage="Guest-Login"    position="14,5|18,9"   value="התחברות" />
            <Button toSubPage="Guest-Register" position="12,10|16,14" value="הרשמה"   />
            <Div className="Ad" border position="3,3|7,11"> </Div>
        </Main>
    )
})

export default GuestHome.GetPage({Logout:true, subPage:"Guest-Home"})
 
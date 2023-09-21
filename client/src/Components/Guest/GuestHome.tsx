import { Button, Div, Main, memo } from "../../importAll";


const GuestHome = memo((props:IGuestHomeProps)=>{

    return(
        <>
            <Button toSubPage="Guest-Login"    position="14,5|18,9"   value="התחברות" />
            <Button toSubPage="Guest-Register" position="12,10|16,14" value="הרשמה"   />
            <Div className="Ad" border position="3,3|7,11"> </Div>
        </>
    )
}) 


interface IGuestHomeProps{}

export default GuestHome;
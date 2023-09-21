import {GlobalStyle } from "../../importAll";

export default function Copyright(props:ICopyrightProps){
    return(
        <div style={GlobalStyle(props,"flex",{XYcenter:true})} className={props.className}>
            {props.value ||"כל הזכויות שמורות"}
        </div>
    )
}

interface ICopyrightProps extends IGlobalProps{}
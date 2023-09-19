import { GlobalStyle, memo ,React } from "../../importAll"

const styleObj = (props:IContainerProps ,_display?:string) :React.CSSProperties=>{
    let display = (_display)? _display : "block";
    if(props.Grid)
        display = "grid";
    else if(props.Flex)
        display = "flex";
    return{...GlobalStyle(props,display)}
}



export const Main   = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}        > {props.children} </div>                     :<>{props.children}</>    )
export const Footer = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}        > {props.children} </div>                     :<>{props.children}</>    )
export const Nav    = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}        > {props.children} </div>                     :<>{props.children}</>    )
export const Header = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}        > {props.children} </div>                     :<>{props.children}</>    )
export const Aside  = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}        > {props.children} </div>                     :<>{props.children}</>    )
export const Div    = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}        > {props.children} </div>                     :<>{props.children}</>    )
export const Lable  = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props,"flex")}        > {props.children} </div>                     :<>{props.children}</>    )
export const Flex   = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props,"flex")} > {props.children} </div>              :<>{props.children}</>    )
export const Grid   = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props,"grid")} > {props.children} </div>              :<>{props.children}</>    )











export const Container = React.memo(function(props:IContainerProps){
    if(props.Grid ||props.Flex)  
        return <div className={"container "+props.className} style={styleObj(props)}>{props.children}</div>
    return  <React.Fragment key={props.key}>  {props.children} </React.Fragment>
})


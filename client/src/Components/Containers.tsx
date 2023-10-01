import { useRef } from "react";
import { GlobalStyle, memo ,React, useStore} from "../importAll"


//basic
export const Div  = memo((props:IGlobalProps)=>{
    if(!props.Empty)
        return(
            <div 
                className={props.className} 
                style={GlobalStyle(props)} 
                key = {props.myKey}
                onClick={props.onClick}
            >
                {props.children}
            </div>
        ) 
        return <>{props.children}</>; 
})
export const Img  = memo((props:IGlobalProps)=><img src={props.bgImg} style={GlobalStyle(props,{width:"100%",height:"auto"})} />)

export const Button = memo((props:IButtonProps)=>{
    let {dispatch,actions} = useStore();
    function GoPage(event:any){
        if(props.toPage)    dispatch(actions.setMainPage(props.toPage))
        if(props.toSubPage) dispatch(actions.setSubPage(props.toSubPage))
        if(props.onClick)   props.onClick(event)
    }
    return <Div Flex border pointer XYcenter onClick={(x:any)=>GoPage(x)} {...props}> {props.value ||""} </Div>
})



export const Grid       = memo( (props:IGlobalProps) => <Div Grid                  {...props}> {props.children}                     </Div>  )
export const Container  = memo( (props:IGlobalProps) => <Grid                      {...props}> {props.children}                     </Grid> )
export const Main       = memo( (props:IGlobalProps) => <Grid                      {...props}> {props.children}                     </Grid> )
export const Footer     = memo( (props:IGlobalProps) => <Grid                      {...props}> {props.children}                     </Grid> )
export const Nav        = memo( (props:IGlobalProps) => <Div                       {...props}> {props.children}                     </Div>  )
export const Header     = memo( (props:IGlobalProps) => <Div                       {...props}> {props.children}                     </Div>  )
export const Aside      = memo( (props:IGlobalProps) => <Div                       {...props}> {props.children}                     </Div>  )
export const Box        = memo( (props:IGlobalProps) => <Div                       {...props}> {props.children}                     </Div>  )
export const Icon       = memo( (props:IGlobalProps) => <Div                       {...props}> {props.children}                     </Div>  )
export const Lable      = memo( (props:IGlobalProps) => <Div Flex XYcenter         {...props}> {props.children}                     </Div>  )
export const Name       = memo( (props:IGlobalProps) => <Div Flex XYcenter         {...props}> {props.children}                     </Div>  )
export const Flex       = memo( (props:IGlobalProps) => <Div Flex                  {...props}> {props.children}                     </Div>  )
export const Copyright  = memo( (props:IGlobalProps) => <Div Flex XYcenter         {...props}> {props.value ||"כל הזכויות שמורות"} </Div>  )    
export const Menu       = memo( (props:IMenuProps  ) => <Flex spaceAround XYcenter {...props}> {props.children}</Flex>)
export const Choice     = memo( (props:IChiceProps ) => <Button  width={"100px"} height={"70%"} styleOverrid={props.selected?props.onSelectedStyle:null} {...props}>{props.value}</Button>)
export const Logo       = memo( (props:IGlobalProps) => <Img {...props} />)
export const Cloth      = memo((props:IClothsProps)  => <Img bgImg={props.src} {...props}/>)
export const Avatar     = memo((props:IClothsProps)  => <Div {...props}><Img bgImg={props.src}/></Div>)


export const Input  = memo( (props:IInputProps) =>{
    let refInput = useRef<any>();


    return(
        <Flex {...props}>
            <Lable height="max-content">{props.value}</Lable>
            <input style={{height: "max-content"}} type={props.type} name={props.name} ref={refInput} />
        </Flex>
    )
})


interface IButtonProps extends IGlobalProps{
    toPage    ?: AllMainPagesType;
    toSubPage ?: AllSubPagesType;
}

interface IMenuProps extends IGlobalProps{
    onSelected?:React.CSSProperties;
}
interface IChiceProps extends IButtonProps{
    onSelectedStyle?:React.CSSProperties;
    selected? : boolean;
}

interface IClothsProps extends IGlobalProps{
    src:any
}

interface IInputProps extends IGlobalProps{
    type:string;
    name:string;
    ref:any;
}

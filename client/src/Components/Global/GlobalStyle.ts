import { count } from "console";
import { ConvertPoint } from "../../importAll";

let colorCounter = 0
let bgcounter = 0
let colors =[
    "black","red","green","blue","yellow"
];

let backgrouds = (x:string | boolean , count:number):any =>{
    console.log(typeof x )
    if(typeof x == "string"){
        return x;
    }
    let backgrouds = ["pink","red","green","blue","yellow"]
    return backgrouds[count]
}



const GlobalStyle = (props:IGlobalProps , _display?:string) :React.CSSProperties=>({
    display               :_display                       ?_display                                                         :"block",
    border                :props.border                   ? `1px solid ${colors[colorCounter++%5]}`                         :undefined   ,
    backgroundColor       :props.bgColor                  ? `${backgrouds(props.bgColor,bgcounter++%5)}`                    :undefined   ,
    backgroundImage       :props.bgImg                    ? `url(${props.bgImg})`                                           :undefined   ,
    backgroundRepeat      :`no-repeat`,
    backgroundSize        :"contain",
    width                 :props.width,
    height                :props.height,
    marginTop             :props.marginTop                ? props.marginTop                                                 : 0,     
    marginLeft            :props.marginLeft               ? props.marginLeft                                                : 0,  
    marginBottom          :props.marginBottom             ? props.marginBottom                                              : 0,  
    marginRight           :props.marginRight              ? props.marginRight                                               : 0,  
    margin                :props.margin                   ? props.margin                                                    : 0,
    paddingTop            :props.paddingTop               ? props.paddingTop                                                : 0,     
    paddingLeft           :props.paddingLeft              ? props.paddingLeft                                               : 0,  
    paddingBottom         :props.paddingBottom            ? props.paddingBottom                                             : 0,  
    paddingRight          :props.paddingRight             ? props.paddingRight                                              : 0,  
    padding               :props.padding                  ? props.padding                                                   : 0,
    justifyContent        :props.Xcenter||props.XYcenter  ? `center` :undefined   ,
    alignItems            :props.Ycenter||props.XYcenter  ? `center` :undefined   ,
    textAlign             :props.align                    ? props.align                                                     :"left"             ,
    gridTemplateColumns   :props.columns                  ?  `repeat(${props.rows},1fr)`                                    :`repeat(19,1fr)`   ,
    gridTemplateRows      :props.rows                     ?  `repeat(${props.columns},1fr)`                                 :`repeat(19,1fr)`   ,
    direction             :props.rtl                      ? `rtl`                                                           :"ltr",   
    gridColumn            :props.start&&props.end         ? `${ConvertPoint(props.start)[0]}/${ConvertPoint(props.end)[0]}` : undefined,
    gridRow               :props.start&&props.end         ? `${ConvertPoint(props.start)[1]}/${ConvertPoint(props.end)[1]}` : undefined,
    fontSize              :props.fSize                    ? props.fSize                                                     : undefined,
    textDecoration        :props.underline                ? "underline"                                                     : undefined,
    flexDirection         :props.flexDirection            ? props.flexDirection                                             : undefined,
    overflow              :props.scroll                   ? "auto"                                                        : undefined,

})

export default GlobalStyle;
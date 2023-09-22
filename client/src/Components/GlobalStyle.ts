import { ConvertPoint } from "../importAll";

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

function GlobalStyle(_props:IGlobalProps , obj?:IGlobalProps ){
    let props;
     if(obj)
        props = {..._props , ...obj};
    else
        props = {..._props};
    
    

    let result :React.CSSProperties={
        backgroundSize        :"contain",
        backgroundRepeat      :`no-repeat`,
    };

    if(props.Grid)
        result["display"] = "grid";
    else if(props.Flex && props.inlineFlex)
        result["display"] = "inline-flex";
    else if(props.Flex)
        result["display"] = "flex";

    if (props.XYcenter){
        result["justifyContent"] = "center";
        result["alignItems"]     = "center";
    }
    if (props.Xcenter)
        result["justifyContent"] = "center";
    if (props.Xcenter)
        result["alignItems"] = "center";

    if(props.spaceBetween){
        result["justifyContent"] = "space-between"
    }
    if(props.spaceAround){
        result["justifyContent"] = "space-around"
    }


    if (props.border && typeof props.border == "boolean")
        result["border"] = `1px solid ${colors[colorCounter++%5]}`
    else if (props.border && typeof props.border == "string")
        result["border"] = props.border

    if(props.pointer)
        result["cursor"] = "pointer";


    if (props.width)
        result["width"] = props.width;
    if (props.height)
        result["height"] = props.height;

    if (props.marginTop)
        result["marginTop"] = props.marginTop;
    if (props.marginLeft)
        result["marginLeft"] = props.marginLeft;
    if (props.marginRight)
        result["marginRight"] = props.marginRight;
    if (props.marginBottom)
        result["marginBottom"] = props.marginBottom;
    if (props.margin)
        result["margin"] = props.margin;

    if (props.paddingTop)
        result["paddingTop"] = props.paddingTop;
    if (props.paddingLeft)
        result["paddingLeft"] = props.paddingLeft;
    if (props.paddingRight)
        result["paddingRight"] = props.paddingRight;
    if (props.paddingBottom)
        result["paddingBottom"] = props.paddingBottom;
    if (props.padding)
        result["padding"] = props.padding;

    if (props.align)
        result["textAlign"] = props.align;

        
    if (props.rows)
        result["gridTemplateRows"] = `repeat(${props.rows},1fr)`;
    if (props.columns)
        result["gridTemplateColumns"] = `repeat(${props.columns},1fr)`;
    if (props.cols)
        result["gridTemplateColumns"] = `repeat(${props.cols},1fr)`;
    if(props.grid){
        let point = ConvertPoint(props.grid)
        result["gridTemplateColumns"] = `repeat(${point[0]},1fr)`;
        result["gridTemplateRows"]    = `repeat(${point[1]},1fr)`;
    }
    if(props.Grid && typeof props.Grid != "boolean"){
        result["gridTemplateColumns"] = `repeat(${props.Grid},1fr)`;
        result["gridTemplateRows"]    = `repeat(${props.Grid},1fr)`;
    }

    if (props.rtl)
        result["direction"] = "rtl";
    if (props.ltr)
        result["direction"] = "ltr";

    if (props.fSize)
        result["fontSize"] = props.fSize;


    if (props.underline)
        result["textDecoration"] = "underline";

    if (props.start && props.end){
        result["gridColumn"] = `${ConvertPoint(props.start)[0]}/${ConvertPoint(props.end)[0]}`;
        result["gridRow"]    = `${ConvertPoint(props.start)[1]}/${ConvertPoint(props.end)[1]}`;
    }

    if (props.position){
        let start = props.position.split("|")[0];
        let end = props.position.split("|")[1];
        result["gridColumn"] = `${ConvertPoint(start)[0]}/${ConvertPoint(end)[0]}`;
        result["gridRow"]    = `${ConvertPoint(start)[1]}/${ConvertPoint(end)[1]}`;
    }


    if (props.family)
        result["fontFamily"] = props.family;

    if (props.flexDirection)
        result["flexDirection"] = props.flexDirection;

    if (props.scroll)
        result["overflow"] = "auto";

    if (props.wrap)
        result["flexWrap"] = "wrap";


    if (props.bgColor && typeof props.bgColor == "boolean")
        result["backgroundColor"] = `${backgrouds(props.bgColor,bgcounter++%5)}`;
    else if (props.bgColor && typeof props.bgColor == "string")
        result["backgroundColor"] = props.bgColor;

    if (props.bgImg)
        result["backgroundImage"] = `url(${props.bgImg})`;

    if (props.zIndex)
        result["zIndex"] = props.zIndex;


    if(props.styleOverrid){
            result = {...result , ...props.styleOverrid}
    }

    return result;
}




export default GlobalStyle;


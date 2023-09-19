interface IGlobalProps{
    children    ?: JSX.Element | JSX.Element[] |string|any;
    className   ? : string;
    value       ? : string;
    key         ? :any,

    width       ? : number | string;
    height      ? : number | string;

    start       ? : string;
    end         ? : string;
    
    center?:boolean;
    
    
    border?: boolean;
    bgColor     ? : boolean |string;
    bgImg       ? : any;
    icon        ? : any;

    XYcenter?:boolean;
    Xcenter?:boolean;
    Ycenter?:boolean;
    align  ? : "center"|"left"|"right";

    columns?:number;
    rows?:number;

    gap?:number |string;
    rtl?:boolean;
    ltr?:boolean;
    scroll?:boolean;


    margin    ? :string;
    marginTop  ? :number|string;
    marginLeft? :number|string;
    marginRight? :number|string;
    marginBottom? :number|string;

    padding    ? :string;
    paddingTop  ? :number|string;
    paddingLeft? :number|string;
    paddingRight? :number|string;
    paddingBottom? :number|string;


    fSize? :number|string;
    underline? :boolean;
    flexDirection? :"row"|"column"|"row-reverse"|"column-reverse" ;


    onClick ? :(event?:React.MouseEvent<HTMLElement>)=>void;
}
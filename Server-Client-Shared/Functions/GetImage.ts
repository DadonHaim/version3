// type IType = "backgroud"|"icon"|"magic";
export default function GetImage(type:any,name:string , ending:string="png"):string{
    let _image :any;
    let folder = "";
    switch(type){
        case "backgroud":
            folder = "backgrounds"; 
            break;
        case "icon":
            folder = "icons"; 
            break;
        case "magic":
            folder = "magicsLogo"; 
            break;
    }
    try{
        _image = require(`../Images/${folder}/${name}.${ending}`);
    }
    catch{
        console.log("image not found")
        _image = ""
    }
    return _image;
}

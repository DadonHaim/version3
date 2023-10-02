function GetIcon(name:string,ending:string="png"){
    let _image :any;
    try {
        _image = require(`./Icons/${name}.${ending}`)
    }
    catch (err){
        _image=""
    }
    return _image;
}

function GetImageItems(name:string|undefined, ending:string="png",image :any= ""){
    if(name == undefined) return "";
    try  {image = require(`${name}.${ending}`)}
    catch(err){console.log(err)}
    return image;
}

function GetBackground(name:string , ending:string="png",image :any= ""){
    try  {image = require(`./Backgrounds/${name}.${ending}`)}
    catch{console.log("image not found")}
    return image;
}
function GetLogo(name:string , ending:string="png",image :any= ""){
    try  {image = require(`./Logo/${name}.${ending}`)}
    catch{image=""}
    return image;
}
function GetGirlImg(name:string , ending:string="png",image :any= ""){
    try  {image = require(`./Girl/${name}.${ending}`)}
    catch{image=""}
    return image;
}
 function GetBoyImg(name:string , ending:string="png",image :any= ""){
    try  {image = require(`./Boy/${name}.${ending}`); image=""}
    catch{}
    return image;
}

export{
    GetImageItems,
    GetIcon,
    GetBackground,
    GetLogo,
    GetGirlImg,
    GetBoyImg
}
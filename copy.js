const fs = require('fs');
let folder = "Server-Client-Shared";
let source = "../"+folder;
let forMe , forOnther;




if(process.argv[2] == "client"){
    forMe = "./src/"+folder;
    forOnther = "../server/"+folder;
    Copy()
}
else if(process.argv[2] =="server"){
    forMe = "./"+folder;
    forOnther = "../client/src/"+folder;
    Copy()
}

else{
    fs.rmSync( "./server/"+folder , { recursive: true, force: true })
    fs.rmSync( "./client/src/"+folder, { recursive: true, force: true })
    fs.cpSync("./"+folder , "./server/"+folder      , {recursive:true})
    fs.cpSync("./"+folder , "./client/src/"+folder  , {recursive:true})
}

function Copy(){
    try{
        
        fs.cpSync(source,forMe      , {recursive:true})
        fs.cpSync(source,forOnther , {recursive:true})
    }
    catch(e){
        throw "mmmmm"+e;
    }
    
}

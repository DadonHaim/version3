const fs    = require('fs');
const path  = require('path');
//Server
//Client
const directoryPath = "Server-Client-Shared";

fs.readdirSync(directoryPath ,{recursive:true}).forEach(fileName=>{
    const filePath = path.join(directoryPath, fileName);
    if(fileName.endsWith(".ts")) 
    {
        let fileContext = fs.readFileSync('./'+filePath).toString();
        let toClient = fileContext;
        let toServer = fileContext;

        toClient = toClient.replaceAll("//<Server>","/* -for server")
        toClient = toClient.replaceAll("//</Server>","*/")
        toClient = toClient.replaceAll("//<Client>","")
        toClient = toClient.replaceAll("//</Client>","")
        toClient = toClient.replaceAll("//Server","")
        toClient = toClient.replaceAll("//Server","")

        toServer = toServer.replaceAll("//<Client>","/* - for Client")
        toServer = toServer.replaceAll("//</Client>","*/")
        toServer = toServer.replaceAll("//<Server>","")
        toServer = toServer.replaceAll("//</Server>","")
        toServer = toServer.replaceAll("//Client","")
        toServer = toServer.replaceAll("//Client","")


        const newFileName = `${fileName}`;
        fs.writeFileSync("Temp/TempClient/"+newFileName ,toClient)
        fs.writeFileSync("Temp/TempServer/"+newFileName ,toServer)
    }
})


let folder = "Server-Client-Shared";
fs.rmSync( "./client/src/"+folder , { recursive: true, force: true })
fs.rmSync( "./server/"+folder , { recursive: true, force: true })
fs.cpSync("./Temp/TempClient" , "./client/src/"+folder,{recursive:true,force:true})
fs.cpSync("./Temp/TempServer" , "./server/"+folder,{recursive:true,force:true})
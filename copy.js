const fs = require('fs');

    let folder = "Server-Client-Shared";

    fs.rmSync( "./client/src/"+folder , { recursive: true, force: true })
    fs.rmSync( "./server/"+folder , { recursive: true, force: true })
    fs.cpSync("./"+folder , "./client/src/"+folder,{recursive:true,force:true})
    fs.cpSync("./"+folder , "./server/"+folder,{recursive:true,force:true})




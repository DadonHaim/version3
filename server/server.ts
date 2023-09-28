require('module-alias/register')

import {
    express,
    http,
    CrossMidlleWare,
    Server,
    SocketVer2,
    ClientStart,
} from "./importAll"

console.clear()



const app    = express();
const server = http.createServer(app).listen(3001);

app.use(CrossMidlleWare)

const io = new Server(server,{cors: {origin: "*", methods: ['GET', 'POST']}});

io.on("connection",(client)=>{
    console.log("connection")
    ClientStart(new SocketVer2(client))
}) 
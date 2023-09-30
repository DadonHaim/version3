"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./importAll");
const app = (0, importAll_1.express)();
const server = importAll_1.http.createServer(app).listen(3001);
app.use(importAll_1.CrossMidlleWare);
const io = new importAll_1.Server(server, { cors: { origin: "*", methods: ['GET', 'POST'] } });
io.on("connection", (client) => {
    console.log("connection");
    (0, importAll_1.ClientStart)(new importAll_1.SocketVer2(client));
});
//# sourceMappingURL=server.js.map
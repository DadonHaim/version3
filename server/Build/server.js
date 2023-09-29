"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./importAll");
var app = (0, importAll_1.express)();
var server = importAll_1.http.createServer(app).listen(3001);
app.use(importAll_1.CrossMidlleWare);
var io = new importAll_1.Server(server, { cors: { origin: "*", methods: ['GET', 'POST'] } });
io.on("connection", function (client) {
    console.log("connection");
    (0, importAll_1.ClientStart)(new importAll_1.SocketVer2(client));
});
//# sourceMappingURL=server.js.map
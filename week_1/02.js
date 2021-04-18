//用node.js 写一个小的服务端
const http = require("http");

const app = http.createServer();

app.on("request", (req, res) => {
    res.end("hello zhangshoujian!");
});

app.listen(4000);


// 
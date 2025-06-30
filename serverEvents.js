// server sent events : here servers sents response or anything to client

const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === "/events"){
        res.writeHead(200 ,{
            "content-type":"text/event-stream" ,
            "cache-control":"no-cache",
            "connection":"keep-alive"
        });

        const interval = setInterval(()=>{
            res.write(`data : ${Date.now()} \n \n `);
        } , 2000);

        req.on("close" , ()=>{
            clearInterval(interval);
            res.end();
        });
    }
    else {
        res.writeHead(200);
        res.end('server is up');
    }
})

server.listen(3000 , ()=>{
    console.log('server is running on port 3000');
})
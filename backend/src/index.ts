import express, { Application, Request, Response } from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import * as fs from "fs"
import { Buffer } from "buffer";

const app: Application = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    },
    maxHttpBufferSize: 1e8,
    pingTimeout: 60000
})

io.on("connection", (socket) => {
    const userId = socket.id;

    console.log(`user ${userId} connected`);

    // Join Room
    socket.on("join_room", (data: any) => {
        socket.join(data);
        console.log(`user with ID ${userId} joined room: ${data}`)
    })

    socket.on("get_file", (data: any) => {
        const { file, ext, type } = data

        // test
        socket.to(data.roomId).emit("get_files", data);
        /**
         fs.writeFile(`file.${ext}`, file, (err) => {
             if (!err) console.log('created new file');
         });
         **/
    })

    // User disconnected
    socket.on("disconnect", () => {
        console.log(`user ${socket.id} disconnected`);
    })
});

app.get("/test", (req: Request, res: Response) => {
    res.json("server is running fine").status(200);
});

server.listen(5000, () => {
    console.log("server running on port 5000");
})
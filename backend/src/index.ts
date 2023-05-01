import express, { Application, Request, Response } from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app: Application = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    const userId = socket.id;

    console.log(`user ${userId} connected`);

    // Join Room
    socket.on("join_room", (data: any) => {
        socket.join(data);
        console.log(`user with ID ${userId} joined room: ${data}`)
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
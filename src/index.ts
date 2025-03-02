import express, { Request, Response } from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Y Express!");
});

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

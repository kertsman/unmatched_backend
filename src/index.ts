import express, { Request, Response } from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import { promises as fs } from "fs";
import path from "path";
import { DeckDb } from "./db-interfaces/db-interfaces";
import registerSocketEvents from "./socket";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.static(path.resolve(path.join(__dirname, "../deckImages"))));

const httpServer = createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
  connectionStateRecovery: {
    // the backup duration of the sessions and the packets
    maxDisconnectionDuration: 2 * 60 * 1000,
    // whether to skip middlewares upon successful recovery
    skipMiddlewares: true,
  },
});
registerSocketEvents(io);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Y Express!");
});

app.get("/deck/:name", async (req: Request, res: Response) => {
  // const pathToDeck = path.resolve(path.join(__dirname, "../deck/deck.json"));

  // const data = await fs.readFile(pathToDeck, "utf8");
  // const jsonParsedData: DeckDb[] = JSON.parse(data);
  // const requestedDeck = jsonParsedData.find(
  //   (deck) => deck.name.toLowerCase() === req.params.name
  // );
  const requestedDeck = getDeckFromFile("../deck/deck.json", req.params.name);
  res.send(requestedDeck);
});

httpServer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export async function getDeckFromFile(relativePath: string, deckName: string) {
  const pathToDeck = path.resolve(path.join(__dirname, relativePath));

  const data = await fs.readFile(pathToDeck, "utf8");
  const jsonParsedData: DeckDb[] = JSON.parse(data);
  const requestedDeck = jsonParsedData.find(
    (deck) => deck.name.toLowerCase() === deckName
  );
  return requestedDeck;
}

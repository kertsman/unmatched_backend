import { Server } from "socket.io";
import { getDeckFromFile } from ".";
import { CardBase, DeckDb } from "./db-interfaces/db-interfaces";

const rooms: Room[] = [
  {
    roomId: "7363",
    players: [
      {
        name: "xzxasdads",
        hand: [
          {
            id: "1",
            name: "ЗАЗЕРКАЛЬЕ",
            image: "/alice/looking-glass.png",
          },
          {
            id: "2",
            name: "ЗАЗЕРКАЛЬЕ",
            image: "/alice/looking-glass.png",
          },
          {
            id: "3",
            name: "ВКРИВЬ-ВКОСЬ",
            image: "/alice/snicker-snack.png",
          },
          {
            id: "4",
            name: "О БРАВНЫЙ ДЕНЬ!",
            image: "/alice/o-frabjous-day.png",
          },
        ],
        discard: [],
        deck: [
          {
            id: "5",
            name: "НА ДРУГОЙ СТОРОНЕ ГРИБА",
            image: "/alice/the-other-side-of-the-mushroom.png",
          },
          {
            id: "6",
            name: "СЪЕШЬ МЕНЯ",
            image: "/alice/eat-me.png",
          },
          {
            id: "7",
            name: "СЪЕШЬ МЕНЯ",
            image: "/alice/eat-me.png",
          },
          {
            id: "8",
            name: "Я ОПАЗДЫВАЮ!",
            image: "/alice/i'm-late-i'm-late.png",
          },
          {
            id: "9",
            name: "Я ОПАЗДЫВАЮ!",
            image: "/alice/i'm-late-i'm-late.png",
          },
          {
            id: "10",
            name: "Я ОПАЗДЫВАЮ!",
            image: "/alice/i'm-late-i'm-late.png",
          },
          {
            id: "11",
            name: "ВЫПЕЙ МЕНЯ",
            image: "/alice/drink-me.png",
          },
          {
            id: "12",
            name: "ВЫПЕЙ МЕНЯ",
            image: "/alice/drink-me.png",
          },
          {
            id: "13",
            name: "КУСАЧАЯ ПАСТЬ",
            image: "/alice/Jaws That Bite.png",
          },
          {
            id: "14",
            name: "КУСАЧАЯ ПАСТЬ",
            image: "/alice/Jaws That Bite.png",
          },
          {
            id: "15",
            name: "ВПИВАЮЩИЕСЯ КОГТИ",
            image: "/alice/Claws That Catch.png",
          },
          {
            id: "16",
            name: "ВПИВАЮЩИЕСЯ КОГТИ",
            image: "/alice/Claws That Catch.png",
          },
          {
            id: "17",
            name: "ПЕРЕЛОМНЫЙ МОМЕНТ",
            image: "/alice/Momentous Shift.png",
          },
          {
            id: "18",
            name: "ПЕРЕЛОМНЫЙ МОМЕНТ",
            image: "/alice/Momentous Shift.png",
          },
          {
            id: "19",
            name: "СТЫЧКА",
            image: "/alice/Skirmish.png",
          },
          {
            id: "20",
            name: "СТЫЧКА",
            image: "/alice/Skirmish.png",
          },
          {
            id: "21",
            name: "БЕЗУМЕН, КАК ШЛЯПНИК",
            image: "/alice/Mad as a Hatter.png",
          },
          {
            id: "22",
            name: "БЕЗУМЕН, КАК ШЛЯПНИК",
            image: "/alice/Mad as a Hatter.png",
          },
          {
            id: "23",
            name: "ВРАГ У ВОРОТ",
            image: "/alice/Manxome Foe.png",
          },
          {
            id: "24",
            name: "ВРАГ У ВОРОТ",
            image: "/alice/Manxome Foe.png",
          },
          {
            id: "25",
            name: "УЛОВКА",
            image: "/alice/Feint.png",
          },
          {
            id: "26",
            name: "УЛОВКА",
            image: "/alice/Feint.png",
          },
          {
            id: "27",
            name: "УЛОВКА",
            image: "/alice/Feint.png",
          },
          {
            id: "28",
            name: "ПЕРЕДЫШКА",
            image: "/alice/Regroup.png",
          },
          {
            id: "29",
            name: "ПЕРЕДЫШКА",
            image: "/alice/Regroup.png",
          },
          {
            id: "30",
            name: "ПЕРЕДЫШКА",
            image: "/alice/Regroup.png",
          },
        ],
      },
      {
        name: "Игорь",
        hand: [
          {
            id: "1",
            name: "ЗАЗЕРКАЛЬЕ",
            image: "/alice/looking-glass.png",
          },
          {
            id: "2",
            name: "ЗАЗЕРКАЛЬЕ",
            image: "/alice/looking-glass.png",
          },
          {
            id: "3",
            name: "ВКРИВЬ-ВКОСЬ",
            image: "/alice/snicker-snack.png",
          },
          {
            id: "4",
            name: "О БРАВНЫЙ ДЕНЬ!",
            image: "/alice/o-frabjous-day.png",
          },
        ],
        discard: [],
        deck: [
          {
            id: "5",
            name: "НА ДРУГОЙ СТОРОНЕ ГРИБА",
            image: "/alice/the-other-side-of-the-mushroom.png",
          },
          {
            id: "6",
            name: "СЪЕШЬ МЕНЯ",
            image: "/alice/eat-me.png",
          },
          {
            id: "7",
            name: "СЪЕШЬ МЕНЯ",
            image: "/alice/eat-me.png",
          },
          {
            id: "8",
            name: "Я ОПАЗДЫВАЮ!",
            image: "/alice/i'm-late-i'm-late.png",
          },
          {
            id: "9",
            name: "Я ОПАЗДЫВАЮ!",
            image: "/alice/i'm-late-i'm-late.png",
          },
          {
            id: "10",
            name: "Я ОПАЗДЫВАЮ!",
            image: "/alice/i'm-late-i'm-late.png",
          },
          {
            id: "11",
            name: "ВЫПЕЙ МЕНЯ",
            image: "/alice/drink-me.png",
          },
          {
            id: "12",
            name: "ВЫПЕЙ МЕНЯ",
            image: "/alice/drink-me.png",
          },
          {
            id: "13",
            name: "КУСАЧАЯ ПАСТЬ",
            image: "/alice/Jaws That Bite.png",
          },
          {
            id: "14",
            name: "КУСАЧАЯ ПАСТЬ",
            image: "/alice/Jaws That Bite.png",
          },
          {
            id: "15",
            name: "ВПИВАЮЩИЕСЯ КОГТИ",
            image: "/alice/Claws That Catch.png",
          },
          {
            id: "16",
            name: "ВПИВАЮЩИЕСЯ КОГТИ",
            image: "/alice/Claws That Catch.png",
          },
          {
            id: "17",
            name: "ПЕРЕЛОМНЫЙ МОМЕНТ",
            image: "/alice/Momentous Shift.png",
          },
          {
            id: "18",
            name: "ПЕРЕЛОМНЫЙ МОМЕНТ",
            image: "/alice/Momentous Shift.png",
          },
          {
            id: "19",
            name: "СТЫЧКА",
            image: "/alice/Skirmish.png",
          },
          {
            id: "20",
            name: "СТЫЧКА",
            image: "/alice/Skirmish.png",
          },
          {
            id: "21",
            name: "БЕЗУМЕН, КАК ШЛЯПНИК",
            image: "/alice/Mad as a Hatter.png",
          },
          {
            id: "22",
            name: "БЕЗУМЕН, КАК ШЛЯПНИК",
            image: "/alice/Mad as a Hatter.png",
          },
          {
            id: "23",
            name: "ВРАГ У ВОРОТ",
            image: "/alice/Manxome Foe.png",
          },
          {
            id: "24",
            name: "ВРАГ У ВОРОТ",
            image: "/alice/Manxome Foe.png",
          },
          {
            id: "25",
            name: "УЛОВКА",
            image: "/alice/Feint.png",
          },
          {
            id: "26",
            name: "УЛОВКА",
            image: "/alice/Feint.png",
          },
          {
            id: "27",
            name: "УЛОВКА",
            image: "/alice/Feint.png",
          },
          {
            id: "28",
            name: "ПЕРЕДЫШКА",
            image: "/alice/Regroup.png",
          },
          {
            id: "29",
            name: "ПЕРЕДЫШКА",
            image: "/alice/Regroup.png",
          },
          {
            id: "30",
            name: "ПЕРЕДЫШКА",
            image: "/alice/Regroup.png",
          },
        ],
      },
    ],
    battleSpace: [
      { name: "xzxasdads", cards: [], isFaceDownForOponent: false },
      { name: "Игорь", cards: [], isFaceDownForOponent: false },
    ],
  },
];

setInterval(() => {
  console.log(rooms);
}, 3000);

export default function registerSocketEvents(io: Server) {
  io.on("connection", (socket) => {
    socket.on("create-room", async ({ roomId, name, deck }) => {
      console.log("room was created with id: " + roomId + " " + name);
      socket.join(roomId);

      // get card deck of user
      const deckOfCards = await getDeckFromFile("../deck/deck.json", deck);
      // shuffle
      const shufeledCards = deckOfCards?.cards || [];
      for (let i = 0; i < shufeledCards.length; i++) {
        // picks the random number between 0 and length of the deck
        const shuffle = Math.floor(Math.random() * shufeledCards.length);

        //swap the current with a random position
        [shufeledCards[i], shufeledCards[shuffle]] = [
          shufeledCards[shuffle],
          shufeledCards[i],
        ];
      }
      const player: { name: string; hand: any[]; discard: any[]; deck: any[] } =
        { name, hand: [], discard: [], deck: [] };
      player.deck = shufeledCards.slice(0, 25);
      player.hand = shufeledCards.slice(25, 30);

      const room: Room = {
        roomId,
        players: [player],
        battleSpace: [
          {
            name: player.name,
            cards: [],
            isFaceDownForOponent: false,
          },
        ],
      };

      rooms.push(room);
      io.sockets.in(roomId).emit("game-state-changed", room);
    });

    socket.on("join-room", async ({ roomId, name, deck }) => {
      socket.join(roomId);
      const room = rooms.find((room) => room.roomId === roomId);

      const deckOfCards = await getDeckFromFile("../deck/deck.json", deck);
      if (!deckOfCards) {
        console.log("%cNo deck cards", "color: red");
        return;
      }
      const shufeledCards = shuffleCards(deckOfCards);
      const player = {
        name,
        hand: shufeledCards.slice(0, 5),
        discard: [],
        deck: shufeledCards.slice(0, 25),
      };

      const playerInBattleSpace = {
        name: player.name,
        cards: [],
        isFaceDownForOponent: false,
      };

      room?.players.push(player);
      room?.battleSpace.push(playerInBattleSpace);
      console.dir(room);

      io.sockets.in(roomId).emit("game-state-changed", room);
    });

    socket.on("setup-connetction", (roomId, callback) => {
      socket.join(roomId);
      const room = rooms.find((room) => room.roomId === roomId);
      io.sockets.in(roomId).emit("game-state-changed", room);
      callback();
    });

    socket.on("player-took-card-in-hand", (roomId, name, card) => {
      const room = rooms.find((room) => room.roomId === roomId);
      const player = room?.players.find((playerCandidat) => {
        return playerCandidat.name === name;
      });
      if (!player) {
        console.log("NO PLAYER FOUND");
        return;
      }
      player.hand.push(card);
      player.deck = player.deck.filter(
        (cardCandidate) => cardCandidate.id !== card.id
      );
      socket.to(roomId).emit("opponent-or-battlespace-changed", room);
    });

    socket.on("player-discarded-card", (roomId, name, card) => {
      const room = rooms.find((room) => room.roomId === roomId);
      const player = room?.players.find((playerCandidat) => {
        return playerCandidat.name === name;
      });
      if (!player) {
        console.log("NO PLAYER FOUND");
        return;
      }
      player.discard.push(card);
      player.hand = player.hand.filter(
        (cardCandidate) => cardCandidate.id !== card.id
      );
      socket.to(roomId).emit("opponent-or-battlespace-changed", room);
    });

    socket.on("player-played-card", (roomId, name, card) => {
      console.log(card);

      const room = rooms.find((room) => room.roomId === roomId);
      const player = room?.players.find((playerCandidat) => {
        return playerCandidat.name === name;
      });
      const playerInBattleSpace = room?.battleSpace.find((playerCandidat) => {
        return playerCandidat.name === name;
      });
      if (!player) {
        console.log("NO PLAYER FOUND");
        return;
      }
      if (!playerInBattleSpace) {
        console.log("NO PLAYER in battleSpace");
        return;
      }
      playerInBattleSpace.cards.push(card);
      player.hand = player.hand.filter(
        (cardCandidate) => cardCandidate.id !== card.id
      );
      io.sockets.in(roomId).emit("opponent-or-battlespace-changed", room);
    });

    socket.on("discarded-all-cards-from-battle-space", (roomId, name) => {
      const room = rooms.find((room) => room.roomId === roomId);
      const player = room?.players.find((playerCandidat) => {
        return playerCandidat.name === name;
      });
      const playerInBattleSpace = room?.battleSpace.find((playerCandidat) => {
        return playerCandidat.name === name;
      });
      if (!player) {
        console.log("NO PLAYER FOUND");
        return;
      }
      if (!playerInBattleSpace) {
        console.log("NO PLAYER in battleSpace");
        return;
      }
      playerInBattleSpace.cards.forEach((card) => player.discard.push(card));
      playerInBattleSpace.cards = [];
      io.sockets.in(roomId).emit("opponent-or-battlespace-changed", room);
    });

    socket.on(
      "change-visibility-of-cards-to-opponent",
      (roomId, name, newVisibility) => {
        const room = rooms.find((room) => room.roomId === roomId);
        const player = room?.players.find((playerCandidat) => {
          return playerCandidat.name === name;
        });
        const playerInBattleSpace = room?.battleSpace.find((playerCandidat) => {
          return playerCandidat.name === name;
        });
        if (!player) {
          console.log("NO PLAYER FOUND");
          return;
        }
        if (!playerInBattleSpace) {
          console.log("NO PLAYER in battleSpace");
          return;
        }
        playerInBattleSpace.isFaceDownForOponent = newVisibility;

        io.sockets.in(roomId).emit("opponent-or-battlespace-changed", room);
      }
    );
  });
}

interface Room {
  roomId: string;
  players: Player[];
  battleSpace: {
    name: string;
    cards: CardBase[];
    isFaceDownForOponent: boolean;
  }[];
}

interface Player {
  name: string;
  hand: CardBase[];
  discard: CardBase[];
  deck: CardBase[];
}

interface BattleSpace {
  name: string;
  cards: CardBase[];
  isFaceDownForOponent: boolean;
}

function shuffleCards(deckOfCards: DeckDb) {
  const shufeledCards = [...(deckOfCards?.cards || [])];
  for (let i = 0; i < shufeledCards.length; i++) {
    // picks the random number between 0 and length of the deck
    const shuffle = Math.floor(Math.random() * shufeledCards.length);

    //swap the current with a random position
    [shufeledCards[i], shufeledCards[shuffle]] = [
      shufeledCards[shuffle],
      shufeledCards[i],
    ];
  }
  return shufeledCards;
}

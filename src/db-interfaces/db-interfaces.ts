interface DeckDb {
  name: string;
  cover: string;
  cards: CardBase[];
}

interface CardBase {
  id: string;
  name: string;
  image: string;
}

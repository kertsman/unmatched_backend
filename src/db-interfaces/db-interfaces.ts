export interface DeckDb {
  name: string;
  cover: string;
  cards: CardBase[];
}

export interface CardBase {
  id: string;
  name: string;
  image: string;
}

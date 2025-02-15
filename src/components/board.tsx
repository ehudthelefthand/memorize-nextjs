import Card from "./card";

interface BoardProps {
  emojis: string;
}

let id = 0;

type Card = {
  id: number;
  value: string;
  isFaceUp: boolean;
};

const makeCard = (value: string): Card => ({
  id: id++,
  value,
  isFaceUp: false,
});

export default function Board({ emojis }: BoardProps) {
  const cards = Array.from(emojis.trim().replace(/\s/g, ""))
    .map((emoji) => [makeCard(emoji), makeCard(emoji)])
    .flat()
    .sort(() => Math.random() - 0.5);

  return (
    <div className="grid select-none grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.id} value={card.value} isFaceUp={card.isFaceUp} />
      ))}
    </div>
  );
}

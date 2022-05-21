import { Container } from './styles';

import { MdAdd } from 'react-icons/md';
import { Card } from '../Card';

interface CardProps {
  id: number;
  content: string;
  user: string;
}

interface ListProps {
  title: string;
  creatabled: boolean;
  cards: CardProps[]
}

export function List({ title, creatabled, cards }: ListProps) {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
        {creatabled && (
          <button
            type="button"
          >
            <MdAdd size={20} color="#ffffff" />
          </button>
        )}
      </header>

      <ul>
        {cards.map(card => (
          <Card key={card.id} title={card.content} avatar={card.user} />
        ))}
      </ul>
    </Container>
  );
}
import { Container } from "./styles";

interface CardProps {
  title: string;
  avatar?: string;
}

export function Card({ title, avatar }: CardProps) {
  return (
    <Container>
      <p>
        {title}
      </p>
      <div>
        {avatar ? (
          <img src={avatar} alt="Rafael Pereira" />
        ) : (
          <div></div>
        )}
        <span>Criado em 19/05/2022</span>
      </div>
    </Container>
  );
}
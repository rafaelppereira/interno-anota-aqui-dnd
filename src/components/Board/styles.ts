import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;  

  padding: 30px 0;
  height: calc(100% - var(--header-height));

  max-width: 1480px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

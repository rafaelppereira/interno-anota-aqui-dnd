import styled from 'styled-components';

export const Container = styled.div`
  height: var(--header-height);
  background-color: var(--primary-color);
  color: var(--white);

  padding: 0 2rem;

  > div {
    max-width: 1480px;
    padding: 0 2rem;
    margin: 0 auto;

    display: flex;
    height: inherit;
    align-items: center;
  }

  h1 {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

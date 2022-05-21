import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.2rem;
  height: 100%;

  border-radius: 0.5rem;
  flex: 0 0 320px;

  background: var(--box-color);
  border-top: 4px solid var(--primary-color);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 1rem;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 50%;

      background-color: var(--primary-color);

      display: flex;
      justify-content: center;
      align-items: center;

      flex-shrink: 0;
    }
    
  }

  ul {
    margin-top: 2rem;
  }
`;

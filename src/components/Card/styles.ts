import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: var(--border-color);
  border-radius: 0.3rem;

  margin-bottom: 0.8rem;
  padding: 1rem;

  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.1);
  border-top: 11px solid rgba(225, 225,225, 0.07);

  cursor: grab;
  
  header {
    position: absolute;
    top: -20px;
    left: 15px;
  }

  p {
    font-weight: 400;
    line-height: 20px;

    padding-bottom: 1rem;
  }



  > div {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;

      border-radius: 0.25rem;
      margin-right: 0.8rem;

      border: 1px solid var(--primary-color);
    }

    span {
      font-size: 0.8rem;
      font-weight: 300;
      opacity: 0.6;
    }
  }
`;

import { styled } from "styled-components";

export const DivStyled = styled.div`
  max-width: 300px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

  img {
    background-color: var(--blue-1);
    border-radius: 40px;
    padding: 7px;
    width: 40px;
  }

  span {
    font-weight: 600;
  }
`;

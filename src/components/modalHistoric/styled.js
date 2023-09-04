import { styled } from "styled-components";

export const DivStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .white {
    background-color: white;
    width: 90%;
    padding: 22px 10px;
    max-width: 420px;
    margin: 0 auto;
    border-radius: 8px;
  }

  header {
    text-align: center;
    position: relative;
    background-color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;

    span {
      position: absolute;
      right: 15px;
      top: -6px;
      font-size: 18px;
      background-color: var(--blue-1);
      padding: 6px 8px;
      border-radius: 100px;
      color: white;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
  }

  h3 {
    margin-bottom: 10px;
  }

  .full-content {
    margin-bottom: 15px;
    border-bottom: rgba(0, 0, 0, 0.1) 2px solid;
  }
`;

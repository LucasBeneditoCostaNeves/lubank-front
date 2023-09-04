import { styled } from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  align-items: center;
  z-index: 2;
  position: relative;

  .lubank-div {
    display: flex;
    align-items: flex-end;
  }

  .lu {
    font-size: 47px;
    color: var(--blue-1);
    font-weight: 900;
  }

  .bank {
    font-size: 40px;
    font-weight: 900;
    color: var(--black-1);
  }
  button {
    border: none;
    border-radius: 6px;
    background-color: var(--blue-1);
    color: white;
    width: 100px;
    height: 30px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    max-width: 120px;
    box-shadow: rgba(0, 0, 0, 0.15) 3.95px 4.95px 1.6px;
  }
`;

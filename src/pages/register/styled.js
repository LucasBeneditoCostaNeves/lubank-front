import { styled } from "styled-components";

export const DivStyled = styled.div`
  .full-div {
    display: flex;
  }

  .card {
    width: 0px;
    height: 0px;
    z-index: 1;
  }

  .div-form {
    width: max-content;
    height: max-content;
    padding: 20px 32px;
    margin: 35px auto 50px;
    box-shadow: rgba(0, 0, 0, 0.15) 23.95px 17.95px;
    border: 2px solid #b1afaf;

    background-color: white;

    border-radius: 6px;

    text-align: center;

    h1 {
      margin-top: 30px;

      font-size: 25px;
      font-weight: 800;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h5 {
      margin: 8px 0px 10px;
      font-size: 13px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 2px 2px rgba(0, 0, 0, 0.25);
    }
  }

  .button {
    width: 204px;
    height: 49px;

    color: white;
    background: var(--blue-1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 8px;
    border: none;

    font-size: 18px;
    margin: 32px 0px 10px;

    cursor: pointer;
  }

  .alert {
    font-size: 13px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 2px 2px rgba(0, 0, 0, 0.25);

    cursor: pointer;
  }

  @media (min-width: 690px) {
    .div-black {
      display: flex;
    }

    .div-logo {
      display: none;
    }

    .position {
      flex-direction: row;
      top: 54%;
    }

    .div-form {
      border-radius: 8px 8px 8px 8px;
    }
    .card {
      width: 360px;
      height: 360px;
      margin-top: 35px;
      margin: auto 0px;
    }
  }

  @media (min-width: 750px) {
    .card {
      width: 420px;
      height: 420px;
      position: relative;
      bottom: 65px;
    }
  }

  @media (min-width: 800px) {
    .card {
      width: 500px;
      height: 400px;
      position: relative;
      bottom: 50px;
    }
  }

  @media (min-width: 950px) {
    .card {
      width: 600px;
      height: 450px;
      position: relative;
      bottom: 90px;
      left: 30px;
    }
  }

  @media (min-width: 1050px) {
    .card {
      width: 700px;
      height: 450px;
      position: relative;
      bottom: 70px;
      left: 50px;
    }
  }
`;

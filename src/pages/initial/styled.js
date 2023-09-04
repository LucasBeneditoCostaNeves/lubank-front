import { styled } from "styled-components";

export const DivStyled = styled.div`
  .text-div {
    width: 50%;
    position: absolute;
    top: 29vh;
    text-align: center;
  }

  .lubank-div {
    width: 100%;
    display: flex;
    align-items: flex-end;
    text-align: center;
    margin: 0 auto;
    justify-content: center;
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

  img {
    width: 50%;
    position: absolute;
    top: 25vh;
    right: 3px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  button {
    border: none;
    border-radius: 6px;
    background-color: var(--blue-1);
    color: white;
    width: 90%;
    height: 30px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    max-width: 180px;
  }

  @media (min-width: 520px) {
    img {
      top: 20vh;
    }

    .text-div {
      top: 32vh;
    }

    @media (min-width: 700px) {
      .text-div {
        right: 0;
        width: 40%;
      }

      .lu {
        font-size: 65px;
      }

      .bank {
        font-size: 60px;
      }

      h3 {
        font-size: 26px;
      }

      img {
        top: 15vh;
        left: 50px;
        max-width: 330px;
      }

      .black1 {
        background-color: var(--black-1);
        height: 10px;
        width: 120px;
        position: relative;
        animation: balanco1 2s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 25px;
      }

      .black2 {
        background-color: var(--black-1);
        height: 10px;
        width: 200px;
        position: relative;
        animation: balanco2 3s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      .black3 {
        background-color: var(--black-1);
        height: 10px;
        width: 120px;
        position: relative;
        animation: balanco3 3s infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      .black4 {
        background-color: var(--black-1);
        height: 10px;
        width: 110px;
        position: relative;
        animation: balanco2 3s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      .black5 {
        background-color: var(--black-1);
        height: 10px;
        width: 80px;
        position: relative;
        animation: balanco3 2s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      .black6 {
        background-color: var(--black-1);
        height: 10px;
        width: 50px;
        position: relative;
        animation: balanco3 3s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      .black7 {
        background-color: var(--black-1);
        height: 10px;
        width: 40px;
        position: relative;
        animation: balanco2 3s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      .black8 {
        background-color: var(--black-1);
        height: 10px;
        width: 80px;
        position: relative;
        animation: balanco2 4s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      .black9 {
        background-color: var(--black-1);
        height: 10px;
        width: 40px;
        position: relative;
        animation: balanco3 3s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      .black10 {
        background-color: var(--black-1);
        height: 10px;
        width: 110px;
        position: relative;
        animation: balanco1 3s ease-in-out infinite;
        border-radius: 0px 15px 15px 0px;
        margin-top: 30px;
      }

      @keyframes balanco1 {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-100px); /* Ajuste a distância que desejar */
        }
      }

      @keyframes balanco2 {
        0%,
        100% {
          transform: translateX(0px);
        }
        50% {
          transform: translateX(-100px); /* Ajuste a distância que desejar */
        }
      }

      @keyframes balanco3 {
        0%,
        100% {
          transform: translateX(-100px);
        }
        50% {
          transform: translateX(0); /* Ajuste a distância que desejar */
        }
      }

      @media (min-height: 515px) {
        .black11 {
          background-color: var(--black-1);
          height: 10px;
          width: 90px;
          position: relative;
          animation: balanco3 3s ease-in-out infinite;
          border-radius: 0px 15px 15px 0px;
          margin-top: 30px;
        }

        .black12 {
          background-color: var(--black-1);
          height: 10px;
          width: 40px;
          position: relative;
          animation: balanco2 3s ease-in-out infinite;
          border-radius: 0px 15px 15px 0px;
          margin-top: 30px;
        }

        .black13 {
          background-color: var(--black-1);
          height: 10px;
          width: 140px;
          position: relative;
          animation: balanco2 3s ease-in-out infinite;
          border-radius: 0px 15px 15px 0px;
          margin-top: 30px;
        }
      }
    }
    @media (min-width: 1000px) {
      .text-div {
        right: 50px;
      }
    }
  }
`;

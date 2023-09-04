import { DivStyled } from "./styled";
import historic from "../../assents/historic.png";
import deposits from "../../assents/deposit.png";
import pix from "../../assents/pix.png";
import { useContext } from "react";
import { Context } from "../../context/context";

export const Tools = () => {
  const { setModalHistoric } = useContext(Context);
  return (
    <DivStyled>
      <div>
        <div>
          <img src={pix} />
          <span>Fazer Pix</span>
        </div>
        <div>
          <img src={deposits} />
          <span>Depositar</span>
        </div>
        <div>
          <img src={historic} onClick={() => setModalHistoric(true)} />
          <span>Histórico</span>
        </div>
      </div>
    </DivStyled>
  );
};

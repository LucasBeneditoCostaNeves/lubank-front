import { useContext } from "react";
import { DivStyled } from "./styled";
import { Context } from "../../context/context";

export const SaleDiv = () => {
  const { dataUser } = useContext(Context);
  return (
    <DivStyled>
      <h2 className="h2-count">Saldo</h2>
      {dataUser && <h2>R$ {dataUser.money}</h2>}
      <span>{">"}</span>
    </DivStyled>
  );
};

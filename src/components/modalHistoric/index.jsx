import { useContext } from "react";
import { DivStyled } from "./styled";
import { Context } from "../../context/context";

export const ModalHistoric = () => {
  const { transfers, data, setModalHistoric, dataUser } = useContext(Context);
  const id = localStorage.getItem("@Id");

  return (
    <DivStyled>
      <div className="white">
        <header>
          <h2>Histórico</h2>
          <span onClick={() => setModalHistoric(false)}>X</span>
        </header>
        {transfers && transfers.length > 0 ? (
          transfers.map((element) => {
            const partesData = element.created_at.split("-");

            const filterNamePayer = data.filter(
              (elemen) => elemen.id === element.payer_id
            );
            const filterNamePayee = data.filter(
              (elemen) => elemen.id === element.payee_id
            );

            return (
              <div className="full-content">
                <div className="flex">
                  <h2 className="name">
                    {dataUser.name === filterNamePayee[0].name
                      ? filterNamePayer[0].name
                      : filterNamePayee[0].name}
                  </h2>
                  <h4>{`${partesData[2][0]}${partesData[2][1]}/${partesData[1]}/${partesData[0]}`}</h4>
                </div>
                <div className="flex">
                  <h3>R$ {element.value}</h3>
                  {element.payer_id === id ? <h4>Saída</h4> : <h4>Entrada</h4>}
                </div>
              </div>
            );
          })
        ) : (
          <h1>Adicione algo seu puto</h1>
        )}
      </div>
    </DivStyled>
  );
};

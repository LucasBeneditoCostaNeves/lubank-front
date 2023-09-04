//Importanto createContext e useState, já vem com o react
import { createContext, useState } from "react";

//Criando nosso contexto
export const Context = createContext({});

//Função que vai englobar nosso contexto
export const GenericoProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [dataUser, setDataUser] = useState();
  const [transfers, setTransfers] = useState([]);
  const [data, setData] = useState([]);
  const [modalHistoric, setModalHistoric] = useState(false);
  const [modalDeposit, setModalDeposit] = useState(false);
  const [modalTransferic, setModalTransferic] = useState(false);

  return (
    <Context.Provider
      value={{
        number,
        setNumber,
        dataUser,
        setDataUser,
        transfers,
        setTransfers,
        data,
        setData,
        modalHistoric,
        setModalHistoric,
        modalDeposit,
        setModalDeposit,
        modalTransferic,
        setModalTransferic,
      }}
    >
      {children}
    </Context.Provider>
  );
};

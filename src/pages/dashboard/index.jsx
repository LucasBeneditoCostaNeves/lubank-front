import { useContext, useEffect } from "react";
import { DivStyled } from "./styled";
import { Context } from "../../context/context";
import image from "../../assents/image.png";
import { api } from "../../services";
import { SaleDiv } from "../../components/sale";
import { Tools } from "../../components/tools";
import { ModalHistoric } from "../../components/modalHistoric";

export const PageDashboard = () => {
  const {
    dataUser,
    setDataUser,
    setTransfers,
    transfers,
    setData,
    modalHistoric,
  } = useContext(Context);
  const id = localStorage.getItem("@Id");
  const token = localStorage.getItem("@Token");

  const reLogin = async () => {
    try {
      const response = await api.get("/users");
      const arrayUsers = response.data;
      setData(arrayUsers);
      const filter = arrayUsers.filter((element) => element.id == id);
      setDataUser(filter[0]);
    } catch {}
  };

  const capturingHistoric = async () => {
    const response = await api.get("/users/transactions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const array = response.data;
    const reverse = array.reverse();
    setTransfers(reverse);
  };

  useEffect(() => {
    reLogin();
    capturingHistoric();
  }, []);
  return (
    <DivStyled>
      <header>
        <img src={image} />
        {dataUser && <h1>Olá, {dataUser.name}</h1>}
      </header>
      <SaleDiv />
      <Tools />
      {modalHistoric && <ModalHistoric />}
    </DivStyled>
  );
};

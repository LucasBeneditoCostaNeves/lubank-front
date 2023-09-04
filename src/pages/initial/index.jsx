import { DivStyled } from "./styled";
import image from "../../assents/illustration.svg";
import { useNavigate } from "react-router-dom";

export const PageInitial = () => {
  const navigate = useNavigate();

  return (
    <DivStyled>
      <div className="full-div">
        <div className="text-div">
          <div className="lubank-div">
            <h1 className="lu">Lu</h1>
            <h2 className="bank">Bank</h2>
          </div>
          <h3>Controle total</h3>
          <h3>das suas finanças</h3>
          <button onClick={() => navigate("/login")}>Iniciar</button>
        </div>
        <img src={image} alt="logo" />
      </div>
      <div>
        <div className="black1"></div>
        <div className="black2"></div>
        <div className="black3"></div>
        <div className="black4"></div>
        <div className="black5"></div>
        <div className="black6"></div>
        <div className="black7"></div>
        <div className="black8"></div>
        <div className="black9"></div>
        <div className="black10"></div>
        <div className="black11"></div>
        <div className="black12"></div>
        <div className="black13"></div>
      </div>
    </DivStyled>
  );
};

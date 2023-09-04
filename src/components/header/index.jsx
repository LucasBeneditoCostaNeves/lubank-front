import { useNavigate } from "react-router-dom";
import { DivStyled } from "./styled";

export const Header = ({ type }) => {
  const navigate = useNavigate();

  return type === "login" ? (
    <DivStyled>
      <div className="lubank-div">
        <h1 className="lu">Lu</h1>
        <h2 className="bank">Bank</h2>
      </div>
      <button onClick={() => navigate("/register")}>Cadastro</button>
    </DivStyled>
  ) : type === "register" ? (
    <DivStyled>
      <div className="lubank-div">
        <h1 className="lu">Lu</h1>
        <h2 className="bank">Bank</h2>
      </div>
      <button onClick={() => navigate("/login")}>Login</button>
    </DivStyled>
  ) : (
    <h1>Dashboard</h1>
  );
};

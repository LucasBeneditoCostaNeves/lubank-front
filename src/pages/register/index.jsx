import { Header } from "../../components/header";
import { DivStyled } from "./styled";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import olho from "../../assents/eye.png";
import img from "../../assents/persons.gif";
import { api } from "../../services";

export const PageRegister = () => {
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email inválido")
      .min(6, "Mínimo 6 caracteres")
      .max(60, "Máximo 60 caracteres"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Minimo 6 caracteres")
      .max(60, "Máximo 60 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const DataForm = async (data) => {
    try {
      await api.post("users", data);
      toast.success("Login Concluído 😎");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch {
      toast.error("Confira os dados passados");
    }
  };

  return (
    <DivStyled>
      <Header type="register" />
      <div className="full-div">
        <img className="card" src={img} />
        <div className="div-form">
          <h1>Crie uma conta</h1>
          <h5>Faça o cadastro na sua conta abaixo:</h5>
          <form onSubmit={handleSubmit(DataForm)}>
            <Input
              label="Nome"
              type="text"
              placeholder="Digite seu nome aqui"
              register={register("name")}
              msgerror={errors.name?.message}
            />
            <Input
              label="Email"
              type="text"
              placeholder="Digite seu email aqui"
              register={register("email")}
              msgerror={errors.email?.message}
            />
            <Input
              label="CPF"
              type="text"
              placeholder="Digite seu CPF aqui"
              register={register("cpf")} // Make sure to provide the register function correctly
              msgerror={errors.cpf?.message}
            />
            <Input
              label="Telefone"
              type="text"
              placeholder="Digite sua senha aqui"
              register={register("phone")}
              msgerror={errors.phone?.message}
            />
            <Input
              label="Senha"
              type={type}
              placeholder="Digite sua senha aqui"
              register={register("password")}
              msgerror={errors.password?.message}
            />
            <Input
              label="Confirmar senha"
              type={type}
              placeholder="Digite sua senha aqui"
              register={register("repassword")}
              msgerror={errors.repassword?.message}
              img={olho}
              state={type}
              setType={setType}
            />
            <button className="button" type="submit">
              Continuar
            </button>
          </form>
          <span className="alert" onClick={() => navigate("/register")}>
            Já tem sua conta? Faça seu login
          </span>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </DivStyled>
  );
};

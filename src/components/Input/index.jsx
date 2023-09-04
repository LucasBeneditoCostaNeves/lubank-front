import React, { useState } from "react";
import { InputStyled } from "./styled";
import olhoFechado from "../../assents/close-eye.png";

export const Input = ({
  label,
  type,
  placeholder,
  register,
  msgerror,
  img,
  state,
  setType,
}) => {
  const [formattedValue, setFormattedValue] = useState("");

  const formatCPF = (value) => {
    value = value.replace(/\D/g, ""); // Remove tudo exceto dígitos

    if (value.length <= 3) {
      setFormattedValue(value);
    } else if (value.length <= 6) {
      setFormattedValue(`${value.slice(0, 3)}.${value.slice(3)}`);
    } else if (value.length <= 9) {
      setFormattedValue(
        `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`
      );
    } else {
      setFormattedValue(
        `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(
          6,
          9
        )}-${value.slice(9, 11)}`
      );
    }

    // Update the registered input value with the unformatted value
    register && register.onChange && register.onChange(value);
  };

  const newType = () => {
    if (state === "password") {
      setType("text");
    } else if (state === "text") {
      setType("password");
    }
  };

  return (
    <InputStyled>
      {img && state === "password" && (
        <img src={img} alt="olho" onClick={() => newType()} />
      )}
      {img && state === "text" && (
        <img src={olhoFechado} alt="olho" onClick={() => newType()} />
      )}
      <label>{label}</label>
      {label === "CPF" ? (
        <input
          type="text"
          autocomplete="off"
          maxlength="14"
          placeholder={placeholder}
          {...register}
          value={formattedValue}
          onChange={(e) => formatCPF(e.target.value)}
        />
      ) : (
        <>
          <input type={type} placeholder={placeholder} {...register} />
        </>
      )}
      <span className="info">{msgerror}</span>
    </InputStyled>
  );
};

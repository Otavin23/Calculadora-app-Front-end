import React, { createContext, useState } from "react";

export const CreateContext = createContext({});

export function CalculadoraProvider({ children }) {
  const [number, setNumber] = useState("");

  const Click = ({ target }) =>
    setNumber((anterior) => anterior.concat(target.value));
  const DeletNumber = () => setNumber(number.slice(0, -1));
  const ResetNumber = () => setNumber("");

  function ResultNumber() {
    const resultado = number;
    const transformArray = resultado.split("");

    transformArray.map((el) => {
      if (el.includes("x")) {
        const index = resultado.indexOf("x");
        const a = Number(resultado.substring(0, index));
        const b = Number(resultado.substring(index + 1));
        setNumber(a * b);
      }
      if (el.includes("/")) {
        const index = resultado.indexOf("/");
        const a = Number(resultado.substring(0, index));
        const b = Number(resultado.substring(index + 1));
        setNumber(a / b);
      }
      if (el.includes("+")) {
        const index = resultado.indexOf("+");
        const a = Number(resultado.substring(0, index));
        const b = Number(resultado.substring(index + 1));
        setNumber(a + b);
      }
      if (el.includes("-")) {
        const index = resultado.indexOf("-");
        const a = Number(resultado.substring(0, index));
        const b = Number(resultado.substring(index + 1));
        setNumber(a - b);
      }
    });
  }

  const valor = {
    Click,
    number,
    DeletNumber,
    ResetNumber,
    ResultNumber,
  };

  return (
    <CreateContext.Provider value={valor}>{children}</CreateContext.Provider>
  );
}

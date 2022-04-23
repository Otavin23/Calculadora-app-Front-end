import React, { createContext, useState } from "react";

export const CreateContext = createContext({});

export function CalculadoraProvider({ children }) {
  const [number, setNumber] = useState("");

  const Click = ({ target }) =>
    setNumber((anterior) => anterior.concat(target.value));
  const DeletNumber = () => setNumber(number.slice(0, -1));
  const ResetNumber = () => setNumber("");

  function ResultNumber() {
    const resultado = number.replace("x", ",*");
    const transformArray = resultado.split("");

    const index = resultado.indexOf(",");

    const a = resultado.substring(0, index);
    const b = resultado.substring(index + 2);

    console.log(a);
    console.log(b);

    transformArray.map((el) => {
      if (el.includes("*")) {
        setNumber(a * b);
      }
      console.log(el);
      if (el.includes("/")) {
        console.log("Entru aqui");
        setNumber(a / b);
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

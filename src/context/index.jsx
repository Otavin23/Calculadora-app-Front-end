import React, { createContext, useState } from "react";

export const CreateContext = createContext({});

export function CalculadoraProvider({ children }) {
  const [number, setNumber] = useState("");
  const [cont, setCont] = useState(0);

  function Click({ target }) {
    setNumber((anterior) => anterior.concat(target.value));
  }

  function DeletNumber() {
    const EndNumberr = number.slice(0, -1);
    setNumber(EndNumberr);
  }
  function ResetNumber() {
    setNumber("");
  }

  function ResultNumber() {
    const resultado = number.replace("x", ",*");
    const transformArray = resultado.split("");

    const index = resultado.indexOf(",");

    const a = resultado.substring(0, index);
    const b = resultado.substring(index + 2);
 
    transformArray.map((el)=> {
       if(el.includes("*")){
          const multi = a * b 
          setNumber(multi)
          console.log("aTUALIZADO2")
       }
    })

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

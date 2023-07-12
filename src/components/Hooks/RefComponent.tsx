import React, { useRef, useEffect } from "react";

/**
 O useRef nos permite persistir valores entre renderizações, 
 ele pode ser usado para armazenar o valor de uma variável mutável que 
 não provoca uma re-renderização, ou para acessar um elemento DOM diretamente.
 */

const RefComponent: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const counterRef = useRef<number>(0);

  useEffect(() => {
    // Define o foco no campo de entrada quando o componente é montado
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleGetRef = () => {
    // Acessa o valor atual do campo de entrada usando a referência
    if (inputRef.current) alert(inputRef.current.value);
  };

  const handleRefButton = () => {
    // Manipula o elemento do DOM diretamente
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
      buttonRef.current.style.padding = "10px";
    }
  };

  // Evite usá-lo para alterar o estado:
  // Embora o useRef permita armazenar valores mutáveis, 
  // não é recomendado usá-lo para alterar o estado do componente.
  // Para atualizar o estado e acionar uma nova renderização,
  // é melhor usar o useState ou useReducer.
  const increment = () => {
    counterRef.current++;
    console.log("Valor do contador:", counterRef.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" style={{border:"1px solid #111", borderRadius:"2px"}}/>
      <button onClick={handleGetRef}>Obter Valor</button> <br />
      <button ref={buttonRef} onClick={handleRefButton}>
        Clique aqui
      </button>
      <br />
      <p>Valor do contador: {counterRef.current}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default RefComponent;

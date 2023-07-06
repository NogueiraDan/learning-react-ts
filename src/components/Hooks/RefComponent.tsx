import React, { useRef, useEffect } from 'react';

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

  const handleClick = () => {
    // Acessa o valor atual do campo de entrada usando a referência
    if (inputRef.current) alert(inputRef.current.value);
  };

  const handleClickButton = () => {
    // Manipula o elemento do DOM diretamente
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'red';
    }
  };

  // Evite usá-lo para alterar o estado: 
  // Embora o useRef permita armazenar valores mutáveis, não é recomendado usá-lo para alterar o estado do componente. 
  // Para atualizar o estado e acionar uma nova renderização, 
  // é melhor usar o useState ou useReducer.
  const increment = () => {
    counterRef.current++;
    console.log('Valor do contador:', counterRef.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Obter Valor</button> <br/>
      <button ref={buttonRef} onClick={handleClickButton}>
        Clique aqui
      </button><br/>
      <p>Valor do contador: {counterRef.current}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default RefComponent;

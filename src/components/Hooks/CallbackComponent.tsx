import React, { useCallback, useState } from "react";

const CallbackComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const items = ["Item 1", "Item 2", "Item 3"];

  const handleClick = useCallback(() => {
    // a função só será recriada quando `count` alterar
    console.log("Count:", count);
  }, [count]);

  const handleItemClick = useCallback((item: string) => {
    setSelectedItem(item);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={handleClick}>Clique aqui</button>
      <br />
      <div>
        {items.map((item) => (
          <div key={item} onClick={() => handleItemClick(item)}>
            {item}
          </div>
        ))}
        <p>Item selecionado: {selectedItem}</p>
      </div>
    </div>
  );
};

export default CallbackComponent;

/* Lembre-se de utilizar o useCallback apenas quando necessário, 
pois a memoização de funções também envolve um custo adicional. 
Use-o quando você precisar otimizar o desempenho em cenários específicos 
em que funções são passadas como propriedades ou dependências de outros hooks. 

ALGUNS OUTROS EXEMPLOS DE BOM USO DO CALLBACK

1. Passando funções para componentes filho:
import React, { useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const handleButtonClick = useCallback(() => {
    // Lógica do clique
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleButtonClick} />
    </div>
  );
};
export default ParentComponent;

2.Uso em efeitos colaterais:
A função fetchData é utilizada como uma dependência no useEffect, 
garantindo que a função seja recriada apenas se ela mudar.

import React, { useCallback, useEffect, useState } from 'react';

const MyComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const fetchData = useCallback(async () => {
    const result = await fetch('https://api.example.com/data');
    const data = await result.json();
    setData(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      RENDERIZA OS DADOS
      </div>
      );
    };
    
    export default MyComponent;
    
3. Evitando recriação de callbacks em loops:
A memoização do useCallback garante que a função não seja recriada em cada iteração do loop.

import React, { useCallback, useState } from 'react';

const MyComponent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = useCallback(
    (item: string) => {
      setSelectedItem(item);
    },
    []
  );

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      {items.map((item) => (
        <div key={item} onClick={() => handleItemClick(item)}>
          {item}
        </div>
      ))}
      <p>Item selecionado: {selectedItem}</p>
    </div>
  );
};

export default MyComponent;




















*/

import React, { useState, useEffect } from 'react';

interface Data {
    userId: number;
    id: number;
    title: string,
    completed: boolean
}
const DataComponent: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando um atraso de 2 segundos
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/19');
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        console.log(data)
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return  <div><h1>Carregando dados da API...</h1></div>;
  }

  return (
    <div>
      {data ? (
       <div>
       <h1>Dados da API:</h1>
        <h2>{data.title}</h2>
        <h3>{data.id}</h3>
     </div>
      ) : (
        <div>Algo deu errado...</div>
      )}
    </div>
  );
};

export default DataComponent;

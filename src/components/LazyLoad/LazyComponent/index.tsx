import React from "react";

const LazyComponent: React.FC = () => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      alert("LazyComponent foi carregado");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>Mensagem do Lazy Component</h1>
    </div>
  );
};

export default LazyComponent;

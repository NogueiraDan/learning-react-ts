import { useState } from "react";
import "./progress.scss";

interface ProgressBarProps {
  valorObjetivo: number;
}

const ProgressBar = ({ valorObjetivo }:ProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const [totalArrecadado, setTotalArrecadado] = useState(0);
  const [objetivoAlcancado, setObjetivoAlcancado] = useState(false);
  const [doacao, setDoacao] = useState(0);

  const updateProgress = (value: number) => {
    const newProgress = Math.min(
      ((totalArrecadado + value) / valorObjetivo) * 100,
      100
    );
    setProgress(newProgress);
    setTotalArrecadado(totalArrecadado + value);
    if (totalArrecadado + value >= valorObjetivo) {
      setObjetivoAlcancado(true);
    }
  };

  const fazerDoacao = (valor: number) => {
    if (doacao < 0) return;
    updateProgress(valor);
    setDoacao(0);
  };

  const getColorClass = () => {
    if (progress < 50) {
      return "low-progress";
    } else if (progress < 80) {
      return "medium-progress";
    } else {
      return "high-progress";
    }
  };

  return (
    <div>
      <div className="progress-bar">
        <div
          className={`progress-fill ${getColorClass()}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>Progresso: {progress.toFixed(2)}%</p>
      <p>Objetivo: R${valorObjetivo}</p>
      <p>Total Arrecadado: R${totalArrecadado}</p>
      <br />
      {!objetivoAlcancado && (
        <p>
          Faltam R${valorObjetivo - totalArrecadado} para alcançar o objetivo
        </p>
      )}

      {objetivoAlcancado && (
        <p className="mensagem-objetivo">Parabéns, objetivo alcançado!</p>
      )}
      <label>Quanto você quer doar?</label>
      <br />
      <input
        type="number"
        placeholder="Digite o valor em $"
        value={doacao}
        onChange={(e) => setDoacao(parseInt(e.target.value))}
      />
      <button onClick={() => fazerDoacao(doacao)}>Doar</button>
    </div>
  );
};

export default ProgressBar;

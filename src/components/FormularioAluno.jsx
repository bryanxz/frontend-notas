import { useState } from "react";

export default function FormularioAluno({ onAlunoCadastrado }) {
  const [nome, setNome] = useState("");
  const [notas, setNotas] = useState("");
  const [frequencia, setFrequencia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome||  !notas|| !frequencia) return;

    const notasArray = notas
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    const aluno = {
      nome,
      notas: notasArray,
      frequencia: parseFloat(frequencia),
    };

    onAlunoCadastrado(aluno);
    setNome("");
    setNotas("");
    setFrequencia("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        placeholder="Notas (ex: 7, 8, 9, 6, 10)"
        value={notas}
        onChange={(e) => setNotas(e.target.value)}
      />
      <input
        placeholder="Frequência (%)"
        type="number"
        value={frequencia}
        onChange={(e) => setFrequencia(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
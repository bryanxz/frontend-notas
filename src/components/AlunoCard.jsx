const AlunoCard = ({ aluno }) => {
  if (!aluno) return null; // evita erro se aluno for null/undefined

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>{aluno.nome}</h3>
      <p>Notas: {aluno.notas?.join(", ")}</p>
      <p>Frequência: {aluno.frequencia}%</p>
    </div>
  );
};

export default AlunoCard;
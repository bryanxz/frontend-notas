const EstatisticasTurma = ({ medias = [], acimaDaMedia = [], frequenciaBaixa = [] }) => (
  <div>
    <h2>Média da turma por disciplina</h2>
    <p>{medias.length > 0 ? medias.join(", ") : "Nenhuma média disponível"}</p>

    <h3>Alunos acima da média</h3>
    {acimaDaMedia.length > 0 ? (
      <ul>
        {acimaDaMedia.map((nome, idx) => (
          <li key={idx}>{nome}</li>
        ))}
      </ul>
    ) : (
      <p>Nenhum aluno acima da média</p>
    )}

    <h3>Alunos com frequência baixa</h3>
    {frequenciaBaixa.length === 0 ? (
      <p>Nenhum aluno com frequência baixa</p>
    ) : (
      <ul>
        {frequenciaBaixa.map((nome, idx) => (
          <li key={idx}>{nome}</li>
        ))}
      </ul>
    )}
  </div>
);

export default EstatisticasTurma;

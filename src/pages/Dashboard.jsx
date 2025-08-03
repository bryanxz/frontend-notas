import { useEffect, useState } from "react";
import { getAlunos, postAluno, getEstatisticas } from "../services/api";

import FormularioAluno from "../components/FormularioAluno";
import EstatisticasTurma from "../components/EstatisticasTurma";
import AlunoCard from "../components/AlunoCard";

export default function Dashboard() {
  const [alunos, setAlunos] = useState([]);
  const [medias, setMedias] = useState([]);
  const [acimaDaMedia, setAcimaDaMedia] = useState([]);
  const [frequenciaBaixa, setFrequenciaBaixa] = useState([]);

  useEffect(() => {
    carregarAlunos();
    carregarEstatisticas();
  }, []);

  const carregarAlunos = async () => {
    try {
      const data = await getAlunos();
      setAlunos(data);
    } catch (error) {
      console.error("Erro ao carregar alunos", error);
    }
  };

  const carregarEstatisticas = async () => {
    try {
      const data = await getEstatisticas();
      if (!data) return;
      setMedias(data.mediaTurmaPorDisciplina || []);
      setAcimaDaMedia(data.alunosAcimaDaMedia || []);
      setFrequenciaBaixa(data.alunosComFrequenciaBaixa || []);
    } catch (error) {
      console.error("Erro ao carregar estatísticas", error);
    }
  };

  const handleCadastro = async (aluno) => {
    try {
      await postAluno(aluno);
      await carregarAlunos();
      await carregarEstatisticas();
    } catch (error) {
      console.error("Erro ao cadastrar aluno", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastro de Alunos</h1>

      <FormularioAluno onAlunoCadastrado={handleCadastro} />

      <h2>Alunos Cadastrados</h2>
      {alunos.length === 0 ? (
        <p>Nenhum aluno cadastrado</p>
      ) : (
        alunos.map((aluno, idx) => <AlunoCard key={idx} aluno={aluno} />)
      )}

      <h2>Estatísticas</h2>
      <EstatisticasTurma
        medias={medias}
        acimaDaMedia={acimaDaMedia}
        frequenciaBaixa={frequenciaBaixa}
      />
    </div>
  );
}

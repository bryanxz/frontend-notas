import { useState, useEffect } from "react";
import { getAlunos, getEstatisticas, postAluno } from "../services/api";
import FormularioAluno from "../components/FormularioAluno";
import AlunoCard from "../components/AlunoCard";
import EstatisticasTurma from "../components/EstatisticasTurma";

export default function Dashboard() {
  const [alunos, setAlunos] = useState([]);
  const [estatisticas, setEstatisticas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  // Carrega lista de alunos
  const carregarAlunos = async () => {
    try {
      const lista = await getAlunos();
      setAlunos(lista);
      return lista;
    } catch {
      setErro("Erro ao buscar alunos.");
      return [];
    }
  };

  // Carrega estatísticas somente se existir ao menos 1 aluno
  const carregarEstatisticasSePossivel = async (alunosList) => {
    if (alunosList.length === 0) {
      setEstatisticas(null);
      return;
    }

    try {
      const stats = await getEstatisticas();
      setEstatisticas(stats);
    } catch {
      setErro("Erro ao buscar estatísticas.");
      setEstatisticas(null);
    }
  };

  // Carrega dados iniciais
  const carregarDados = async () => {
    setLoading(true);
    setErro(null);
    try {
      const lista = await carregarAlunos();
      await carregarEstatisticasSePossivel(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  // Cadastro de aluno
  const cadastrarAluno = async (aluno) => {
    setLoading(true);
    setErro(null);
    try {
      await postAluno(aluno);
      await carregarDados();
    } catch {
      setErro("Erro ao cadastrar aluno.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Cadastro de Alunos</h1>
      <FormularioAluno onAlunoCadastrado={cadastrarAluno} />

      {loading && <p>Carregando...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {!loading && alunos.length === 0 && <p>Nenhum aluno cadastrado ainda.</p>}

      {alunos.length > 0 && (
        <>
          <h2>Alunos Cadastrados</h2>
          {alunos.map((aluno) => (
            <AlunoCard key={aluno.nome} aluno={aluno} />
          ))}
        </>
      )}

      {estatisticas && (
        <>
          <h2>Estatísticas</h2>
          <EstatisticasTurma estatisticas={estatisticas} />
        </>
      )}
    </div>
  );
}
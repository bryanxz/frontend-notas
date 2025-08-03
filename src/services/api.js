const BASE_URL = "http://localhost:8080/alunos";

export const postAluno = async (aluno) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(aluno),
  });
  if (!response.ok) throw new Error("Erro ao cadastrar aluno");
  return response.json();
};

export const getAlunos = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Erro ao buscar alunos");
  return response.json();
};

export const getEstatisticas = async () => {
  try {
    const response = await fetch(BASE_URL+"/estatisticas");
    if (response.status === 204) return null; // sem conteúdo
    if (!response.ok) throw new Error("Erro ao buscar estatísticas");
    return response.json();
  } catch {
    return null; // qualquer erro tratamos como sem dados
  }
};
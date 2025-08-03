import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/alunos', // todos os endpoints partem daqui
});

// POST /alunos
export const cadastrarAluno = (aluno) => API.post('', aluno);

// GET /alunos
export const listarAlunos = () => API.get('');

// GET /alunos/estatisticas
export const buscarEstatisticas = () => API.get('/estatisticas');
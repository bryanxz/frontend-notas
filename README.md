 🖥️ Frontend - Cadastro de Alunos

Este é o frontend da aplicação de cadastro de alunos e estatísticas, feito com React e Tailwind CSS.

 🛠️ Tecnologias Utilizadas

- React (com Vite)
- Tailwind CSS
- Axios (para requisições HTTP)

 ▶️ Como Executar

1. Navegue até o diretório `frontend`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. certifique se de instalar o plugin do vite

	npm install --save-dev @vitejs/plugin-react

5. Acesse `http://localhost:5173` no navegador.

🔧 Funcionalidades

- Cadastrar alunos com nome, notas e frequência.
- Visualizar lista de alunos cadastrados.
- Exibir:
  - Média de notas por aluno.
  - Frequência do aluno.
  - Média da turma por disciplina.
  - Lista de alunos acima da média.
  - Alunos com frequência abaixo de 75% (atenção especial).

 📌 Premissas

- Interface assume que os dados de backend estão disponíveis na porta 8080.
- A frequência é informada em percentual.
- O sistema espera exatamente 5 notas por aluno.

🧠 Decisões de Projeto

- O layout foi feito com Tailwind por produtividade.
- O componente `EstatisticasTurma` é responsável por apresentar os dados calculados.
- As requisições são feitas por meio do serviço `api.js`.

## ℹ️ Informações Adicionais

A aplicação é responsiva e foi construída com foco em simplicidade e funcionalidade.

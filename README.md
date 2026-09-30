### *RHSEARCH* M1S13 - Projeto Avaliativo Final ###

#### O site simula a compatibilidade entre um perfil de candidato e vagas de front-end júnior, analisa requisitos de vagas, compara habilidades, calcula aderência e identifica pontos de melhoria.

# Projeto SkillMatch Web
## 1. Estrutura inicial

#### index.html
#### README.md
#### assets/styles/index.style.css
#### assets/scripts/main.js, motor.js, ui.js, dados.js
#### assets/data/vagas.json
#### assets/img/logo.svg
#### HTML semântico (header, nav, main, section, footer)

## 2. Motor de compatibilidade (Grupo A)

#### Classe Vaga com atributos (empresa, cargo, requisitos, salário etc.) e método para calcular compatibilidade.
#### Classe VagaFrontEnd que herda de Vaga e adiciona algo extra (stack).
#### Métodos de array: map → gerar cards de vagas.
#### filter → listar habilidades faltantes.
#### reduce → encontrar a melhor vaga.
#### Callback e closure:
#### Callback: função passada para processar resultados.
#### Closure: contador de análises feitas na sessão.

## 3. Interface (Grupo B)

#### Formulário para perfil do candidato (nome, área, habilidades, tempo de experiência).
#### Captura do addEventListener, validado com preventDefault e mensagens de erro acessíveis.
#### Renderizar cards dinamicamente no DOM (empresa, cargo, % compatibilidade, classificação, habilidades encontradas/faltantes).
#### Layout responsivo com Flexbox e mobile-first.

## 4. Dados e persistência (Grupo C)

#### fetch("./assets/data/vagas.json") com async/await e tratamento dos 3 estados:
#### Carregando → “Carregando vagas…”
#### Vazio → “Nada encontrado”
#### Erro → “Falha ao carregar vagas”
#### localStorage para salvar perfil do candidato (JSON.stringify / JSON.parse), tratando null na primeira visita.

## 5. Organização e qualidade (Grupo D)

#### Separado em módulos ES:
#### motor.js → regras de compatibilidade.
#### ui.js → renderização da tela.
#### dados.js → fetch + localStorage.
#### main.js → orquestra tudo.
#### Versionamento no GitHub:
#### Branch develop + feature branches.
#### Commits descritivos: “implementa formulário”, “corrige cálculo compatibilidade”.

## 6. Documentação (README.md)

#### RHSEARCH.
#### Busca de compatibilidade de vagas.
#### Tecnologias usadas (HTML, CSS, JS puro).
#### Como executar (usar Live Server).
#### Melhorias futuras (ex.: tema escuro, filtros de vagas).
#### Link para Trello: https://trello.com/invite/b/6aaec5bd8bc7460ea13710a0/ATTI66015be5103bb8ca81ccdcba29250acf629793CC/front-end-react-t3-m1s13-projeto-avaliativo-final
#### Vídeo
#### GitHub: https://github.com/henriquekfilho/M1S13-ProjetoAvaliativoFinal_SCTEC.git.
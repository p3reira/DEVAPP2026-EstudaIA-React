# EstudaIA — Documentação

## 1. O que é a interface

Landing page do EstudaIA, uma plataforma de estudos com IA: mostra como o serviço funciona, seus recursos (com busca, filtro e ordenação) e um simulador de plano de estudos, para estudantes que precisam se organizar até a data de uma prova.

## 2. Como instalar e rodar

Execute os comandos nesta ordem:

```bash
git clone <url-do-repositório>
cd estudaia-react
npm install
npm run dev
```

Depois, abra no navegador: **http://localhost:5173**

## 3. Tecnologias

Saída de `npm list --depth=0`:

```
+-- @types/react-dom@19.3.0
+-- @types/react@19.3.0
+-- @vitejs/plugin-react@6.1.1
+-- oxlint@1.85.0
+-- react-dom@19.3.0
+-- react@19.3.0
`-- vite@8.3.0
```

Node: v24.19.0   npm: 11.17.0

| Pacote | Versão | O que faz |
|---|---|---|
| react | 19.3.0 | Biblioteca que monta a interface em componentes e controla o estado de cada um (`useState`, `useEffect`). |
| react-dom | 19.3.0 | Liga o React ao navegador, desenhando os componentes na página. |
| vite | 8.3.0 | Servidor de desenvolvimento (`npm run dev`) e ferramenta que gera a versão final do site. |
| @vitejs/plugin-react | 6.1.1 | Plugin que ensina o Vite a entender JSX e recarregar os componentes ao salvar. |
| @types/react | 19.3.0 | Veio do template do Vite; o projeto não usa TypeScript, só ajuda o editor no autocompletar. |
| @types/react-dom | 19.3.0 | Veio do template do Vite; o projeto não usa TypeScript, só ajuda o editor no autocompletar. |
| oxlint | 1.85.0 | Veio do template do Vite; é um verificador de código que aponta erros e más práticas. |

## 4. Estilo arquitetural declarado à IA

> "Estilo arquitetural: árvore de componentes, dados descendo por props em uma direção só. Nada de componente mexendo direto em outro."

Essa regra evitou que um componente alterasse a tela ou o estado de outro por conta própria, como o site antigo fazia com `document.getElementById` e `innerHTML`. Os dados saem do `App` (que lê o `dados.json`) e descem por props até as seções; quem precisa mudar algo recebe uma função do pai, como a `BarraFiltros`, que não guarda estado e só avisa o `Recursos`. Assim, sempre dá para saber de onde vem cada dado e quem pode alterá-lo.

## 5. Componentes

| Componente | O que faz | Usado mais de uma vez |
|---|---|---|
| App | Busca o `dados.json`, guarda em estado, avisa se falhar e passa os dados por props às seções. | |
| Cabecalho | Logo, menu com links para as seções e botão hambúrguer abaixo de 768px. | |
| Hero | Título, subtítulo e botões; mostra a mensagem de orientação para o simulador. | |
| ComoFunciona | Seção que recebe a lista de passos e renderiza um `Passo` para cada um. | |
| Passo | Mostra número, título e texto de um passo. | Sim |
| Recursos | Guarda busca, tipo e ordem; filtra, ordena e mostra os cartões ou "Nenhum recurso encontrado". | |
| BarraFiltros | Campo de busca e selects de tipo e ordem, controlados pelo `Recursos`. | |
| CartaoRecurso | Mostra ícone, tipo, título e descrição de um recurso. | Sim |
| Simulador | Formulário com validação que gera o plano de estudos simulado em 4 fases. | |
| ResultadoPlano | Mostra a matéria, os dias até a prova e as fases do plano. | |
| Beneficios | Seção que recebe a lista de benefícios e renderiza um `Beneficio` para cada um. | |
| Beneficio | Mostra título e texto de um benefício. | Sim |
| ChamadaFinal | Seção de contato com botão que leva ao simulador. | |
| Rodape | Nome, descrição curta e links para as seções. | |

## 6. Ambiente de desenvolvimento

- Sistema operacional: Windows
- Editor: VS Code
- Navegador: Google Chrome
- Node: v24.19.0

## 7. IA utilizada

- Claude (claude.ai), modelo Opus 5.5, usada em setembro de 2026.
- Revisão cruzada feita com o Gemini.

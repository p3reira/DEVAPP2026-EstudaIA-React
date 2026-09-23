# Insumos — EstudaIA em React

## 1. Ponto de partida

O projeto é a migração para React + Vite do site **EstudaIA**, feito na Aula 02 em HTML, CSS e JavaScript puros. Os arquivos da Aula 02 (`index.html`, `estilo.css` e `script.js`) foram entregues à IA como referência de conteúdo, estrutura e visual.

## 2. Dados (`public/dados.json`)

O arquivo tem três listas:

- `passos`: os 4 passos da seção "Como funciona". Campos: `numero`, `titulo` e `texto`.
- `recursos`: 10 recursos de estudo de 4 tipos (Plano, Resumo, Explicação e Exercício). Campos: `id`, `titulo`, `tipo`, `icone` e `descricao`.
- `beneficios`: os 4 benefícios da plataforma. Campos: `titulo` e `texto`.

**Origem dos dados:** os passos e os benefícios foram copiados do site da Aula 02, que é meu. Os recursos foram escritos com ajuda de IA a partir dos 4 cartões de recursos da Aula 02 e depois revisados por mim. São dados fictícios: nenhum deles veio de um site ou sistema real.

## 3. Referências visuais

As mesmas referências da Aula 02. Os prints estão na pasta `referencias/`.

| Site | Print | O que foi aproveitado |
|---|---|---|
| [Notion](https://www.notion.com/) | `referencias/notion.png` | organização em blocos e apresentação de recursos em cartões |
| [Linear](https://linear.app/) | `referencias/linear.png` | visual limpo, tipografia e espaçamento |
| [Discord](https://discord.com/) | `referencias/discord.png` | cores fortes e chamada para ação |

Os prints são capturas de tela feitas por mim e usadas só como referência de estudo. Nenhum texto, imagem ou cor foi copiado desses sites.

## 4. Paleta de cores

A mesma da Aula 02:

- Azul principal: `#2563EB`
- Azul escuro: `#1E3A8A`
- Roxo de destaque: `#7C3AED`
- Fundo claro: `#F8FAFC`
- Fundo secundário: `#EEF2FF`
- Texto principal: `#172033`
- Texto secundário: `#64748B`
- Branco: `#FFFFFF`

## 5. Fontes e ícones

- **Fraunces** (títulos) e **Inter** (textos), do Google Fonts, sob a licença SIL Open Font License.
- Os ícones são emojis do sistema (🗓️ 📄 💡 ✏️). Nenhuma imagem com direitos autorais foi usada.

## 6. Restrições dadas à IA

- Só React e Vite, em JavaScript. Nada de TypeScript, Tailwind, router, gerenciador de estado ou biblioteca de componentes.
- Estilo arquitetural: árvore de componentes, com os dados descendo por props em uma direção só. Um componente não mexe diretamente em outro.
- Um componente por arquivo, dentro de `src/componentes/`. O nome do arquivo deve ser igual ao do componente e começar com maiúscula.
- CSS em arquivo separado (`src/estilo.css`), aplicado com `className`. Nada de estilo dentro do JSX.
- Não inventar campo de dado que não esteja no `dados.json`.
- Não usar a biblioteca AOS nem outra biblioteca de efeitos. Se houver animação, ela deve ser feita só com CSS.
- Manter a paleta, as fontes e os textos da Aula 02.
- O plano de estudos continua simulado em JavaScript, sem API de IA, servidor, login ou banco de dados.
- Não copiar textos, cores ou imagens dos sites de referência.

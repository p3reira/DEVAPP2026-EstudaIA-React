# Requisitos — EstudaIA em React

Migração para React + Vite do site EstudaIA, feito na Aula 02.
Estes requisitos foram escritos **antes** de pedir qualquer código à IA.

## Requisitos funcionais

1. A página deve ter um cabeçalho com o nome "EstudaIA" e um menu com links para as seções: Como funciona, Recursos, Simulador, Benefícios e Contato.
2. Clicar em um link do menu deve levar até a seção correspondente na mesma página.
3. Em telas com menos de 768 px de largura, o menu deve ficar escondido atrás de um botão "hambúrguer". Clicar no botão abre o menu, e clicar em um link fecha o menu.
4. A seção inicial (hero) deve mostrar o título, um subtítulo e dois botões: "Criar meu plano de estudos" e "Ver como funciona".
5. Ao clicar em "Criar meu plano de estudos", deve aparecer abaixo dos botões uma mensagem orientando o usuário a ir até o simulador.
6. A seção "Como funciona" deve mostrar 4 passos numerados, cada um com número, título e texto.
7. A seção "Recursos" deve mostrar os recursos da plataforma em cartões lidos do arquivo `public/dados.json`. Cada cartão mostra ícone, título, tipo e descrição.
8. O `dados.json` deve ter pelo menos 8 recursos, de pelo menos 4 tipos: Plano, Resumo, Explicação e Exercício.
9. A seção "Recursos" deve ter um campo de busca. Ao digitar, só aparecem os cartões cujo título ou descrição contém o texto digitado, sem diferenciar maiúsculas de minúsculas.
10. A seção "Recursos" deve ter um filtro por tipo, com a opção "Todos" e uma opção para cada tipo. Ao escolher um tipo, só aparecem os cartões desse tipo.
11. A busca e o filtro devem funcionar juntos. Exemplo: tipo "Resumo" + busca "bio" mostra só os resumos que contêm "bio".
12. A seção "Recursos" deve ter uma opção de ordenação por título, de A a Z e de Z a A.
13. Quando nenhum cartão atender à busca e ao filtro, deve aparecer a mensagem "Nenhum recurso encontrado".
14. O simulador deve ter um campo "Matéria ou conteúdo", um campo "Data da prova" e um botão "Gerar plano".
15. Ao clicar em "Gerar plano" com a matéria vazia, deve aparecer a mensagem "Informe a matéria ou o conteúdo que você quer estudar."
16. Ao clicar em "Gerar plano" sem data, ou com a data de hoje ou uma data passada, deve aparecer uma mensagem de erro sobre a data.
17. Com os dois campos válidos, deve aparecer na própria página, sem recarregar, um plano simulado com: a matéria, quantos dias faltam até a prova e 4 fases (Revisão geral, Aprofundamento, Exercícios e Revisão final), cada uma com seu período em dias.
18. A seção "Benefícios" deve mostrar 4 benefícios, cada um com título e texto.
19. A página deve ter uma chamada final (Contato) com um botão que leva ao simulador.
20. O rodapé deve mostrar o nome do projeto, uma descrição curta e links para as seções.

## Requisitos não funcionais

1. A interface deve ser feita com React e Vite, em JavaScript. Nada de TypeScript.
2. Não deve usar Tailwind, router, gerenciador de estado nem biblioteca de componentes.
3. A interface deve subir com `npm install` seguido de `npm run dev`, sem nenhum erro vermelho no console do navegador.
4. Deve haver pelo menos 4 componentes próprios, um por arquivo, dentro de `src/componentes/`. O nome do arquivo deve ser igual ao do componente e começar com letra maiúscula.
5. Pelo menos um componente deve ser usado mais de uma vez com props diferentes. Exemplos: o cartão de recurso, o passo de "Como funciona" e o benefício.
6. Os dados devem descer por props, de pai para filho, em uma direção só. Um componente não mexe diretamente em outro.
7. O texto da busca, o filtro escolhido e a ordenação devem ser guardados em estado (`useState`) e mudar o que aparece na tela.
8. O CSS deve ficar em arquivo separado e ser aplicado com `className`. Nada de estilo escrito dentro do JSX.
9. `node_modules/` e `dist/` devem estar no `.gitignore` e não podem ir para o repositório.
10. A interface deve funcionar em tela estreita (360 px): sem rolagem horizontal, com os cartões em uma coluna e o texto legível sem zoom.
11. A paleta de cores da Aula 02 deve ser mantida: azul `#2563EB`, azul escuro `#1E3A8A`, roxo `#7C3AED`, fundos `#F8FAFC` e `#EEF2FF`, textos `#172033` e `#64748B`.
12. As fontes da Aula 02 devem ser mantidas: Fraunces para títulos e Inter para textos.
13. O plano de estudos deve continuar sendo apenas simulado em JavaScript, sem API de IA, servidor, login ou banco de dados.
14. Não pode haver campo de dado inventado. A interface só usa os campos que existem no `dados.json`.
15. Textos, cores e imagens não devem ser copiados dos sites de referência (Notion, Linear e Discord).

## Mudanças em relação à Aula 02

- **Recursos agora vêm do `dados.json` e têm busca, filtro e ordenação (RF 7 a 13).** Na Aula 02 eram 4 cartões fixos no HTML. A mudança foi feita para cumprir o requisito da A3 de ter um estado que muda a tela e um componente reaproveitado.
- **A biblioteca AOS foi retirada.** Os RF 10 e 11 da Aula 02 (biblioteca de efeitos e animações na rolagem) saíram porque as regras da A3 pedem só React e Vite, sem bibliotecas extras. Se houver animação, ela será feita só com CSS.
- **"Abrir o `index.html` direto no navegador" (RNF 2 da Aula 02) foi substituído por `npm run dev`** (RNF 3 acima), porque um projeto React com Vite precisa ser rodado pelo Vite.

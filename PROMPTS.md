# Prompts — EstudaIA em React

Registro do processo, com um trecho por etapa dos oito passos.

- IA usada nos passos 2, 5 e 6: **Claude (claude.ai)**, modelo Opus 5.5, setembro de 2026. Tudo foi feito em um único chat.
- IA da revisão cruzada (passo 7): Gemini
- Conversa completa (link público): https://claude.ai/share/aadd14c6-5bfd-44a8-993c-1bf947666dbc

Todos os pedidos seguiram as 5 partes vistas em aula: Contexto, Tarefa, Regras, Formato da resposta e Insumo. O bloco de regras abaixo foi repetido em todo pedido de código:

> - Só React e Vite, em JavaScript. Nada de TypeScript, Tailwind, router, gerenciador de estado ou biblioteca de componentes.
> - Estilo arquitetural: árvore de componentes, dados descendo por props em uma direção só. Nada de componente mexendo direto em outro.
> - Um componente por arquivo, dentro de src/componentes/, com o nome do arquivo igual ao do componente e começando com maiúscula.
> - CSS em arquivo separado, com className. Nada de estilo dentro do JSX.
> - Não invente campo de dado que eu não te dei.

---

## Passo 1: requisitos

Escrevi os requisitos antes de pedir qualquer código, partindo dos requisitos da Aula 02 e adaptando-os à A3 com ajuda de IA. Principais decisões:

- Os recursos passam a vir do `dados.json` e ganham busca, filtro e ordenação, para cumprir o requisito de estado e o de componente reaproveitado.
- A biblioteca AOS foi retirada, porque as regras da A3 pedem só React e Vite.

(ver `REQUISITOS.md`, seção "Mudanças em relação à Aula 02")

## Passo 2: componentes

Defini a árvore antes de pedir código: o App mais 13 componentes em `src/componentes/`. 3 deles são reaproveitados com props diferentes: Passo, CartaoRecurso e Beneficio. Pedi à IA só para conferir a árvore contra os requisitos, sem escrever código:

> Confira se a árvore de componentes abaixo atende a todos os requisitos. NÃO escreva código ainda. [...] Formato da resposta: Uma lista curta: para cada requisito que a árvore NÃO atende, diga qual e o que falta. Se atender a tudo, diga só "atende".

Resposta da IA: **"Atende."** Mantive a árvore sem mudanças.

## Passo 3: insumos

Juntei o `dados.json` (4 passos, 10 recursos de 4 tipos e 4 benefícios), os prints do Notion, do Linear e do Discord (pasta `referencias/`), a paleta e as fontes da Aula 02, e as restrições. Tudo está registrado no `INSUMOS.md`. Os arquivos antigos (`index.html`, `estilo.css` e `script.js` da Aula 02) foram anexados aos pedidos como insumo.

## Passo 4: projeto criado antes do primeiro prompt de código

```
npm create vite@latest estudaia-react -- --template react
cd estudaia-react
npm install
npm run dev
```

Resultado: a tela inicial do Vite + React (com o contador) apareceu em http://localhost:5173 em 23/09/2026. Tirei um print como registro. Só depois disso copiei o `dados.json` para `public/` e mandei o primeiro pedido de código.

## Passo 5: pedidos em pedaços

Pedi a interface em 4 pedaços e testei cada um no navegador, com o console aberto, antes de pedir o próximo. A partir do segundo pedaço, todo pedido começava com "Os pedaços anteriores funcionam. Não mude os componentes que já existem, exceto App.jsx".

### Pedaço 1: base, Cabecalho e Rodape
> Faça só a BASE deste pedaço: src/main.jsx importando src/estilo.css; src/App.jsx que busca /dados.json com fetch dentro de useEffect, guarda em estado, e por enquanto renderiza só <Cabecalho /> e <Rodape /> [...] Abaixo de 768px o menu some atrás de um botão hambúrguer; clicar abre, clicar num link fecha (use useState). [...] Não crie os outros componentes ainda.
> Insumo: estilo.css e index.html do site antigo (Aula 02), em anexo.

O que veio: `index.html`, `main.jsx`, `App.jsx`, `Cabecalho.jsx`, `Rodape.jsx`, `estilo.css` adaptado e a lista de arquivos do template para apagar (`App.css`, `index.css`, `assets/react.svg` e `public/vite.svg`). A IA explicou que o menu passou a ser controlado pelo estado `menuAberto`, em vez de mexer no DOM como no `script.js` antigo. Ela também mudou o ponto de quebra do hambúrguer de 720px para 767px, para cumprir o requisito dos 768px, e tirou tudo que era da biblioteca AOS.

O que conferi: o cabeçalho e o rodapé aparecem com as cores e as fontes da Aula 02, e o hambúrguer abre e fecha com a janela estreita. **O console mostrou um erro vermelho de favicon** (ver passo 6, Erro 1).

### Pedaço 2: seções fixas (Hero, ComoFunciona, Passo, Beneficios, Beneficio, ChamadaFinal)
> Crie as seções fixas, usando os textos e as classes do index.html antigo [...] Passo.jsx: recebe numero, titulo e texto por props. ComoFunciona.jsx: recebe a lista "passos" por props e renderiza um <Passo /> para cada item com .map e key. [...] Enquanto os dados não carregam, não quebre (nada de erro no console).

O que veio: os 6 componentes e o `App.jsx` atualizado, sem CSS novo, porque as classes já existiam. A IA explicou que, enquanto o `dados.json` não chega, ComoFunciona e Beneficios recebem listas vazias. Ela também transformou o primeiro botão do Hero em `<button>`, que só liga o estado da mensagem.

O que conferi: os 4 passos e os 4 benefícios aparecem (vindos do `dados.json`), a mensagem do hero aparece ao clicar em "Criar meu plano de estudos", a chamada final aparece e o console ficou sem erro vermelho.

### Pedaço 3: Recursos, BarraFiltros e CartaoRecurso
> Recursos.jsx: recebe a lista "recursos" por props e guarda em useState: busca, tipo e ordem. Mostra só os recursos cujo titulo ou descricao contém o texto da busca (sem diferenciar maiúsculas), do tipo escolhido, na ordem escolhida. [...] BarraFiltros.jsx: [...] Recebe os valores atuais e as funções de mudança por props; não guarda estado próprio.

O que veio: os 3 componentes, o `App.jsx` passando `dados.recursos` e o CSS novo dos filtros, da etiqueta de tipo e da mensagem de vazio. A IA explicou que a ordenação usa `localeCompare` em pt-BR sobre uma cópia da lista, sem mexer na prop. A BarraFiltros só recebe os valores e as funções do Recursos, e a grade reaproveita a classe `.cartoes` que já existia (4 → 2 → 1 coluna).

O que conferi:
- aparecem 10 cartões;
- com "bio" na busca sobram 2;
- com "bio" + tipo Resumo sobra 1;
- a ordem Z–A inverte a lista;
- com "xyz" aparece "Nenhum recurso encontrado";
- no modo celular os cartões ficam em uma coluna.

### Pedaço 4: Simulador e ResultadoPlano
> Migre o simulador do site antigo (a lógica está no script.js em anexo) [...] Guarda em useState: materia, data, erro e plano. Validações e mensagens iguais às do script antigo [...] Não use innerHTML nem document.getElementById.

O que veio: `Simulador.jsx`, `ResultadoPlano.jsx`, o `App.jsx` com a ordem final das seções e uma regra de CSS. A IA explicou três decisões:
- O foco e a rolagem usam `useRef` no lugar de `getElementById`.
- Ela trocou o `required` por `noValidate`, para aparecerem as mensagens do projeto em vez do balão do navegador.
- O plano anterior é apagado quando surge um erro.

O que conferi:
- com a matéria vazia, aparece o erro de matéria;
- sem data, aparece erro;
- com uma data passada, aparece "A data da prova precisa ser uma data futura.";
- com uma data futura, aparece o plano com as 4 fases;
- os botões "Gerar meu plano" do menu e da chamada final levam ao simulador;
- o console ficou sem erro vermelho.

## Passo 6: erros e consertos

### Erro 1
- O que aconteceu: depois do pedaço 1, a tela aparecia certa, mas o console (F12) mostrava um erro vermelho de favicon. Isso eliminaria a entrega.
- Mensagem de erro: `:5173/favicon.ico:1  Failed to load resource: the server responded with a status of 404 (Not Found)`
- Pedido de conserto (trecho):
  > Rodei npm run dev e abri o console (F12) -> aparece um erro vermelho de favicon -> o console deveria ficar sem nenhum erro vermelho. [...] Conserte só esse problema. Não mude src/main.jsx, src/App.jsx, src/estilo.css, src/componentes/Cabecalho.jsx nem src/componentes/Rodape.jsx. Não use imagem de terceiros.
- O que resolveu: segundo a IA, a causa foi que ela removeu o `<link rel="icon">` junto com o `vite.svg` do template, então o navegador pediu o `/favicon.ico` padrão, que não existe. Ela criou um ícone próprio em `public/favicon.svg` (um "E" nas cores da paleta) e colocou `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` no `index.html`. Recarreguei com Ctrl+Shift+R e o console ficou sem erro vermelho.

O que aprendi: a IA apagou um arquivo do template (`vite.svg`) sem avisar que outra coisa dependia dele. Só percebi porque abri o console depois do pedaço, e não só ao final.

## Passo 7: revisão cruzada

Feita no Gemini, numa conversa separada, sem acesso ao chat onde o código foi gerado. Na primeira tentativa, a revisora não recebeu todos os anexos e pediu os arquivos. Então juntei o `REQUISITOS.md` e todos os arquivos de `src/` em um único `revisao.txt` e reenviei. Trecho do pedido:
> Você vai revisar uma interface React que OUTRA PESSOA escreveu. [...] Confira requisito por requisito e diga, para cada um: cumprido, não cumprido, ou cumprido pela metade, apontando o arquivo e a linha. [...] Não reescreva a interface. Não elogie.

**Resultado:** 19 dos 20 requisitos funcionais e 14 dos 15 não funcionais foram marcados como cumpridos. Analisei cada apontamento:

| Apontamento da revisão | Minha análise | O que fiz |
|---|---|---|
| RF 8 não cumprido: `dados.json` não foi enviado | Falso alarme: o arquivo existe em `public/` com 10 recursos de 4 tipos, só não foi incluído no `revisao.txt` | Nada |
| RNF 9 pela metade: não dá para ver o `.gitignore` | O arquivo não foi enviado; conferi que o `.gitignore` do Vite já tem `node_modules` e `dist` | Conferi à mão |
| RNF 4: "11 componentes", mas listou 13 | Erro de contagem da revisora; são 13 arquivos em `src/componentes/` | Nada |
| Acentos quebrados ("PÃ¡gina", "Aâ€“Z") | No navegador os acentos aparecem certos, então o problema veio do comando que gerou o `revisao.txt` (leitura sem UTF-8), não dos arquivos | Nada |
| Comentários "acrescentar no fim" repetidos no CSS | Verdade, é só organização | Apaguei as linhas de comentário à mão |
| Nenhum aviso na tela se o `dados.json` falhar | Verdade; não estava nos requisitos, mas é uma melhoria útil | Pedi o conserto no chat original (abaixo) |

Pedido de conserto (no chat original):
> A página continua renderizando com seções vazias se o fetch de /dados.json falhar, sem avisar o usuário. [...] Conserte só isso: se o carregamento falhar, mostre uma mensagem curta dentro do `<main>` avisando que os dados não puderam ser carregados.

O que resolveu: O App voltou a guardar um estado erroDados, ligado no catch do fetch, e quando ele é verdadeiro aparece um aviso no topo do `<main>`, antes do Hero, com uma regra de CSS nova só para esse aviso. Testado e funcionando

O que aprendi: a revisão cruzada acertou em pontos reais (aviso de erro, CSS desorganizado), mas também errou quando lhe faltavam arquivos (RF 8, RNF 9) e na contagem de componentes. Por isso conferi cada apontamento antes de mudar qualquer coisa.

## Passo 8: conferência final

- `npm run dev` sobe: sim
- Console sem erro vermelho: sim
- Tela estreita (360 px) sem rolagem horizontal: sim
- Busca, filtro, ordenação e simulador testados: sim
- Teste de `git clone` em pasta nova + `npm install` + `npm run dev`: ainda não

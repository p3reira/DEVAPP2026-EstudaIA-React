// src/componentes/Recursos.jsx
import { useState } from 'react'
import BarraFiltros from './BarraFiltros.jsx'
import CartaoRecurso from './CartaoRecurso.jsx'

function Recursos({ recursos }) {
  const [busca, setBusca] = useState('')
  const [tipo, setTipo] = useState('Todos')
  const [ordem, setOrdem] = useState('az')

  const textoBusca = busca.trim().toLowerCase()

  const filtrados = recursos.filter((recurso) => {
    const combinaBusca =
      recurso.titulo.toLowerCase().includes(textoBusca) ||
      recurso.descricao.toLowerCase().includes(textoBusca)
    const combinaTipo = tipo === 'Todos' || recurso.tipo === tipo
    return combinaBusca && combinaTipo
  })

  const ordenados = [...filtrados].sort((a, b) => {
    const comparacao = a.titulo.localeCompare(b.titulo, 'pt-BR')
    return ordem === 'az' ? comparacao : -comparacao
  })

  return (
    <section className="secao recursos" id="recursos">
      <div className="container">
        <h2 className="secao__titulo">Tudo que você precisa para estudar melhor</h2>
        <p className="secao__subtitulo">
          Recursos pensados para quem precisa organizar o tempo e entender o conteúdo, não só decorar.
        </p>

        <BarraFiltros
          busca={busca}
          tipo={tipo}
          ordem={ordem}
          onBuscaChange={setBusca}
          onTipoChange={setTipo}
          onOrdemChange={setOrdem}
        />

        {ordenados.length === 0 ? (
          <p className="recursos__vazio">Nenhum recurso encontrado</p>
        ) : (
          <div className="cartoes">
            {ordenados.map((recurso) => (
              <CartaoRecurso
                key={recurso.id}
                icone={recurso.icone}
                titulo={recurso.titulo}
                tipo={recurso.tipo}
                descricao={recurso.descricao}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Recursos
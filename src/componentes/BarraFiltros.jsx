// src/componentes/BarraFiltros.jsx
const tipos = ['Todos', 'Plano', 'Resumo', 'Explicação', 'Exercício']

function BarraFiltros({ busca, tipo, ordem, onBuscaChange, onTipoChange, onOrdemChange }) {
  return (
    <div className="filtros">
      <div className="filtros__campo">
        <label htmlFor="filtroBusca">Buscar recurso</label>
        <input
          type="search"
          id="filtroBusca"
          placeholder="Ex.: resumo"
          value={busca}
          onChange={(evento) => onBuscaChange(evento.target.value)}
        />
      </div>

      <div className="filtros__campo">
        <label htmlFor="filtroTipo">Tipo</label>
        <select
          id="filtroTipo"
          value={tipo}
          onChange={(evento) => onTipoChange(evento.target.value)}
        >
          {tipos.map((opcao) => (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
      </div>

      <div className="filtros__campo">
        <label htmlFor="filtroOrdem">Ordem</label>
        <select
          id="filtroOrdem"
          value={ordem}
          onChange={(evento) => onOrdemChange(evento.target.value)}
        >
          <option value="az">Título A–Z</option>
          <option value="za">Título Z–A</option>
        </select>
      </div>
    </div>
  )
}

export default BarraFiltros
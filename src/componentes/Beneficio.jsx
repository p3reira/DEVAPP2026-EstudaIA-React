// src/componentes/Beneficio.jsx
function Beneficio({ titulo, texto }) {
  return (
    <div className="beneficio">
      <h3 className="beneficio__titulo">{titulo}</h3>
      <p className="beneficio__texto">{texto}</p>
    </div>
  )
}

export default Beneficio
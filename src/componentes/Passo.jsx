// src/componentes/Passo.jsx
function Passo({ numero, titulo, texto }) {
  return (
    <li className="passo">
      <span className="passo__numero">{numero}</span>
      <h3 className="passo__titulo">{titulo}</h3>
      <p className="passo__texto">{texto}</p>
    </li>
  )
}

export default Passo
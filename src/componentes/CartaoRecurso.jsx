// src/componentes/CartaoRecurso.jsx
function CartaoRecurso({ icone, titulo, tipo, descricao }) {
  return (
    <article className="cartao">
      <div className="cartao__icone" aria-hidden="true">{icone}</div>
      <span className="cartao__tipo">{tipo}</span>
      <h3 className="cartao__titulo">{titulo}</h3>
      <p className="cartao__texto">{descricao}</p>
    </article>
  )
}

export default CartaoRecurso
// src/componentes/ComoFunciona.jsx
import Passo from './Passo.jsx'

function ComoFunciona({ passos }) {
  return (
    <section className="secao como-funciona" id="como-funciona">
      <div className="container">
        <h2 className="secao__titulo">Como o EstudaIA funciona</h2>
        <p className="secao__subtitulo">
          Quatro passos simples entre a matéria que você precisa estudar e um plano pronto para seguir.
        </p>

        <ol className="passos">
          {passos.map((passo) => (
            <Passo
              key={passo.numero}
              numero={passo.numero}
              titulo={passo.titulo}
              texto={passo.texto}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ComoFunciona
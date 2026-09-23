// src/componentes/Beneficios.jsx
import Beneficio from './Beneficio.jsx'

function Beneficios({ beneficios }) {
  return (
    <section className="secao beneficios" id="beneficios">
      <div className="container">
        <h2 className="secao__titulo">Por que estudar com o EstudaIA</h2>

        <div className="beneficios__lista">
          {beneficios.map((beneficio) => (
            <Beneficio
              key={beneficio.titulo}
              titulo={beneficio.titulo}
              texto={beneficio.texto}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Beneficios
// src/componentes/ResultadoPlano.jsx
import { useEffect, useRef } from 'react'

function ResultadoPlano({ materia, diasRestantes, fases }) {
  const resultadoRef = useRef(null)

  // Leva o plano para a área visível sempre que um novo plano é gerado
  useEffect(() => {
    resultadoRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [fases])

  return (
    <div className="resultado-plano" aria-live="polite" ref={resultadoRef}>
      <h3>Plano simulado para "{materia}"</h3>
      <p className="secao__subtitulo">
        Faltam {diasRestantes} dia(s) até a prova. Sugestão de organização:
      </p>
      <ul>
        {fases.map((fase) => (
          <li key={fase.nome}>
            <strong>{fase.periodo} — {fase.nome}:</strong> {fase.foco}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultadoPlano
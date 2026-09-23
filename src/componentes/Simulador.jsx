// src/componentes/Simulador.jsx
import { useRef, useState } from 'react'
import ResultadoPlano from './ResultadoPlano.jsx'

/**
 * Monta um plano de estudos simulado, dividindo o tempo até a prova
 * em quatro fases. Apenas simulação em JavaScript, sem IA real.
 */
function gerarPlanoSimulado(materia, diasRestantes) {
  const fases = [
    { nome: 'Revisão geral', proporcao: 0.3, foco: `entender os tópicos principais de "${materia}"` },
    { nome: 'Aprofundamento', proporcao: 0.35, foco: `estudar os pontos mais difíceis de "${materia}"` },
    { nome: 'Exercícios', proporcao: 0.25, foco: `praticar exercícios de fixação sobre "${materia}"` },
    { nome: 'Revisão final', proporcao: 0.1, foco: `revisar anotações e resumos de "${materia}"` },
  ]

  let diasUsados = 0

  return fases.map((fase, indice) => {
    let duracao = Math.max(1, Math.round(diasRestantes * fase.proporcao))

    // Garante que a última fase termine exatamente no dia da prova
    if (indice === fases.length - 1) {
      duracao = Math.max(1, diasRestantes - diasUsados)
    }

    const inicio = diasUsados + 1
    const fim = diasUsados + duracao
    diasUsados += duracao

    return {
      nome: fase.nome,
      periodo: inicio === fim ? `Dia ${inicio}` : `Dias ${inicio} a ${fim}`,
      foco: fase.foco,
    }
  })
}

function calcularDiasRestantes(dataTexto) {
  const hoje = new Date()
  hoje.setHours(0, 0, 0, 0)

  const dataProva = new Date(`${dataTexto}T00:00:00`)
  return Math.round((dataProva - hoje) / (1000 * 60 * 60 * 24))
}

function Simulador() {
  const [materia, setMateria] = useState('')
  const [data, setData] = useState('')
  const [erro, setErro] = useState('')
  const [plano, setPlano] = useState(null)

  const campoMateriaRef = useRef(null)
  const campoDataRef = useRef(null)

  function mostrarErro(mensagem, campoRef) {
    setErro(mensagem)
    setPlano(null)
    campoRef.current.focus()
  }

  function gerarPlano(evento) {
    evento.preventDefault()
    setErro('')

    const materiaLimpa = materia.trim()

    if (!materiaLimpa) {
      mostrarErro('Informe a matéria ou o conteúdo que você quer estudar.', campoMateriaRef)
      return
    }

    if (!data) {
      mostrarErro('Informe a data da prova.', campoDataRef)
      return
    }

    const diasRestantes = calcularDiasRestantes(data)

    if (diasRestantes <= 0) {
      mostrarErro('A data da prova precisa ser uma data futura.', campoDataRef)
      return
    }

    setPlano({
      materia: materiaLimpa,
      diasRestantes,
      fases: gerarPlanoSimulado(materiaLimpa, diasRestantes),
    })
  }

  return (
    <section className="secao simulador" id="simulador">
      <div className="container simulador__inner">
        <div className="simulador__texto">
          <h2 className="secao__titulo">Monte um plano de estudos agora</h2>
          <p className="secao__subtitulo">
            Informe a matéria e a data da prova para ver um exemplo de plano gerado pelo EstudaIA.
          </p>
        </div>

        <form className="formulario" onSubmit={gerarPlano} noValidate>
          <div className="formulario__campo">
            <label htmlFor="materia">Matéria ou conteúdo</label>
            <input
              type="text"
              id="materia"
              name="materia"
              placeholder="Ex.: Funções do 2º grau"
              value={materia}
              onChange={(evento) => setMateria(evento.target.value)}
              ref={campoMateriaRef}
            />
          </div>

          <div className="formulario__campo">
            <label htmlFor="dataProva">Data da prova</label>
            <input
              type="date"
              id="dataProva"
              name="dataProva"
              value={data}
              onChange={(evento) => setData(evento.target.value)}
              ref={campoDataRef}
            />
          </div>

          <button type="submit" className="btn btn--primary formulario__botao">
            Gerar plano
          </button>

          <p className="formulario__erro" role="alert">{erro}</p>
        </form>

        {plano && (
          <ResultadoPlano
            materia={plano.materia}
            diasRestantes={plano.diasRestantes}
            fases={plano.fases}
          />
        )}
      </div>
    </section>
  )
}

export default Simulador
// src/App.jsx
import { useEffect, useState } from 'react'
import Cabecalho from './componentes/Cabecalho.jsx'
import Hero from './componentes/Hero.jsx'
import ComoFunciona from './componentes/ComoFunciona.jsx'
import Recursos from './componentes/Recursos.jsx'
import Simulador from './componentes/Simulador.jsx'
import Beneficios from './componentes/Beneficios.jsx'
import ChamadaFinal from './componentes/ChamadaFinal.jsx'
import Rodape from './componentes/Rodape.jsx'

function App() {
  const [dados, setDados] = useState(null)
  const [erroDados, setErroDados] = useState(false)

  useEffect(() => {
    let ativo = true

    fetch('/dados.json')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Falha ao carregar dados.json')
        }
        return resposta.json()
      })
      .then((json) => {
        if (ativo) setDados(json)
      })
      .catch(() => {
        if (ativo) setErroDados(true)
      })

    return () => {
      ativo = false
    }
  }, [])

  // Enquanto os dados não chegam (ou se falharem), as seções recebem listas vazias
  const passos = dados?.passos ?? []
  const recursos = dados?.recursos ?? []
  const beneficios = dados?.beneficios ?? []

  return (
    <>
      <Cabecalho />
      <main>
        {erroDados && (
          <div className="container">
            <p className="aviso-dados" role="alert">
              Não foi possível carregar os dados da página. Tente recarregar em instantes.
            </p>
          </div>
        )}
        <Hero />
        <ComoFunciona passos={passos} />
        <Recursos recursos={recursos} />
        <Simulador />
        <Beneficios beneficios={beneficios} />
        <ChamadaFinal />
      </main>
      <Rodape />
    </>
  )
}

export default App
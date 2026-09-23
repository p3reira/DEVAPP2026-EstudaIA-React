// src/componentes/Hero.jsx
import { useState } from 'react'

function Hero() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false)

  function mostrarOrientacao() {
    setMostrarMensagem(true)
  }

  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Estude com um plano feito para você, não para a turma toda.
          </h1>
          <p className="hero__subtitle">
            O EstudaIA organiza suas matérias, monta um cronograma até a data da prova
            e transforma qualquer conteúdo em resumos, explicações e exercícios.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={mostrarOrientacao}>
              Criar meu plano de estudos
            </button>
            <a href="#como-funciona" className="btn btn--secondary">
              Ver como funciona
            </a>
          </div>
          <p className="hero__confirmacao" role="status" aria-live="polite">
            {mostrarMensagem ? "Role a página até 'Simulador' e preencha os campos abaixo." : ''}
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--principal">
            <span className="hero__card-tag">Plano de hoje</span>
            <p className="hero__card-linha">09:00 · Revisão de Matemática</p>
            <p className="hero__card-linha">11:00 · Resumo de Biologia</p>
            <p className="hero__card-linha">15:00 · Exercícios de Redação</p>
          </div>
          <div className="hero__card hero__card--secundario">
            <span className="hero__card-tag">Faltam</span>
            <p className="hero__card-numero">12 dias</p>
            <p className="hero__card-linha">para a prova de Química</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
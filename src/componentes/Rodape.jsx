// src/componentes/Rodape.jsx
function Rodape() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__marca">
          <p className="footer__logo">EstudaIA</p>
          <p className="footer__descricao">
            Projeto acadêmico de demonstração de uma plataforma de estudos com IA.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Links do rodapé">
          <a href="#como-funciona">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#simulador">Simulador</a>
          <a href="#beneficios">Benefícios</a>
        </nav>
      </div>
    </footer>
  )
}

export default Rodape
// src/componentes/Cabecalho.jsx
import { useState } from 'react'

const links = [
  { href: '#como-funciona', texto: 'Como funciona' },
  { href: '#recursos', texto: 'Recursos' },
  { href: '#simulador', texto: 'Simulador' },
  { href: '#beneficios', texto: 'Benefícios' },
  { href: '#contato', texto: 'Contato' },
]

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="header" id="topo">
      <div className="container header__inner">
        <a href="#topo" className="logo" onClick={fecharMenu}>
          EstudaIA
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menuPrincipal"
          onClick={alternarMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={menuAberto ? 'nav nav--aberto' : 'nav'}
          id="menuPrincipal"
        >
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__link" onClick={fecharMenu}>
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
          <a href="#simulador" className="btn btn--primary nav__cta" onClick={fecharMenu}>
            Gerar meu plano
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav_bar'>
        <img className='nav_logo' 
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
        alt='logo'></img>

        <div className="nav_botoes">

          <button className="nav_botao">
            <span>Página Inicial</span>
          </button>

          <button className="nav_botao">
            <span>Pesquisar</span>
          </button>

          <button className="nav_botao">
            <span>Explorar</span>
          </button>

          <button className="nav_botao">
            <span>Reels</span>
          </button>

          <button className="nav_botao">
            <span>Mensagens</span>
          </button>

          <button className="nav_botao">
            <span>Notificações</span>
          </button>

          <button className="nav_botao">
            <span>Criar</span>
          </button>

          <button className="nav_botao">
            <span>Perfil</span>
          </button>

        </div>
      </div>
  )
}

export default NavBar
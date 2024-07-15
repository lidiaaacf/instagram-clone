import React from 'react'
import "./NavBar.css"

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavBar() {
  return (
    <div className='nav_bar'>
        <img className='nav_logo' 
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
        alt='logo'></img>

        <div className="nav_botoes">

          <button className="nav_botao">
            <HomeIcon />
            <span>Página Inicial</span>
          </button>

          <button className="nav_botao">
            <SearchIcon />
            <span>Pesquisar</span>
          </button>

          <button className="nav_botao">
            <ExploreIcon />
            <span>Explorar</span>
          </button>

          <button className="nav_botao">
            <SlideshowIcon />
            <span>Reels</span>
          </button>

          <button className="nav_botao">
            <ChatIcon />
            <span>Mensagens</span>
          </button>

          <button className="nav_botao">
            <FavoriteBorderIcon />
            <span>Notificações</span>
          </button>

          <button className="nav_botao">
            <AddCircleOutlineIcon />
            <span>Criar</span>
          </button>

          <button className="nav_botao">
            <AccountCircleIcon />
            <span>Perfil</span>
          </button>

        </div>
      </div>
  )
}

export default NavBar
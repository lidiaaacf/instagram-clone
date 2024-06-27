import React from 'react';
import './Publicacoes.css'

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Publicacoes({ usuario, foto, likes, tempo }) {
    return (
      <div className="pub">
        <div className="pub_header">
          <div className="pub_usuario">
            <Avatar style={{ marginRight: "10px" }}>
              {usuario.charAt(0).toUpperCase()}
            </Avatar>{" "}
            {usuario} • <span>{tempo}</span>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="foto">
          <img src={foto} alt="foto" />
        </div>
        <div className="pub_footer">
          <div className="pub_footerIcones">
            <div className="pub_iconsMain">
              <FavoriteBorderIcon className="pubIcon" />
              <ChatBubbleOutlineIcon className="pubIcon" />
              <TelegramIcon className="pubIcon" />
            </div>
            <div className="pubIcon_Salvar">
              <BookmarkBorderIcon className="pubIcon" />
            </div>
          </div>
          Liked by {likes} people.
        </div>
      </div>
    );
  }
  
  export default Publicacoes;
import React from 'react'
import "./Recomendados.css"
import { Avatar } from "@mui/material";

function Recomendados() {
  return (
  <div className="recomendados">
      <div className="recomendados_titulo">Recomendados para você</div>
      <div className="recomendados_usuarios">
        <div className="recomendados_usuario">
          <div className="usuario_esquerda">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="usuario_info">
              <span className="usuario">InfinitySchool</span>
              <span className="novo_insta">Novo no instagram</span>
            </div>
          </div>
          <button className="seguir_botao">Seguir</button>
        </div>

        <div className="recomendados_usuario">
          <div className="usuario_esquerda">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="usuario_info">
              <span className="usuario">InfinitySchool</span>
              <span className="novo_insta">Novo no instagram</span>
            </div>
          </div>
          <button className="seguir_botao">Seguir</button>
        </div>

        <div className="recomendados_usuario">
          <div className="usuario_esquerda">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="usuario_info">
              <span className="usuario">InfinitySchool</span>
              <span className="novo_insta">Novo no instagram</span>
            </div>
          </div>
          <button className="seguir_botao">Seguir</button>
        </div>

        <div className="recomendados_usuario">
          <div className="usuario_esquerda">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="usuario_info">
              <span className="usuario">InfinitySchool</span>
              <span className="novo_insta">Novo no instagram</span>
            </div>
          </div>
          <button className="seguir_botao">Seguir</button>
        </div>
      </div>
    </div>
  );
}

export default Recomendados
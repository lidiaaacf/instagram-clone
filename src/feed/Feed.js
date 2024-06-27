import React, { useState } from "react";
import Publicacoes from "./publicacoes/Publicacoes.js";
import Recomendados from "./Recomendados.js";
import Guitarra from "../assets/guitarra.jpeg"
import Dev from "../assets/amigosdevs.jpeg"
import Minecraft from "../assets/minecraft.png"
import Moto from "../assets/moto.jpg"
import Hacker from "../assets/hacker.jpg"
import "./Feed.css";

function Feed() {
  const [publicacoes, setPublicacoes] = useState([
    {
      usuario: "amigosdevs",
      foto:
        Dev,
      likes: 653,
      tempo: "2d",
    },
    {
      usuario: "lili_zuiker",
      foto:
        Minecraft,
      likes: 102,
      tempo: "1d",
    },
    {
      usuario: "rockmetalpunk",
      foto:
        Guitarra,
      likes: 282,
      tempo: "4d",
    },
    {
      usuario: "dougrandandan",
      foto:
        Moto,
      likes: 143,
      tempo: "1d",
    },
    {
      usuario: "hacker_biel_19",
      foto:
        Hacker,
      likes: 129,
      tempo: "3d",
    },
    
  ]);

  return (
    <div className="feed">
      <div className="feed_esquerda">
        <div className="feed_pubs">
          {publicacoes.map((post) => (
            <Publicacoes
              usuario={post.usuario}
              foto={post.foto}
              likes={post.likes}
              tempo={post.tempo}
            />
          ))}
        </div>
      </div>
      <div className="feed_direita">
        <Recomendados />
      </div>
    </div>
  );
}

export default Feed;
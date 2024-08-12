import React from 'react'
import './Cadastro.css';

function Cadastro() {
  return (
    <div className="container">
        <div className='cadastro'>
        <img className='logo' 
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
        alt='logo instagram'></img>
        <div className='texto'>
          <p>Cadastre-se para ver fotos <br></br>e vídeos de seus amigos!</p> 
        </div>
        <div className='formulario'>
            <form>
                <input type="text" className="numero_email" name="numero_email" placeholder='Celular ou Email' />
                <input type="text" className="nome_completo" name="nome_completo" placeholder='Nome completo' />
                <input type="text" className="nome_usuario" name="nome_usuario" placeholder='Nome de usuário'/>
                <input type="text" className="senha" name="senha" placeholder='Crie uma senha'/>
                <button type='Submit'>Cadastrar</button>
            </form>
        </div>
        </div>
        <div className='login'>
            <h5>Já possui uma conta? <a href='../login/Login.js'>Fazer Login</a></h5>
        </div>
    </div>
  )
}

export default Cadastro
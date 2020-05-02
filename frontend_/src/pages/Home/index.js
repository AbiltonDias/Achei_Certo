import React from 'react';
import { Link} from 'react-router-dom';

//import api from '../../services/api';
import './styles.css';
import acheiImg from '../../assets/Sem Fundo.png';
import acheiLogo from '../../assets/Logo_Achei.svg';

export default function Home(){
    
  return(
      <div className='home-container'>
          <section className="form">
              <img src={acheiLogo} alt="Logo Achei"/>
                <div className="logon-usuario" >
                    <h1>Procurar Seu Documento? </h1>
                    <p>Faça Seu Logon Aqui</p>
                    
                    <Link className='usuario-logon' to='/usuarios'>
                        <button className="button">
                            Ache!
                        </button>
                    </Link>
                    
                </div>
                <div className='logon-instituicao'>
                    <h1>Achou Documento? </h1>
                    <p>Faça Seu Logon Aqui</p>
                    
                    <Link className='instituicao-logon' to='/instituicao'>
                        <button className="button">
                            Contribua
                        </button>        
                    </Link>
                    
                </div>
              
          </section>
          <img src={acheiImg} alt="Imagem Achei"/>
      </div>
  )  
}
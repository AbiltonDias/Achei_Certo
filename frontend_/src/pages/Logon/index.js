import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import acheiImg from '../../assets/Sem Fundo.png';
import acheiLogo from '../../assets/Logo_Achei.svg';

export default function Logon(){
    const [ id, setId] = useState('');
    const history = useHistory();
    
    async function handleLogon(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions',{id});
            localStorage.setItem('OngId', id);
            localStorage.setItem('OngName',response.data.name);
            history.push('/profiles');

        }catch(error){
            alert('Falha no Login, tente novamente.')
        }
    }
        return(
            <div className="logon-container">
                <section className="form">
                    <img src={acheiLogo} alt="Logo_Achei" />
              
                    <form onSubmit={handleLogon}>
                      
                        <h1>Faça seu Logon</h1>
                        
                        <input 
                        placeholder='Sua ID'
                        value={id}
                        onChange={e=>setId(e.target.value)}
                        />
                        
                        <button className='button'
                        type="submit"> Entrar</button>
                        
                        <Link className='back-link' to='/register'>
                            <FiLogIn size={16} color="E02041" />
                            Não tenho cadastro
                        </Link>

                    </form>
                </section>

                <img src={acheiImg} alt='Imagem do Design do Achei' />
            </div>
        );
    
}
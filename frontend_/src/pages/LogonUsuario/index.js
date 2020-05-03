import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import acheiImg from '../../assets/UserLogon.png';
import acheiLogo from '../../assets/Logo_Achei.svg';

export default function LogonUsuario(){
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogonUsuario(e){
        e.preventDefault();

        try{
            const response = await api.get(`usuarios?email=${email}&&password=${password}`);
            localStorage.setItem('emailUsuario', email);
            localStorage.setItem('nameUsuario', response.data.name);
            history.push('/profile-usuario');
            
        }catch(error){
            alert('Falha no Login, tente novamente!');
        }
    }
    return(
        <div className='logon-usuario-container'>
            <section className='form'>
                <img src={acheiLogo} alt='Logo Achei'/>

                <form onSubmit={handleLogonUsuario}>
                    <h1> Faça o Seu Logon</h1>
                    
                    <input 
                        placeholder='Email'
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    

                    <input
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />

                    <button className='button' type="submit"> Entrar</button>
                    <Link className='back-link' to='/register-usuario'>
                        <FiLogIn size={16} color='#7D3AEA' />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={acheiImg} alt='Imagem do Achei' />
        </div>
    );

}
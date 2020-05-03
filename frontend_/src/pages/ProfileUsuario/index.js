import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower} from 'react-icons/fi';
import './styles.css';
import acheiLogo from '../../assets/Logo_Achei.svg';
import acheiImg from '../../assets/Sem Fundo.png';
import api from '../../services/api';

export default function ProfileUsuario(){
   // const idUser = localStorage.getItem('IdUsuario');
    const nameUser =  localStorage.getItem('nameUsuario');
    
    const history = useHistory();
    const [numberDoc, setNumberDoc] = useState();

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    async function handleDocuments(e){
        e.preventDefault();

        try{
            const response = await api.get(`documents/${numberDoc}`)
            localStorage.setItem('nuDoc', response.data.numberDoc);
            localStorage.setItem('nameUsuario',response.data.name);
            history.push('/detailsDocument');

        }catch(error){
            alert('Nenhum resultado encontrado');
        }
    }

    return(
        <div className='profile-container'>
            <header>
                <img src={acheiLogo} alt='Achei Logo' />
                <span> Bem-vindo, {nameUser}</span>
                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color='#7D3AEA'/>
                </button>
            </header>
            <div className='content'>
                <section className='form'>
                    <form onSubmit={handleDocuments}>
                        <h1> Procure pelo seu documento</h1>

                        <input
                            placeholder="Número do Documento"
                            value={numberDoc}
                            onChange={e=> setNumberDoc(e.target.value)}
                        />
                        <button className='button' type="submit"> Achar</button>
                    </form>
                </section>
                <img src={acheiImg} alt='Imagem do Achei' />
            </div>
        </div>
    )

    

}
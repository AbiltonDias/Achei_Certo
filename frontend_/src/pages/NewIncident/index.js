import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import acheiLogo from '../../assets/Logo_Achei.svg';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription ] = useState('');
    const [value,setValue] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('OngId');

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        }

        try{
            api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            alert('Criado com sucesso!');
            history.push('/profile');

        }catch(error){
            alert('Erro ao cadastrar, tente novamente')
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={acheiLogo} alt='Logo Achei'/>
                    <h1> Cadastrar novo caso</h1>
                    <p> Descreva o documento que encontrou detalhadamento para que a pessoa possa identificar seu documento, ajude colocando endereço de entrega e Ponto de referência.</p>
                    <Link className='back-link' to='/profiles'>
                        <FiArrowLeft size={16} color="#e021041"/>
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder='Título do caso'
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder='Descrição detalhada'
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    />
                    <input
                        placeholder='Valor da Sugerido para Recompensa'
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />
                    <button className='button' type='submit'> Cadastrar</button>
                </form>
            </div>

        </div>
    );
}
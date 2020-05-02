import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import acheiLogo from '../../assets/Logo_Achei.svg';
import api from '../../services/api';

export default function Profile(){
    const ongId = localStorage.getItem('OngId');
    const ongName = localStorage.getItem('OngName');
    const history = useHistory();
    //const [incidents, setIncidents] = useState([]);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        api.get('profiles', {
            headers:{
                Authorization: ongId,
            }
        }).then(response => {
            setDocuments(response.data);
        })
    }, [ongId])

    async function handleDeleteDocuments(id){
        try{
            await api.delete(`documents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
            });
            
            setDocuments(documents.filter(document => document.id !== id));

        }catch(error){
            alert('Erro ao deletar o caso, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className='profile-container'>
            <header>
                <img src={acheiLogo} alt='Logo Achei'/>
                <span> Bem vindo, {ongName}</span>

                <Link className="button" to='/incidents/new'> Cadastrar novo caso</Link>
                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color='#7D3AEA'/>
                </button>
            </header>
            
            <h1> Documentos Cadastrados </h1>
            
            <ul>
                {documents.map(document => (
                    <li key={document.id}>
                        
                        <strong> DOCUMENTO: </strong>
                        <p>{document.numberDoc}</p>

                        <strong>NOME DO DONO DO DOCUMENTO:</strong>
                        <p>{document.name}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{document.description}</p>

                        <button onClick={ () => handleDeleteDocuments(document.id)} 
                            type='button'>
                                <FiTrash2 size={20} color='#a8a8b3' />
                            </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
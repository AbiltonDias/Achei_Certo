import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import './styles.css';
import acheiLogo from '../../assets/Logo_Achei.svg';
import acheiImg from '../../assets/UserLogon.png';
import api from '../../services/api';

export default function DetailsDocuments(){
    const nameUser =  localStorage.getItem('nameUsuario');
    const numberDoc = localStorage.getItem('nuDoc');
    const history = useHistory();
    
    const [documents, setDocuments] = useState('');

    useEffect(() => {
        api.get(`documents/${numberDoc}`).then(response =>{
            setDocuments(response.data);
        })
    },numberDoc)

    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }

    return(
        <div className="details-container">
               <header>
                <img src={acheiLogo} alt='Logo Achei'/>
                <span> {nameUser}, veja: </span>

                <Link className="button" to='/profile-usuario'> Outro documento</Link>
                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color='#7D3AEA'/>
                </button>
            </header>
            <h1> Documento Encontrado </h1>
        <div className='content'>

            <ul>
            <li key={documents.id}>
                        
                        <strong> DOCUMENTO: </strong>
                        <p>{documents.numberDoc}</p>

                        <strong>NOME:</strong>
                        <p>{documents.name}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{documents.description}</p>

                        <strong>LOCAL ENCONTRADO:</strong>
                        <p>{documents.OngName}</p>

                        <strong>EMAIL:</strong>
                        <p>{documents.email}</p>

                        <strong>WHATSAPP/TELEFONE:</strong>
                        <p>{documents.whatsapp}</p>
                        <div className="group">
                            <strong>CIDADE:</strong>
                            <p>{documents.city}</p>

                            <strong style={{width:80}}>UF:</strong>
                            <p style={{width:80}}>{documents.uf}</p>
                        </div>

                        <button onClick={ () => {}} 
                            type='button'>
                                <FiCheckCircle size={20} color='#7D3AEA' />
                            </button>
                    </li>
            </ul>
            <img src={acheiImg} alt='Imagem Achei' />
            </div>
        </div>
    );
}
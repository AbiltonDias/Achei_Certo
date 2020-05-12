import React,{ useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import loading from '../uteis/Loading';
import './styles.css';
import acheiLogo from '../../assets/Logo_Achei.svg';
import api from '../../services/api';

export default function Register(){
    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ whatsapp, setWhatsapp] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try{
            const response = await api.post('ongs',data);
            //localStorage.setItem('idInstituicao', response.data.id);
            alert(`O Seu ID de acesso é: ${response.data.id}`);
            history.push('/profiles');

        }catch(error){
            alert('Erro no cadastro tente novamente');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={acheiLogo} alt='Logo Achei' />
                    <h1>Cadastro</h1>
                    <p> Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os documentos perdidos.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E021041" />
                        Não tenho cadastro
                    </Link>                
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da Instituição ou Empresa"
                        value={name}
                        onChange={e=> setName(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />    
                    <input
                        placeholder='WhatsApp ou Telefone'
                        value={whatsapp}
                        onChange={e=>setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder='Cidade'
                            value={city}
                            onChange={e=>setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{width:80}}
                            value={uf}
                            onChange={e=>setUf(e.target.value)}
                        />
                        
                    </div>
                    <button className='button' type='submit'> Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

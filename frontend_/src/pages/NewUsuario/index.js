import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import acheiLogo from '../../assets/Logo_Achei.svg';

export default function NewUsuario(){
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
     
    

    const history = useHistory();
    
    async function handleNewUsuario(e){
        e.preventDefault();
        const data = {
            name,
            email,
            password,
            whatsapp,
            city,
            uf
        }

        try{
            const response = api.post('usuarios',data);
           // localStorage.setItem('idUsuario',response.data.id)
            alert('Criado com Sucesso.');
            history.push('/profile-usuario');

        }catch(error){
            alert('Error ao cadastrar, tente novamente e verifique os dados estão corretos.');
        }
    }

    return(
        <div className='new-usuario-container'>
            <div className='content'>
                <section>
                    <img src={acheiLogo} alt='Logo Achei' />
                    <h1>Cadastro novo usuario</h1>
                    <p>Informe seus dados para logar no sistemas</p>

                    <Link className='back-link' to='/usuarios'>
                        <FiArrowLeft size={16} color='#7D3AEA'/>
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewUsuario}>
                    <input
                        placeholder='Nome Completo'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        placeholder='WhatsApp ou número incluindo DDD '
                        value={whatsapp}
                        onChange={e=> setWhatsapp(e.target.value)}
                    />
                    <div className='input-group'>
                        <input
                            placeholder='Cidade'
                            value={city}
                            onChange={e=> setCity(e.target.value)}
                        />
                        <input
                            placeholder='UF'
                            value={uf}
                            style={{width:'80'}}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className='button' type='submit'>
                        Cadastrar
                    </button>
                </form>
            </div>

        </div>
    );

}
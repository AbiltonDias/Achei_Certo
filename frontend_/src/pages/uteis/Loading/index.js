import React from 'react';
import {useHistory} from 'react-router-dom'
import acheiLogo from '../../../assets/Logo_Achei.svg'
import {FiFileText} from 'react-icons/fi'
//import './styles.css';


export default function Loading(){
    const idOng = localStorage.getItem('idInstituicao');
    const idUsuario = localStorage.getItem('idUsuario');
    const idDocuments = localStorage.getItem('idDocuments');
    const history = useHistory();

    function timeView(){
       
    //    setTimeout(function(){
    //     if(idOng !== undefined){
    //         history.push('/instituicao');
    //     }else if(idUsuario !== undefined){
    //         history.push('/profileUsuario');
    //     }else if(idDocuments !== undefined){
    //         history.push('/profileUsuario');
    //     }
    //    }, 3000)
    }

    return(
        <div onMouseMove={timeView}>
        <div className="container">
            <span></span>
            <div className="center">
                <div className="wrap">
                    <div className="box-1 box">
                            <FiFileText className='iconeFile'/>
                            <FiFileText className='iconeFile'/>
                    </div>
                    <div className="box-2 box">
                        <FiFileText className='iconeFile'/>
                        <FiFileText className='iconeFile'/>
                    </div>
                </div>
            </div>
        </div>

        
        <a href="/" 
            className="dr-url" 
            target="_blank">
                <img className="dr" src={acheiLogo} 
                    alt="Procurando Documento" 
                />

        </a>
        </div>
    );
}
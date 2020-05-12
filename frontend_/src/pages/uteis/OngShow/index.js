import React from 'react';
//import {useHistory} from 'react-router-dom'
import acheiLogo from '../../../assets/Logo_Achei.svg'
//import {FiFileText} from 'react-icons/fi'
//import './styles.css';


export default function Loading(){
    const idOng = localStorage.getItem('idInstituicao');
    

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
            

            
            <img className="twitter" href={acheiLogo} />
        </div>
    );
}
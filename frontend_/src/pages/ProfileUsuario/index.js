// import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { FiPower, FiTrash2 } from 'react-icons/fi';
// import './styles.css';
// import acheiLogo from '../../assets/Logo_Achei.svg';
// import acheiImg from '../../assets/Sem Fundo.png';
// import api from '../../services/api';

// export default function ProfileUsuario(){
//     const idUser = localStorage.getItem('IdUsuario');
//     const nameUser =  localStorage.getItem('nameUsuario');
//     const history = useHistory();
//     const [documents, setDocuments] = useState([]);

//     useEffect(() => {
//         api.get('profiles', {
//             headers:{
//                 Authorization: ongId,
//             }
//         }).then(response=> {setDocuments(response.data)});
//     })

// }
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import api from '../../services/api';

import acheiLogo from '../../assests/logo.png';
import styles from './styles.js';

export default function Documents(){
    const navigation = useNavigation();
    const [ documents, setDocuments ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ page, setPage] = useState(1);
    const [ loading, setLoading ] = useState(false);

    function navigateToDetail(document){
        navigation.navigate('Details', { document});
    }

    async function loadDocuments(){
        if(loading) return;

        if(total > 0 && documents.length === total) return;

        setLoading(true);
       
        try{
            const response = await api.get('documents', {
                params: {page}
            });
            
            setDocuments([...documents,...response.data]);
            setTotal(response.headers['x-total-count']);
            setPage(page + 1);
            setLoading(false);
        }catch(erro){
            console.log(erro);
        }

        
    }

    useEffect(() => {
        loadDocuments()
    }, []);

    return(
        <View style={styles.container}>
            <View style={ styles.header}>
                <Image source={acheiLogo}/>
                <Text style={styles.headerText}>
                    Total de <Text style={ styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}> Bem-vindo! </Text>
            <Text style={styles.description}> Documentos encontrados </Text>

            <FlatList
                data={documents}
                style={styles.documentsList}
                keyExtractor={ documents => String(documents.id)}
                onEndReacher={loadDocuments}
                onEndReachedThreshold={0.2}
                //showVerticalScrollIndicator={false}
                renderItem={({item:document}) => (
                    <View style={styles.documents} > 
                        <Text style={ styles.documentProperty} > Instituicao</Text>
                        <Text style={ styles.documentValue}> {document.ongName}</Text>
                        <Text style={ styles.documentProperty} > Descrição </Text>
                        <Text style={ styles.documentValue}> {document.description}</Text>
                        <Text style={ styles.documentProperty} > Número do Documento </Text>
                        <Text style={ styles.documentValue} > {document.numberDoc}</Text>
                        <Text style={styles.documentProperty}> Nome </Text>
                        <Text style={styles.documentValue}>{document.name}</Text>
                        <Text style={ styles.documentProperty}>Email </Text>
                        <Text style={styles.documentValue}>{document.email}</Text>
                        <Text style={ styles.documentProperty}>WhatsApp/Telefone</Text>
                        <Text style={styles.documentValue}>{document.whatsapp}</Text>
                        <Text style={ styles.documentProperty}>Cidade</Text>
                        <Text style={styles.documentValue}>{document.city}</Text>
                        <Text style={ styles.documentProperty}>UF</Text>
                        <Text style={styles.documentValue}>{document.uf}</Text>
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={()=> navigateToDetail(document)}
                        >
                            <Text style={styles.detailsButtonText}> Novo Documento </Text>
                            <Feather name="arrow-right" size={16} color='#7D3AEA'/>
                        </TouchableOpacity>


                    </View>

                )}
            />
        </View>
    );
}

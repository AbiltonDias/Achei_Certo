import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoAchei from '../../assests/logo.png';
import styles from './styles';

export default function Details(){
    const navigation = useNavigation();
    const route = useRoute();

    const document = route.params.document;
    const message = `Olá Sr./Sra da ${document.ongName}, estou entrado em contato, pois sou dono do documento e gostaria de pega-lo.`;

    function navigationBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Regate do documento: ${document.numberDoc}`,
            recipients: [document.email],
            body: message,
        })
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${document.whatsapp}&&text=${message}`);
    }

    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoAchei}/>
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name='arrow-left' size={28} color='#7D3AEA'/>
                </TouchableOpacity>
            </View>
            
            <View style={styles.document}>
                <Text style={[styles.documentProperty, {marginTop:0}]}> Local Encontrado</Text>
                <Text style={styles.documentValue}>{document.ongName} de {document.city} /{document.uf}</Text>
                <Text style={styles.documentProperty}>Número do Documento </Text>
                <Text style={styles.documentValue}>{document.numberDoc}</Text>
                <Text style={styles.documentProperty}>Nome Completo</Text>
                <Text style={styles.documentValue}>{document.name}</Text>
                <Text style={styles.documentProperty}>Telefone para contato</Text>
                <Text style={styles.documentValue}>{document.whatsapp}</Text>
            </View>

            <View style={styles.contactBox} >
                <Text style={styles.acheiTitle}>
                    Ache!
                </Text>
                <Text style={styles.acheiTitle}>
                    Converse com a pessoa que encontrou e busque seu documento.
                </Text>
                <Text style={styles.acheiDescription}> Entre em contato: </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );

}
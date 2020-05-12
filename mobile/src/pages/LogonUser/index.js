import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Input, Button} from 'react-native';

import logoAchei from '../../../assets/logoAchei.png';
import styles from './styles';
import api from '../../services/api';

export default function LogonUser(){
    const navigation = useNavigation();
    const [user, setUser] = useState();
    

    function navigateToDetails(user){
        navigation.navigate('DetailsUser', { user });
    }

    async function logonUser(){
        const email = user.email;
        const password = user.password;
        if(email===undefined || email === '') return;
        if(password ===undefined || password === ' ') return;

        try{
            const response = await api.get(`usuarios?email=${email}&&password=${password}`);
            //navigateToDetails(response);
        }catch(error){
            console.log(error);
        }
    }

    return(
        <View style={styles.container}>
            <Image source={logoAchei} />

            <View style={ styles.logon}>
                <Text style={styles.title}>
                    Email
                </Text>
                <Input 
                    placeholder='Email email@email.com'
                    leftIcon={
                        <Feather 
                            name="mail"
                            size={16}
                            color='#7D3AEA'
                        />
                    }
                    onChangeText={e => this.setUser({email: e.target.value})}
                />
                 <Text style={styles.title}>
                    Password
                </Text>
                <Input 
                    placeholder='Senha de acesso'
                    leftIcon={
                        <Feather 
                            name='lock'
                            size={16}
                            color='#7D3AEA'
                        />
                    }
                    onChangeText={e => this.setUser({password: e.target.value})}
                
                />

                <TouchableOpacity onPress={logonUser}>
                    <Button
                        icon={{
                            name:'Entrar',
                            size:80
                        }}
                        title="Entrar"
                    >

                    </Button>
                </TouchableOpacity>
            </View>
        </View>
    )
}
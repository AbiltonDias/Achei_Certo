import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Button, Icon} from 'react-native';

import logoAchei from '../../../assets/logoAchei.png';
import styles from './styles.js';


export default function Home(){
    const navigation = useNavigation();

    function navigateToLogonUser(){
        navigation.navigate('LogonUser');
    }
    function navigateToLogonOng(){
        navigation.navigate('LogonOng');
    }

    return (
        <View style={styles.container}>
            <Image source={logoAchei} />
            <View style={styles.logon}>
                <View style={styles.logonUser}>
                    <Text style={styles.title}>
                        Você perdeu algum documento?
                    </Text>
                    <Button  
                        icon={{
                            name:'acheiUsuario',
                            size:80,
                        }}
                        title="Ache!"
                        onPress={() => navigateToLogonUser()}
                        >
                    </Button>
                </View>
                <View style={styles.logonOng}>
                    <Text style={styles.title}>
                        Você achou algum documento?
                    </Text>
                    <TouchableOpacity onPress={navigateToLogonOng}>
                        <Button
                            icon={{
                                name:'acheiOng',
                                size:80,
                                color:"black"
                            }}
                            title="Contribua"
                        >

                        </Button>
                    </TouchableOpacity>
                </View>    
            </View>

        </View>
    )
}
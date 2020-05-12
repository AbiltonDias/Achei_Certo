import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#7D3AEA', 
        flex: 1,
        paddingHorizontal:20,
        paddingTop: Constants.statusBarHeight + 20,
    },
    logon:{
        alignItems: 'center',
    },
    
    logonUser:{
        paddingTop: 30,
        marginTop:50,
        
    },

    logonOng:{
        paddingTop: 30, 
        marginTop: 50,  
    },
    title:{
        paddingBottom: 20,
        fontSize:25,
        fontWeight: 'bold',
        lineHeight: 30,
        color: '#fff',
    }
})
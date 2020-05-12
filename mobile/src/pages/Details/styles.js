import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    document:{
        padding: 24,
        borderRadius: 8,
        backgroundColor:"#fff",
        marginBottom:16,
        marginTop: 48,
    },
    documentProperty:{
        fontSize:14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },
    documentValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },
    contactBox:{
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },
    acheiTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30,
        color:'#13131a',
    },
    acheiDescription:{
        fontSize: 15,
        marginTop: 16,
        color:'#737380',
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    action:{
        backgroundColor: '#7D3AEA',
        borderRadius: 8,
        height: 50,
        width: '48%',
        alignItems: 'center',
        justifyContent:'center',
    },
    actionText:{
        color:'#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
});
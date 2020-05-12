import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 15,
        color:'#737380',
    },
    headerTextBold:{
        fontWeight: 'bold',
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight:'bold',
    },
    description:{
        fontSize:16,
        lineHeight:24,
        color:'#737380',
    },
    documentsList:{
        marginTop:32,
    },
    documents:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16,
    },
    documentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
    },
    documentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380',
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    detailsButtonText:{
        color:'#7D3AEA',
        fontSize:15,
        fontWeight: 'bold',
    }
});
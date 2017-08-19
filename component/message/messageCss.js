import {
    StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    wrapper: {
        height: 200
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },
    outLogin: {
        height: 30,
        justifyContent: 'center',
        fontSize: 15,
        top: 7
    },
    tips: {
        fontSize: 10,
        width: 64,
        alignItems: 'center',
        top: 5
    },
    modelView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    modelButtonone: {
        justifyContent: 'flex-start',
        flex: 1
    }
});

export const nativeStyle = {
    container: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
    },
    listItem: {
        borderTopColor: '#dcdcdc',
        height: 78
    },
    button: {
        borderColor: '#608fd3',
        justifyContent: 'center',
        top: 5,
        width:80
    },
    select:{
        flex:1,
        borderColor:"#979797",
        borderWidth:1,
        borderStyle:'solid',
        height:48,
    },
    textStyle:{
        fontSize:18,
        color:"#124266",
        lineHeight:40,
        textAlign:'center',
    },
    noBorederRight:{
        flex:1,
        borderColor:"#979797",
        borderWidth:1,
        borderStyle:'solid',
        height:48,
        borderRightWidth:0
    },
    dropdownStyle:{
        left:0,
        width:'50%'
    }
};
export default styles;
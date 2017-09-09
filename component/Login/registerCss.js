import {
    StyleSheet,
} from 'react-native';

export const styles = {
    content: {
        paddingLeft: 48,
        paddingRight: 48,
        backgroundColor: 'red',
        top:0,
        bottom:0,
        paddingTop: 89,
    },
    form: {
        // top:89,
        // height:300,
        flex: 1,
    },
    viewContainer: {

    },
    textInput: {
        top: 30,
        height: 48,
    },
    vertificationCodeButton: {
        backgroundColor: '#FFA200',
        borderRadius: 8,
        width: 100,
        height: 35,
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 7,
    },
    vertificationCodeText: {
        fontSize: 14,
        width: 100,
        backgroundColor: null,
        textAlign: 'center',
    },
    registerButton: {
        justifyContent: 'center',
        backgroundColor: '#FFA200',
        height: 55,
        width: 290,
    },
    registerText: {
        flex: 1,
        width: 100,
        fontSize: 20,
        backgroundColor: null,
        textAlign: 'center',
    },
    agreeButton: {
        padding:0,
        margin:0,
        width:50,
        height: 50,
        // backgroundColor:null
    },
    agreeText: {
        width: 100,
        height: 50,
        color: '#FFA200',
    },
    agreeBaseText: {
        width:'100%',        
        textAlign: 'center',
        fontSize: 14,
    }
};
export default stylesContainer = StyleSheet.create({
    container:{
        paddingTop: 89,
        flex:1,
        paddingLeft: 48,
        paddingRight: 48,
    },
    registerView: {
        flex:2,
        // height:260,
        // flex:2,
    },
    agreeView: {
        bottom:10,
        width:'133%',
        // flex:1,
        position :'absolute',
    }
});
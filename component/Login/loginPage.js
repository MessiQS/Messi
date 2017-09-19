import React, { Component } from 'react';
import {
    Image,
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Label, Text } from 'native-base';


class LoginPage extends React.Component {

    constructor(...props) {
        super();
        this.state = this.state || {};
    }
    static navigationOptions = ({ navigation }) => ({
        title: '登录',
        headerStyle: {
            backgroundColor: '#051425',
            opacity: 0.9,
        },
        headerTintColor: 'white',
    });
    
    render() {
        return (
            <View style={styles.container}>
                <Form style={styles.form}>
                    <Item style={styles.item}>
                        <Icon active name='home' />
                        <Input placeholder="请输入您的电话号码" style={{placeholderColor:'#051425'}} onChangeText={phone => this.phoneChange(phone)}></Input>
                    </Item>
                    <Item style={styles.item}>
                        <Icon active name='home' />
                            <Input placeholder="请输入您的密码" onChangeText={passpord => this.passwordtChange(passpord)}></Input>
                      </Item>
                </Form>
                <View style={styles.forgotButtonView}>
                    <Button style={styles.forgotButton}>
                        <Label style={styles.forgotLabel}>忘记密码</Label>
                    </Button>
                </View>
                <View style={styles.loginButtonView}>
                    <Button block style={styles.loginButton}>
                        <Text style={styles.loginLabel}>登录</Text>
                    </Button>
                </View>
                <View style={styles.agreeView}>
                    <Label style={styles.agreeBaseText}>注册即表示同意本
                    <Label style={styles.agreeButton} >软件协议</Label>
                    </Label>
                </View>
            </View>
        );
    }
}

var styles = {

    container:{
        paddingTop: 89,
        flex:1,
        paddingLeft: 48,
        paddingRight: 48,
    },
    form: {
        flex: 2,
    },
    item: {
        marginTop:20,
        marginBottom:20,
    },
    forgotButtonView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1,
    },
    forgotButton:{
        height:20,
        backgroundColor:null,
    },
    forgotLabel:{
        color:'#9B9B9B',
        fontSize:12,
        textDecorationLine: 'underline',
    },
    loginButtonView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    },
    loginButton: {
        backgroundColor:'#FFA200',
        height:60,
        width:327,
        padding:0,
    },
    loginLabel:{
        color:'white',
        textAlign:'center',
        fontSize:20,
    },
    agreeView: {
        bottom: 10,
        width: '133%',
        // flex:1,
        position: 'absolute',
    },
    agreeText: {
        width: 100,
        height: 50,
        color: '#FFA200',
    },
    agreeBaseText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 14,
    },
    agreeButton: {
        fontSize: 14,
        color: "#ffa200"
    }
};

export default LoginPage;
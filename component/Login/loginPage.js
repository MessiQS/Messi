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
import { Button, Container, Content, List, ListItem, Right, Left, Body, Switch, Form, Item, Input, Label, Text } from 'native-base';
import Http from '../../service/http';
import MD5 from 'crypto-js/md5';
import Icon from 'react-native-vector-icons/Ionicons';


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
    phoneChange(account) {
        this.setState({
            account: account
        })
    }
    passwordtChange(password) {
        this.setState({
            password: password
        })
    }
    login() {
        let { account, password } = this.state;
        if(!account){
            console.log('请输入账号');
            return;
        };
        if(!password){
            console.log('请输入密码');
            return;
        }
        password = MD5(password).toString();
        Http.post('api/login',{
            "account":account,
            "password":password
        }).then( res => console.log(res))
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Item style={styles.item}>
                    <Icon name="ios-phone-portrait-outline"
                      size={23}
                      style={styles.icon}
                />
                    <Input placeholder="请输入您的电话号码" onChangeText={account => this.phoneChange(account)}></Input>
                </Item>
                <Item style={styles.item}>
                    <Icon name="ios-lock-outline"
                        size={23}
                        style={styles.icon}
                    />
                    <Input placeholder="请输入您的密码" onChangeText={password => this.passwordtChange(password)}></Input>
                </Item>
                <View style={styles.forgotButtonView}>
                    <Button style={styles.forgotButton} onPress={() =>
                        navigate('ForgotPasswordStepOnePage', { name: 'ForgotPasswordStepOnePage' })
                    }>
                        <Label style={styles.forgotLabel}>忘记密码</Label>
                    </Button>
                </View>
                <View style={styles.loginButtonView} >
                    <Button block style={styles.loginButton} onPress={this.login.bind(this)}>
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

    container: {
        paddingTop: 69,
        flex: 1,
        paddingHorizontal: 48,
    },
    form: {
        flex: 2,
    },
    item: {
        marginTop: 20,
        marginBottom: 20,
    },
    icon: {
        marginRight: 5,
        marginLeft: 10,
        opacity: 0.7,
    },
    forgotButtonView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1,
    },
    forgotButton: {
        height: 20,
        backgroundColor: null,
    },
    forgotLabel: {
        color: '#9B9B9B',
        fontSize: 12,
        textDecorationLine: 'underline',
    },
    loginButtonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    },
    loginButton: {
        backgroundColor: '#FFA200',
        height: 60,
        width: 327,
        padding: 0,
    },
    loginLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    agreeView: {
        bottom: 10,
        width: '133%',
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
import React, { Component } from 'react';
import {
    Alert,
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
import AccountCheck from '../../service/accountCheck';
import Storage from '../../service/storage';


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
        const { navigate } = this.props.navigation;
        if (!account) {
            Alert.alert('请输入账号');
            return;
        } else if (!password) {
            Alert.alert('请输入密码');
            return;
        };
        if (!AccountCheck.isValidPhoneNumber(account)) {
            Alert.alert('账号格式错误', '请输入11位手机号码');
            return;
        }
        if (!AccountCheck.isValidPassword(password)) {
            Alert.alert('密码格式错误', '请输入6-20位密码，不包含特殊字符');
            return;
        };
        password = MD5(password).toString();
        Http.post('api/login', {
            "account": account,
            "password": password
        }).then(({ type, data, token }) => {
            if (type) {
                //将账号和token存到本地存储
                let setToken = Storage.multiSet([
                                                ['accountToken',token],
                                                ['account',account]
                                            ]);
                setToken.then( res => {
                    navigate('MyTab',{})
                },err => {
                    Alert('登录错误，请重试')
                })
            } else {
                //此处提示错误信息
                Alert.alert(data);
            }
        })
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Item style={styles.item}>
                    <View style={styles.iconViewStyle}>
                        <Icon name="ios-phone-portrait-outline"
                            style={styles.icon}
                        />
                    </View>
                    <Input placeholder="请输入您的电话号码" onChangeText={account => this.phoneChange(account)}></Input>
                </Item>
                <Item style={styles.item}>
                    <View style={styles.iconViewStyle}>
                        <Icon name="ios-lock-outline"
                            style={styles.icon}
                        />
                    </View>
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
    iconViewStyle: {
        marginRight: 5,
        marginLeft: 10,
        width: 23,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 23,
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
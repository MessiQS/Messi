import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Image,
    View,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';
import Http from '../../service/http';
import accountCheck from '../../service/accountCheck';
import MD5 from 'crypto-js/md5';

export default class ForgotPasswordStepThreePage extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: '忘记密码',
        headerStyle: {
            backgroundColor: '#051425',
            opacity: 0.9,
        },
        headerTintColor: 'white',
    });

    initPassowrd(password) {
        this.password = password;
    };

    checkPassowrd(password) {
        this.repeatPassword = password;
    };

    updatePassword() {
        if (this.repeatPassword !== this.password) {
            Alert.alert('两次输入不一致');
            return;
        }
        if (!accountCheck.isValidPassword) {
            Alert.alert('请输入6-21位字母与数字')
            return;
        }
        let password = MD5(this.password).toString();
        const { params } = this.props.navigation.state;
        Http.post('api/updatepassword', {
            account: params.account,
            password: password
        }).then(res => {
            console.log(res)
            //成功后跳转，失败后提示
        })
    }
    render() {
        return (
            <Container style={styles.containerStyle}>
                <Content style={styles.contentStyle}>
                    <Item>
                        <Text style={styles.titleTextStyle}>新密码</Text>
                        <Input
                            style={styles.passwordInputStyle}
                            placeholder="请输入新密码"
                            onChangeText={password => this.initPassowrd(password)}
                        ></Input>
                    </Item>
                    <Item>
                        <Text style={styles.titleTextStyle}>确认密码</Text>
                        <Input
                            style={styles.passwordInputStyle}
                            placeholder="请再次确认新密码"
                            onChangeText={password => this.checkPassowrd(password)}
                        ></Input>
                    </Item>
                    <View style={{ height: 38 }}></View>
                    <Button style={styles.doneButtonStyle} onPress={this.updatePassword}>
                        <Text style={styles.doneTextStyle}>完成</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

var styles = ({

    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentStyle: {
        marginTop: 30,
        width: '80%',
    },
    titleTextStyle: {
        color: '#FFA200',
        width: 68,
        fontSize: 14,
    },
    passwordInputStyle: {
        fontSize: 14,
    },
    doneButtonStyle: {
        backgroundColor: '#FFA200',
        width: '100%',
        height: 44,
    },
    doneTextStyle: {
        textAlign: 'center',
        width: '100%',
        fontSize: 16,
    },
})
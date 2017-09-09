import React, { Component } from 'react';
import {
    Image,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';
import stylesContainer, { styles } from './registerCss';
class Register extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: '注册',
        headerStyle: {
            backgroundColor: '#051425',
            opacity: 0.9,
        },
        headerTintColor: 'white',
    });

    render() {
        return (
            <View style={stylesContainer.container}>
                    <Form style={styles.form}>
                        <Item>
                            <Icon active name='home' />
                            <Input placeholder="请输入您的电话号码" ></Input>
                        </Item>
                        <Item>
                            <Icon active name='home' />
                            <Input placeholder="请输入您的密码" ></Input>
                        </Item>
                        <Item>
                            <Icon active name='home' />
                            <Input placeholder="请输入验证码" ></Input>
                            <Button style={styles.vertificationCodeButton}>
                                <Text style={styles.vertificationCodeText}>获取验证码</Text>
                            </Button>
                        </Item>
                    </Form>
                    <View style={stylesContainer.registerView}>
                        <Button style={styles.registerButton}>
                            <Text style={styles.registerText}>注册</Text>
                        </Button>
                    </View>
                    <View style={stylesContainer.agreeView}>
                        <Text style={styles.agreeBaseText}>注册即表示同意本
                            <Button style={styles.agreeButton}>
                                <Text style={styles.agreeText}>软件协议</Text>
                            </Button>
                        </Text>
                    </View>
            </View>
        );
    }
}

export default Register;
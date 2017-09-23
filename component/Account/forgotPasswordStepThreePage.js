import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';

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

    render() {
        return (
            <Container style={styles.containerStyle}>
                <Content style={styles.contentStyle}>
                    <Item>
                        <Text style={styles.titleTextStyle}>新密码</Text>
                        <Input style={styles.passwordInputStyle} placeholder="请输入新密码"></Input>
                    </Item>
                    <Item>
                        <Text style={styles.titleTextStyle}>确认密码</Text>
                        <Input style={styles.passwordInputStyle} placeholder="请再次确认新密码"></Input>
                    </Item>
                    <View style={{height:38}}></View>
                    <Button style={styles.doneButtonStyle}>
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

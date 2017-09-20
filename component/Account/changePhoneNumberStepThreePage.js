import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';

export default class ChangePhoneNumberStepThreePage extends React.Component {

    constructor(props) {
		super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: '更换手机号',
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
                <Text style={styles.titleTextSytle}>
                填写短信验证码完成更换
                </Text>
                <Item style={styles.item}>
                    <Text style={styles.vertificationTextStyle}>验证码</Text>
                    <Input style={styles.vertificationInputStyle} placeholder="请输入短信验证码"></Input>
                </Item>
                <View style={styles.getCodeViewStyle}>
                    <Button bordered style={styles.getCodeButtonStyle} >
                        <Text style={styles.getCodeTextStyle}>获取验证码（59）</Text>
                    </Button>
                </View>
                <Button style={styles.nextStepButtonSytle}>
                    <Text style={styles.nextStepTextStyle}>完成</Text>
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
    titleTextSytle: {
        fontSize: 20,
        color: 'black',
    },
    item: {
        marginTop: 30,
        height: 32,
    },
    getCodeViewStyle: {
        flexDirection: 'row-reverse',
        height: 74,
        width: '100%',
    },
    getCodeButtonStyle: {
        marginTop: 9,
        marginRight: 0,
        borderColor: '#FFA200',
        height: 21,
    },
    getCodeTextStyle: {
        color: '#FFA200',
        fontSize: 7,
    },   
    vertificationTextStyle: {
        color: '#FFA200',
        fontSize: 14,
    },
    vertificationInputStyle: {
        fontSize: 14,
        height: 29,
        marginLeft: 16,
    },
    nextStepButtonSytle: {
        width: '100%',
        height: 44,
        backgroundColor: '#FFA200'
    },
    nextStepTextStyle: {
        textAlign: 'center', 
        width: '100%',   
    },
});
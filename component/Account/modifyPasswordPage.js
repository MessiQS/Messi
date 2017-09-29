import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';
import AccountCheck from '../../service/accountCheck';
import Http from '../../service/http';
import MD5 from 'crypto-js/md5';

const passwordType = ['oldPassword','newPassword','checkPassword'];
//从本地取出账号
const count = '123123';
const strArr = {
    oldPassword:'原始密码',
    newPassword:'新密码',
    checkPassword:'新密码'
} 

class ModifyPasswordPage extends React.Component {

	constructor(props) {
		super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: '修改密码',
        headerStyle: {
            backgroundColor: '#051425',
            opacity: 0.9,
        },
        headerTintColor: 'white',
    });

    changePassword(key,value){
        console.log(key,value)
        this[key] = value;
    };

    updatePawword(){
        let isValid = true;
        if(this[passwordType[1]] !== this[passwordType[2]]){
            isValid = false;
            Alert,alert('两次密码不相同','请输入相同的密码');
            return;
        }
        passwordType.some( res => {
            if (!AccountCheck.isValidPassword(this[res])) {
                isValid = false;
                Alert.alert(strArr[res] + '格式错误','请输入6-21位字母与数字');
                return true;
            }
        });
        if(isValid){
            Http.post('api/updatepassword', {
                account: account,
                oldPassword:this[passwordType[0]],
                password: this[passwordType[1]]
            }).then(res => {
                console.log(res)
                //成功后跳转，失败后提示
            })
        }
    }
    render() {
        return (
            <Container style={styles.containerStyle}>
                <Content style={styles.contentStyle}>
                    <Item style={styles.item}>
                        <Input placeholder="请输入您的旧密码" 
                            onChangeText={ password => this.changePassword(passwordType[0],password)}
                        ></Input>
                    </Item>
                    <Item style={styles.item}>
                        <Input placeholder="请输入您的新密码"
                            onChangeText={ password => this.changePassword(passwordType[1],password)}
                        ></Input>
                    </Item>
                    <Item style={styles.item}>
                        <Input placeholder="确认您的新密码"
                            onChangeText={ password => this.changePassword(passwordType[2],password)}
                        ></Input>
                    </Item>
                    <View style={styles.checkViewStyle}>
                        <Button style={styles.checkButtonStyle} onPress={this.updatePawword.bind(this)}>
                            <Text style={styles.checkTextStyle}>确认修改</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

var styles =({

    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',        
        alignItems: 'center',
    },
    contentStyle: {
        width: '80%',
        marginTop:27,
    },
    form: {
        width: '100%',
    },
    item: {
        
    },
    checkViewStyle: {
        width: '100%',
        height: 100,
    },
    checkButtonStyle: {
        marginTop: 49,
        backgroundColor: '#FFA200'
    },
    checkTextStyle: {
        textAlign: 'center', 
        width: '100%',   
        fontSize: 16,
    },
});

export default ModifyPasswordPage;


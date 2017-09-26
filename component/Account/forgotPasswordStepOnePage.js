import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Image,
    View,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';
import AccountCheck from '../../service/accountCheck';
export default class ForgotPasswordStepOnePage extends React.Component {

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

    accountChange(account){
        this.account = account;
    }

    nextNaviegate(){
        if(!AccountCheck.isValidPhoneNumber(this.account)){
            Alert.alert('请输入正确的手机号码');
            return;
        }
        const { navigate } = this.props.navigation;        
        navigate('ForgotPasswordStepTwoPage', { account: this.account })
    }

    render() {
        const { navigate } = this.props.navigation;        
        return (
            <Container style={styles.containerStyle}>
                <Content style={styles.contentStyle}>
                    <Item style={styles.item}>
                        <Text style={styles.phoneNumberTextStyle}>+86</Text>
                        <Input 
                            style={styles.phoneNumberInputStyle} 
                            placeholder="请输入手机号码" 
                            onChangeText={account => this.accountChange(account)}
                        ></Input>
                    </Item>
                    <View style={{height:43}}></View>
                    <Button style={styles.nextStepButtonSytle} onPress={this.nextNaviegate.bind(this)}>
                        <Text style={styles.nextStepTextStyle}>下一步</Text>
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
        width: '80%',
        marginTop: 57,
    }, 
    item: {
        marginTop: 0,
        height: 32,
    },
    phoneNumberTextStyle: {
        color: '#FFA200',
        fontSize: 14,
    },
    phoneNumberInputStyle: {
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
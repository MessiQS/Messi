import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';

export default class ChangePhoneNumberStepTwoPage extends React.Component {

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
        const { navigate } = this.props.navigation;        
        return (
            <Container style={styles.containerStyle}>
            <Content style={styles.contentStyle}>
                <Text style={styles.titleTextSytle}>
                输入新的手机号码
                </Text>
                <Item style={styles.item}>
                    <Text style={styles.phoneNumberTextStyle}>+86</Text>
                    <Input style={styles.phoneNumberInputStyle} placeholder="请输入手机号码"></Input>
                </Item>
                <View style={{height:74}}></View>
                <Button style={styles.nextStepButtonSytle} onPress={() =>
						navigate('ChangePhoneNumberStepThreePage', { name: 'ChangePhoneNumberStepThreePage' })
					}>
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
        marginTop: 30,
    }, 
    titleTextSytle: {
        fontSize: 20,
        color: 'black',
    },
    item: {
        marginTop: 30,
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
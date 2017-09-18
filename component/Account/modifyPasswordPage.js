import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Alert
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';

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

    render() {
        return (
            <Container style={styles.containerStyle}>
                <Content style={styles.contentStyle}>
                    <Item>
                        <Input placeholder="请输入您的旧密码"></Input>
                    </Item>
                    <Item>
                        <Input placeholder="请输入您的新密码"></Input>
                    </Item>
                    <Item>
                        <Input placeholder="确认您的密码"></Input>
                    </Item>
                    <View style={styles.checkViewStyle}>
                    <Button style={styles.checkButtonStyle}>
                        <Text style={styles.checkTextStyle}>确认修改</Text>
                    </Button>
                </View>
                </Content>
            </Container>
        );
    }
}

var styles = ({
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentStyle: {
        width: '80%',
        marginTop:27,
    },
    listStyle: {
        backgroundColor: 'white',
        height: 40,
    },
    listTextStyle: {
        fontSize: 17,
    },
    checkViewStyle: {
        marginTop: 39,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    checkButtonStyle: {
        backgroundColor: '#FFA200',
        height: 44,
    },
    checkTextStyle: {
        width: '100%',
        fontSize: 16,
        textAlign: 'center', 
    },
});

export default ModifyPasswordPage;


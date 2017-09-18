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
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="请输入您的旧密码"></Input>
                        </Item>
                        <Item>
                            <Input placeholder="请输入您的新密码"></Input>
                        </Item>
                        <Item>
                            <Input placeholder="确认您的密码"></Input>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default ModifyPasswordPage;


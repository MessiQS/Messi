/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    // View,
    // Text
} from 'react-native';
import {
    Container,
    Text,
    Header,
    Title,
    Body,
    View,
    Thumbnail,
    Content,
    List,
    ListItem,
    Right,
    Icon,
    Button
} from 'native-base';

export default class Account extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `版本信息${navigation.state.params.user}`,
        tabBarVisible:false,
    });
    render() {
        return (
            <Container contentContainerStyle={{flex: 1}}>
                <Content>
                    <Text>
                        版本信息
                    </Text>
                </Content>
            </Container>
        );
    }
}



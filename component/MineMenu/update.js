/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
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

export default class Update extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `版本更新`,
        tabBarVisible:false,

    });
    render() {
        return (
            <Container contentContainerStyle={{flex: 1}}>
                <Content>
                    <Text>
                        版本更新
                    </Text>
                </Content>
            </Container>
        );
    }
}



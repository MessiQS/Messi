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
    render() {
        return (
            <Container contentContainerStyle={{flex: 1}}>
                <Content>
                    <List>
                        <ListItem style={{borderTopColor:'#dcdcdc',borderTopWidth:1}}>
                            <Text>版本信息111</Text>
                            <Right style={{height:20}}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>版本更新</Text>
                            <Right style={{height:20}}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>问题反馈</Text>
                            <Right style={{height:20}}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}



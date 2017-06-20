/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Body,
    Thumbnail,
    Content,
    List,
    ListItem,
    Right,
    Icon,
    Button
} from 'native-base';
import Swiper from 'react-native-swiper';

export default class Message extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    autoplay={true}
                    height={200}
                    showsPagination={false}
                    scrollsToTop={true}
                >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
                    <Container contentContainerStyle={{flex: 1}}
                               style={{
                                   backgroundColor: '#fff',
                                   width: '100%',
                                   flex: 1,
                                   top:40
                               }}
                    >
                    <List>
                        <ListItem
                            button
                            style={{
                                borderTopColor: '#dcdcdc',
                                height:78
                            }}
                        >
                            <Text style={styles.text}>刷题 0/100</Text>
                            <Right>
                                <Button bordered danger style={{borderColor:'#608fd3'}}>
                                    <Text style={styles.outLogin}>￥6.00</Text>
                                    <Text style={styles.outLogin}>app内购买</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem
                            button
                            style={{
                                borderTopColor: '#dcdcdc',
                                height:78
                            }}
                        >
                            <Text style={styles.text}>刷题 0/100</Text>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>
                    </Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    content:{
        flex:1,
        alignItems: 'center',
    },
    wrapper: {
        height:300
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    }
});


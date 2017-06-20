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
    View,
    // Button
} from 'react-native';
import { Button } from 'native-base';
import Swiper from 'react-native-swiper';

export default class Find extends Component {
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
                <View style={styles.content}>
                    <View style={styles.topcard}>
                        <Text style={styles.nowadays}>当前题库</Text>
                        <Text style={styles.description}>言语表达与理解 100/3349</Text>
                        <Text style={styles.icon}>少一个图标</Text>
                    </View>
                    <View style={styles.buttonarray}>
                        <Button bordered dark style={{alignItems: 'center'}}>
                            <Text style={styles.antiforgetting}>刷新题</Text>
                        </Button>
                        <Button bordered dark style={{top:20}}>
                            <Text style={styles.antiforgetting}>抗遗忘</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content:{
      flex:1,
        alignItems: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    topcard:{
        top:0,
        width:'80%',
        height:150,
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#dcdcdc',
    },
    nowadays:{
        height:40,
        fontSize:20,
        top:0,
    },
    description:{
        height:40,
        fontSize:20,
        top:40,
    },
    icon:{
        top:30
    },
    buttonarray:{
        top:10,
    },
    newquestion:{
        borderWidth:1,
        borderColor:'#dcdcdc',
        color:'#333'
    },
    antiforgetting:{
        color:'#333',
        width:100,
        left:20,
        fontSize:20
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
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});


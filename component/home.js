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
                        <View style={styles.quesTitle}>
                            <Text style={styles.nowadays}>当前题库</Text>
                            <Text style={styles.description}>言语表达与理解 100/3349</Text>
                            <View style={styles.percent}>
                                <View style={styles.nowPercent}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.circleChart}>
                            <Text>123</Text>
                        </View>
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
        top:30,
        flex:1,
        alignItems: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    topcard:{
        width:'100%',
        height:90,
        borderColor:'#fff',
        flexDirection:'row',
    },
    quesTitle:{
        flex:4,
    },
    circleChart:{
      flex:1,
    },
    nowadays:{
        left:20,
        height:20,
        fontSize:14,
        top:0,
        fontWeight:'bold',
    },
    description:{
        left:20,
        height:20,
        fontSize:14,
        fontWeight:'bold',
    },
    percent:{
        top:20,
        left:20,
        width:'80%',
        backgroundColor:'#dde2e6',
        borderRadius:3,
    },
    nowPercent:{
        width:'60%',
        backgroundColor:'#23ab9c',
        borderRadius:3,
        height:10,
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


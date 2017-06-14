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
export default class Find extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    topcard:{
        top:80,
        width:'80%',
        height:150,
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#dcdcdc',
    },
    nowadays:{
        height:40,
        fontSize:20,
        top:50,
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
        top:100,
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
    }
});


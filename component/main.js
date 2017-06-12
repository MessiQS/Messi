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
import ScrollableTabView,{DefaultBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Home from './home';
import Mine from './mine';
import Find from './find';
import Message from './message';

export default class Main extends Component {
    render() {
        return (
            <ScrollableTabView
                renderTabBar={
                    ()=><ScrollableTabBar />
                }
                tabBarPosition="bottom"
                onChangeTab={
                    (obj)=>{
                        console.log('切换到了' + obj.i + '个')
                    }
                }
                onScroll={
                    (posit)=>{
                        {/*console.log(posit)*/}
                    }
                }
            >
                <Home tabLabel="首页"/>
                <Mine tabLabel="我的"/>
                <Find tabLabel="发现"/>
                <Message tabLabel="消息"/>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


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
    Image
} from 'react-native';
import { TabNavigator } from "react-navigation";
import Home from './component/home';
import Mine from './component/mine';
import Find from './component/find';
import Message from './component/message';
const Messi  = TabNavigator({
        home: { screen: Home,
            navigationOptions:{
                tabBarLabel:'刷题',
                //tabBarIcon:<Image source={require('./Images/net.jpg')} />
            }},
        message: { screen: Message ,
            navigationOptions:{
                tabBarLabel:'题库',
            }},
        find: { screen: Find ,
            navigationOptions:{
                tabBarLabel:'统计',
            }},
        mine: { screen: Mine ,
            navigationOptions:{
                tabBarLabel:'我的',
            }},
    },
    {
        animationEnabled: true, // 切换页面时是否有动画效果
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: true, // 是否可以左右滑动切换tab
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#7d2b2c', // 文字和图片选中颜色
            inactiveTintColor: '#333', // 文字和图片未选中颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                height: 60
            },
            labelStyle: {
                fontSize: 14, // 文字大小
            },
        }
    });


AppRegistry.registerComponent('Messi', () => Messi);

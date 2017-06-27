import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Echarts from 'native-echarts';

export default class Account extends Component {
    render() {
        const option = {
            series : [
                {
                    type:'pie',
                    data:[289,2987,40]
                }
            ]
        };
        return (
            <Echarts option={option} height={300}/>
        );
    }
}
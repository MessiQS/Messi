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
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: ['遗忘曲线', '永久记忆']
            },
            xAxis: {
                data: ["2017-10-1", "2017-10-2", "2017-10-3", "2017-10-4", "2017-10-5", "2017-10-6", "2017-10-7"]
            },
            yAxis: {},
            series: [{
                name: '遗忘曲线',
                type: 'line',
                data: [120, 50, 40, 35, 32, 31, 30, 29],
                smooth: true
            }, {
                name: '永久记忆',
                type: 'line',
                data: [20, 20, 20, 20, 20, 20, 20, 20]
            }]
        };
        return (
            <Echarts option={option} height={300}/>
        );
    }
}
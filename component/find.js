/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';


LocaleConfig.locales['cn'] = {
    monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    dayNames: ['周日','周一','周二','周三','周四','周五','周六'],
    dayNamesShort: ['日','一','二','三','四','五','六']
};
LocaleConfig.defaultLocale = 'cn';
export default class Find extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '发现'
    });

    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={styles.calender}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={calenderOptiones.Theme}
                    //current={'2017-06-17'}
                    markedDates={{[this.state.selected]: {selected: true}}}
                    markingType={'string'}
                    onDayPress={this.onDayPress}
                />
                <Text style={styles.welcome}>
                    发现
                </Text>
            </View>
        );
    }
    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }
}
const calenderOptiones={
    Theme : {
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: '#2d4150',
        monthTextColor: '#2d4150'
    },
    selected:'2017-06-17'
};

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
    welcome:{
        flex: 3,

    },
    calender:{
        borderTopWidth: 1,
        paddingTop: 5,
        width:'100%',
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350,
        flex: 5,
    }
});


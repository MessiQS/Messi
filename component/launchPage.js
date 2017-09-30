import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";


 class LaunchPage extends React.Component {

    constructor(...props) {
        super();
        this.state = this.state || {};
    }

    componentDidMount() {

        const { navigate } = this.props.navigation;
        navigate('MyTab', { name: 'MainTab' })
    }

    render() {
        return (
            <View></View>
        );
    }
}

export default LaunchPage;
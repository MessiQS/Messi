import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export class Greeting extends Component {
    render() {
        return (
            <view style="{{width: 300, height: 50, backgroundColor: 'powderblue'}} ">
                <Text>Hello {this.props.name.one}!</Text>
        );
    }
}
export class Messipot extends Component {
    render(){
        return (
            <Text>Hello {this.props.poi}!</Text>
        );
    }
}
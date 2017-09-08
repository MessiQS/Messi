import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Register from './register';
import Login from './login';


const MainLogin = StackNavigator ({
	//
	Login:{
		screen:Login,
	},
	Register: {
		screen:Register,
	},
});

export default MainLogin;
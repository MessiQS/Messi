import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Register from './register';
import Login from './login';
// import LoginPage from './loginPage'

const MainLogin = StackNavigator ({
	//
	Login:{
		screen:Login,
	},
	Register: {
		screen:Register,
	},
	// LoginPage: {
	// 	screen:LoginPage,
	// },
});

export default MainLogin;
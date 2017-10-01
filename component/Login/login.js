import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
	Alert
} from 'react-native';
import Button from 'apsl-react-native-button';
import { TabNavigator, StackNavigator } from "react-navigation";
import Register from './register';
import Storage from '../../service/storage';

export default class Login extends Component {

	constructor(props) {
		super(props);
		Storage.multiGet(['accountToken','account']).then( res => {
			console.log(JSON.stringify(res))
		})
	}

	static navigationOptions = {
		header: null,
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					<Button style={[styles.loginButtonStyle, styles.buttonStyle]} onPress={() =>
						navigate('LoginPage', { name: 'LoginPage' })
					}>
						<View style={styles.nestedViewStyle}>
							<Text style={styles.nestedTextStyle}>登录</Text>
						</View>
					</Button>
					<Button style={[styles.registerButtonStyle, styles.buttonStyle]} onPress={() =>
						navigate('Register', { name: 'Register' })
					}>
						<View style={styles.nestedViewStyle}>
							<Text style={styles.nestedTextStyle}>注册</Text>
						</View>
					</Button>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		// remove width and height to override fixed static size
		width: null,
		height: null,
		// background:URL('../../Images/background.png'),
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 50,
		height: 92,
		marginRight: 24,
		marginLeft: 24,
		marginTop: 400,
		overflow: 'hidden',
	},
	buttonStyle: {
		marginTop: 16,
		borderRadius: 4,
		height: 60,
	},
	loginButtonStyle: {
		borderColor: 'white',
	},
	registerButtonStyle: {
		backgroundColor: '#FFA200',
		borderColor: '#FFA200',
	},
	nestedViewStyle: {

	},
	nestedTextStyle: {
		fontSize: 20,
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0)',
	},
});





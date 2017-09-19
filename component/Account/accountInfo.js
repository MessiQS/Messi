import React, { Component } from 'react';
import {
    Image,
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text, Header, Separator } from 'native-base';

class AccountInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = this.state || {};
        
        this.navigation = this.props.navigation;
    }

    static navigationOptions = ({ navigation }) => ({
        title: '账号信息',
        headerStyle: {
            backgroundColor: '#051425',
            opacity: 0.9,
        },
        headerTintColor: 'white',
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                <ListItem itemHeader first style={styles.listStyle}>
                <Body>
                    <Text style={styles.headerText}>12412412</Text>
                    </Body>
                </ListItem>
                <ListItem last style={styles.listStyle} button={true} onPress={() =>
								navigate('ModifyPasswordPage', { name: 'ModifyPasswordPage' })
					      }>
                    <Body>
                        <Text style={styles.listTextStyle}>修改密码</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <Separator style={{height:5}}>
                </Separator>
                <ListItem last style={styles.listStyle} button={true} onPress={() =>
								navigate('ChangePhoneNumberStepOnePage', { name: 'ChangePhoneNumberStepOnePage' })
					      }>
                    <Body>
                        <Text style={styles.listTextStyle}>更换手机号</Text>
                    </Body>                    
                    <Right>
                     <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                </Content>
            </Container>
        );
    }
}

var styles = ({
    headerText: {
        color: '#FFA200',
        fontSize: 18,
        textAlign: 'center', 
    },
    listStyle: {
        backgroundColor: 'white',
        height: 40,
    },
    listTextStyle: {
        fontSize: 17,
    },
});

export default AccountInfo;


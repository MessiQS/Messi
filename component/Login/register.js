import React, { Component } from 'react';
import {
    Image,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Button, Container, Content, List, ListItem, Icon, Right, Left, Body, Switch, Form, Item, Input, Text } from 'native-base';

class Register extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: '注册',
    headerStyle: {
      backgroundColor:'#051425',
      opacity:0.9,
    },
    headerTintColor:'white',
  });
  
  render() {
    return (
      <Container>
        <Content style={styles.content}>
          {/* <Form style={styles.form}>
            <Item>
              <Icon active name='home' />
              <Input placeholder="请输入您的电话号码" ></Input>
            </Item>
            <Item>
              <Icon active name='home' />
              <Input placeholder="请输入您的密码" ></Input>
            </Item>
            <Item>
              <Icon active name='home' />
              <Input placeholder="请输入验证码" ></Input>
              <Button style={styles.vertificationCodeButton}>
                <Text style={styles.vertificationCodeText}>获取验证码</Text>
              </Button>
            </Item>
          </Form> */}
          <View style={stylesContainer.registerView}>
            <Button style={styles.registerButton}>
              <Text style={styles.registerText}>注册</Text>
            </Button>
          </View>
          <View style={stylesContainer.agreeView}>
            <Text style={styles.agreeBaseText}>注册即表示同意本
              <Text style={styles.agreeText}>软件协议</Text>
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
var styles = {
  content: {
    paddingLeft:48,
    paddingRight:48,
    backgroundColor:'red',
    paddingTop:89,
  },
  form: {
    // top:89,
    // height:300,
    flex:3,
    backgroundColor:'blue',
  },
  viewContainer: {

  },
  textInput: {
    top:30,
    height:48,
  },
  vertificationCodeButton: {
    backgroundColor:'#FFA200',
    borderRadius:8,
    width:100,
    height:35,
    paddingLeft:0,
    paddingRight:0,
    marginTop:7,
  },
  vertificationCodeText:{
    fontSize:14,
    width:100,
    backgroundColor:null,
    textAlign:'center',
  },
  registerButton:{
    justifyContent: 'center',
    backgroundColor:'#FFA200',
    height:55,
    width:290,
  },
  registerText:{
    flex: 1,
    width:100,
    fontSize:20,
    backgroundColor:null,
    textAlign:'center',
  },
  agreeButton:{
    width:50,
    height:50,
  },
  agreeText:{
    width:100,
    height:50,
    color:'#FFA200',
  },
  agreeBaseText:{
    textAlign:'center',
    fontSize:14,
  }
};

var stylesContainer = StyleSheet.create ({
  registerView:{
    // height:260,
    // flex:2,
    backgroundColor:'green'
  },
  agreeView:{
    // top:100,
    // flex:1,
    bottom:100,
    backgroundColor:'green',
  },
});
 
export default  Register;
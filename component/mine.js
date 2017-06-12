/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    // View
} from 'react-native';
import {
    Container,
    Text,
    Header,
    Title,
    Body,
    View,
    Thumbnail,
    Content,
    List,
    ListItem,
    Right,
    Icon,
    Button
} from 'native-base';
import { StackNavigator } from 'react-navigation';

import  Account  from  './MineMenu/account'

class Home extends Component {
    render() {
        // const {height: screenHeight} = Dimensions.get('window');
        return (
            <Container contentContainerStyle={{flex: 1}}>
                <Content>
                    <View style={{flex: 1, height: 220, alignItems: 'center'}}>
                        <Thumbnail square source={require('../Images/net.jpg')}
                                   style={{width:120,height:120,top:40}} />
                    </View>
                    <List>
                        <ListItem style={{borderTopColor:'#dcdcdc',borderTopWidth:1}}>
                            <Text>版本信息</Text>
                            <Right style={{height:20}}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>版本更新</Text>
                            <Right style={{height:20}}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Text>问题反馈</Text>
                            <Right style={{height:20}}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                    <View style={{flex: 1, height: 80, alignItems: 'center'}}>
                        <Button bordered danger onPress={() => this.props.navigation.navigate('Account', { user: 'Lucy' })}>
                            <Text>退出登录</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

const Mine = StackNavigator({
    Home: { screen: Home ,
        navigationOptions:{
            tabBarLabel:'我的',
        },
    },
    Account:{ screen: Account ,
        navigationOptions:{
            tabBarLabel:'账户详情',
        }
    }
})
export default Mine;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        width:200,
        height:200,
    },
    button:{
        left:20,
        top:20,
        width:120,
        height:40
    }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Body,
    Thumbnail,
    Content,
    List,
    ListItem,
    Right,
    Icon,
    Button
} from 'native-base';
import AccountInfo from './Account/accountInfo';

class MineListItem extends Component {

    constructor(props) {
        super(props);
        this.state = props;
        console.log(props);
    }
    
    render() {
        return (
            <ListItem button onPress={() =>
                this.props.navigation.navigate(this.props.item.sref,
                    this.props.item.info
                )}
                style={{ borderTopColor: '#dcdcdc', borderTopWidth: this.props.item.tipBorder }}
            >
                <Body>
                    <Text>{this.props.item.name}</Text>
                </Body>
                <Right style={{ height: 20 }}>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        )
    }
}
const nativeStyle = {
    thumbnail: {
        width: 90,
        height: 90,
        top: 30,
        borderRadius: 45
    },
    container: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 2
    }
};

class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation
        }
    }

    listItemArray = [
        {
            sref: 'AccountInfo',
            name: '账号信息',
            info: { name: 'AccountInfo' },
            tipBorder: 1
        },
        {
            sref: 'Update',
            name: '版本更新',
            info: { user: 'Lucy' },
            tipBorder: 0
        }, {
            sref: 'Request',
            name: '问题反馈',
            info: { user: 'Lucy' },
            tipBorder: 0
        }
    ];

    avatarClick() {
        
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, height: 220, alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.avatarClick}>
                        <Thumbnail square source={require('../Images/head.png')}
                            style={nativeStyle.thumbnail} />
                        <Text style={styles.phoneNumber}>
                            18355570987
                        </Text>
                    </TouchableOpacity>
                </View>
                <Container contentContainerStyle={{ flex: 1 }}
                    style={nativeStyle.container}
                >
                    <List>
                        <MineListItem
                            navigation={this.state.navigation}
                            item={this.listItemArray[0]}
                        />
                        <MineListItem
                            navigation={this.state.navigation}
                            item={this.listItemArray[1]}
                        />
                        <MineListItem
                            navigation={this.state.navigation}
                            item={this.listItemArray[2]}
                        />
                    </List>
                    <View style={styles.button}>
                        <View>
                            <Button bordered danger style={{ borderColor: '#608fd3' }}>
                                <Text style={styles.outLogin}>退出登录</Text>
                            </Button>
                        </View>
                    </View>
                </Container>
            </View>
        );
    }
}

export default Mine;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        width: 200,
        height: 200,
    },
    button: {
        top: 55,
        alignItems: 'center'
    },
    outLogin: {
        color: '#608fd3'
    },
    phoneNumber: {
        top: 48,
        fontSize: 14,
        color: '#333'
    }
});


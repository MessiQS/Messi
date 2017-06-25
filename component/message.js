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
import Swiper from 'react-native-swiper';

const nativeStyle = {
    container: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
        top: 40
    },
    listItem: {
        borderTopColor: '#dcdcdc',
        height: 78
    },
    button: {
        borderColor: '#608fd3',
        justifyContent: 'center',
        top: 5,
        width:80
    }
};
class RepeatItem extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.renderHtml = '';
        if (!Array.isArray(props.model)) {
            props.model = [];
        }
        console.log(props, this);
    };

    render() {
        return (
            <List>
                {this.props.model.map(value => {
                    return <ListItem
                        button
                        style={nativeStyle.listItem}
                        key={value.key}
                    >
                        <Text style={styles.text}>{value.name} {value.haveRead}/{value.number}</Text>
                        <Right>
                            <Button bordered danger small style={nativeStyle.button}>
                                <Text>￥6.00</Text>
                            </Button>
                            <Text style={styles.tips}>app内购买</Text>
                        </Right>
                    </ListItem>
                })}
            </List>
        )
    }
}
export default class Message extends Component {
    constructor(props) {
        super();
        this.listModel = [
            {
                name:'刷题',
                haveRead:100,
                number:1000,
                isBuyed:true,
                key:0,
                call:this.buyCallback
            },
            {name:'刷题1',
                haveRead:200,
                number:1000,
                isBuyed:false,
                key:1,
                call:this.buyCallback}
            ];
    };

    buyCallback(havBuyed){
        if(havBuyed){

        }else{

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    autoplay={true}
                    height={200}
                    showsPagination={false}
                    scrollsToTop={true}
                >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
                <Container contentContainerStyle={{flex: 1}}
                           style={nativeStyle.container}
                >
                    <Content>
                        <RepeatItem model={this.listModel}/>
                    </Content>
                </Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    wrapper: {
        height: 200
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },
    outLogin: {
        height: 30,
        justifyContent: 'center',
        fontSize: 15,
        top: 7
    },
    tips: {
        fontSize: 10,
        width: 64,
        alignItems: 'center',
        top: 5
    }
});


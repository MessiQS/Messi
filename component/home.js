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
    View,
    // Button
} from 'react-native';
import {Button, Container, List, ListItem, Icon, Right, Left, Body, Switch} from 'native-base';
import Swiper from 'react-native-swiper';
import Echarts from 'native-echarts';


const nativeStyle = {
    container: {
        backgroundColor: '#fff',
        width: '100%',
    },
    listItem: {
        borderTopColor: '#dcdcdc',
        borderTopWidth: 0,
        height: 60,
        top: 10
    },
    right: {
        height: 52
    }
};
export default class Find extends Component {
    constructor() {
        super();
        this.state = {
            questions: {
                new: 1500,
                writed: 1000,
                deepmind: 300,
            },
            percent:(1500 + 1000)/2800*100 + '%',
            all:1500 + 1000 + 300,
        };
        setTimeout(this.callThis.bind(this), 3000)
    };

    callThis() {
        return this.setState({
                questions: {
                    new: 1500,
                    writed: 800,
                    deepmind: 1000,
                },
                percent:(1500 + 300)/3100*100 + '%',
                all:3100
            })
    }

    render() {
        const option = {
            tooltip: {
                axisPointer: {
                    type: ('line' | 'cross' | 'shadow' | 'none'),
                }
            },
            series: [

                {
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorArray = ['#ff477b', '#f69b2c', '#2d7faf'];
                                return colorArray[params.dataIndex];
                            }
                        }
                    },
                    type: 'pie',
                    data: [this.state.questions.writed, this.state.questions.new, this.state.questions.deepmind]
                }
            ]
        };
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    autoplay={true}
                    height={200} showsPagination={false}
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
                <View style={styles.content}>
                    <View style={styles.topcard}>
                        <View style={styles.quesTitle}>
                            <Text style={styles.nowadays}>当前题库</Text>
                            <Text
                                style={styles.description}>言语表达与理解 {this.state.questions.writed + this.state.questions.deepmind}/{this.state.all}</Text>
                            <View style={styles.percent}>
                                <View
                                    style={[styles.nowPercent, {width: this.state.percent}]}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.circleChart}>
                            <Echarts option={option} height={80}/>
                        </View>
                    </View>
                    <Container contentContainerStyle={{flex: 1}}
                               style={nativeStyle.container}
                    >
                        <List>
                            <ListItem icon onPress={() => {
                                console.log(123)
                                this.props.navigation.navigate('Account', {user: 1})
                            }
                            }
                                      style={nativeStyle.listItem}
                            >
                                <Left>
                                    <View style={styles.orange}></View>
                                </Left>
                                <Body>
                                <Text style={styles.bodyText}>新题</Text>
                                </Body>
                                <Right style={nativeStyle.right}>
                                    <Text>
                                        {this.state.questions.new}/{this.state.all}
                                    </Text>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>
                        </List>
                        <ListItem icon onPress={() =>
                            this.props.navigation.navigate('Account', {}
                            )}
                                  style={nativeStyle.listItem}
                        >
                            <Left>
                                <View style={styles.red}></View>
                            </Left>
                            <Body >
                            <Text style={styles.bodyText}>抗遗忘</Text>
                            </Body>
                            <Right style={nativeStyle.right}>
                                <Text>
                                    {this.state.questions.writed}/{this.state.all}
                                </Text>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>

                    </Container>
                </View>
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
    content: {
        top: 30,
        alignItems: 'center',
        width: '100%',
        flex: 1
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    topcard: {
        width: '100%',
        height: 90,
        borderColor: '#fff',
        flexDirection: 'row',
    },
    quesTitle: {
        width:'70%',
    },
    circleChart: {
        width:'30%',
    },
    nowadays: {
        left: 20,
        height: 20,
        fontSize: 14,
        top: 0,
        fontWeight: 'bold',
    },
    description: {
        left: 20,
        height: 20,
        fontSize: 14,
        fontWeight: 'bold',
    },
    percent: {
        top: 20,
        left: 20,
        width:'90%',
        backgroundColor: '#dde2e6',
        borderRadius: 3,
    },
    nowPercent: {
        width: '60%',
        backgroundColor: '#23ab9c',
        borderRadius: 3,
        height: 10,
    },
    orange: {
        width: 25,
        height: 25,
        borderRadius: 4,
        backgroundColor: '#ffa62b',
        top: -6
    },
    red: {
        width: 25,
        height: 25,
        borderRadius: 4,
        backgroundColor: '#ff477b',
        top: -6
    },
    bodyText: {
        height: 30
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
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});


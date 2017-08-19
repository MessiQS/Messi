/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//题库
import React, {Component} from 'react';
import {
    AppRegistry,
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
import ModalDropdown from 'react-native-modal-dropdown';
import styles , { nativeStyle } from './messageCss';
import RepeatItem from './repeatItem';


export default class Message extends Component {
    constructor(props) {
        super(props);
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
                <View style={styles.modelView}>
                    <ModalDropdown 
                        style={nativeStyle.noBorederRight} 
                        defaultValue={"省份"} 
                        options={['option 1', 'option 2']}
                        textStyle={nativeStyle.textStyle}
                        dropdownStyle={nativeStyle.dropdownStyle}
                    />
                    <ModalDropdown 
                        style={nativeStyle.select} 
                        defaultValue={"年份"} 
                        options={['option 3', 'option 2']}
                        textStyle={nativeStyle.textStyle}
                    />
                </View>
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




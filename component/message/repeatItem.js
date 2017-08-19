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
import styles , { nativeStyle } from './messageCss';

export default class RepeatItem extends Component {
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
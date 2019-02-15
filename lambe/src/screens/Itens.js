import React, { Component } from 'react'
import { TouchableWithoutFeedback as TWF, Alert } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View } from 'native-base';

import axios from 'axios'
import xml2js from 'react-native-xml2js';
import lodash from 'lodash';

class Itens extends Component {

    state = {
        itensNota: this.props.navigation.getParam('itensNota')
    }

    selecionarItem = item => {
        console.warn(JSON.stringify(item))
    }

    render() {
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.itensNota} key={item => `${item.CITEM}`}
                        renderRow={item => {
                            return (
                                <ListItem>
                                    <TWF onPress={() => this.selecionarItem(item)}>
                                        <View>
                                            <Text style={{fontSize: 12}}>{item.CITEM} - {item.CDESCPROD}</Text>
                                        </View>
                                    </TWF>
                                </ListItem>
                            )
                        }} />
                </Content>
            </Container>
        )
    }
}

export default Itens

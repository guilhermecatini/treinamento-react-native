import React, { Component } from 'react'
import { TouchableWithoutFeedback as TWF, Alert } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View } from 'native-base';

import axios from 'axios'
import xml2js from 'react-native-xml2js';
import lodash from 'lodash';

class Notas extends Component {

    state = {
        notas: this.props.navigation.getParam('ax')
    }

    selecionarNota = documentid => {
        let xmlData = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dataservice.ecm.technology.totvs.com/">
            <soapenv:Header/>
            <soapenv:Body>
                <ws:getDataset>
                    <companyId>1</companyId>
                    <username>integracao</username>
                    <password>i9eu6Xl0Zblmd8oyucnQY3nd7ywzSz01</password>
                    <name>ds_get_it_nf_saida_fluig</name>
                    <fields />
                    <constraints>
                        <item>
                            <contraintType>1</contraintType>
                            <fieldName>metadata#id</fieldName>
                            <finalValue>${documentid}</finalValue>
                            <initialValue>${documentid}</initialValue>
                            <likeSearch>0</likeSearch>
                        </item>
                    </constraints>
                    <order />
                </ws:getDataset>
            </soapenv:Body>
        </soapenv:Envelope>
        `;

        axios.post('http://kaumamtst.fluig.com/webdesk/ECMDatasetService?wsdl', xmlData, { headers: { 'Content-Type': 'text/xml' } }).then((res) => {

            let ax = new xml2js.Parser({ ignoreAttrs: true })

            ax.parseString(res.data, (err, result) => {

                let attr = result["soap:Envelope"]["soap:Body"][0]["ns1:getDatasetResponse"][0]["dataset"][0]["columns"]
                let values = result["soap:Envelope"]["soap:Body"][0]["ns1:getDatasetResponse"][0]["dataset"][0]["values"]
                let itensNota = []

                for (let i = 0; i < values.length; i++) {
                    let ax = {}
                    for (let j = 0; j < values[i].value.length; j++) {
                        ax[attr[j]] = values[i].value[j]
                    }
                    itensNota.push(ax)
                }

                console.warn(itensNota)

                this.props.navigation.navigate('ListarItens', { itensNota })

            })
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.notas} key={nota => `${nota.CDOC}`}
                        renderRow={item => {
                            return (
                                <ListItem>
                                    <TWF onPress={() => this.selecionarNota(item.documentid)}>
                                        <View>
                                            <Text style={{fontSize: 12}}>Nota Fiscal - {item.CDOC}</Text>
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

export default Notas

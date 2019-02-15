import React, { Component } from 'react'
import { TouchableWithoutFeedback as TWF, Alert } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View } from 'native-base';

import axios from 'axios'
import xml2js from 'react-native-xml2js';
import lodash from 'lodash';

class Clientes extends Component {

    state = {
        clientes: []
    }

    /**
     * Busca os Clientes
     */
    listarClientes = () => {
        let xmlData = `
            <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dataservice.ecm.technology.totvs.com/">
            <soapenv:Header/>
            <soapenv:Body>
            <ws:getDataset>
            <companyId>1</companyId>
            <username>integracao</username>
            <password>i9eu6Xl0Zblmd8oyucnQY3nd7ywzSz01</password>
            <name>ds_retirada_materiais</name>
            <fields>
            <item>CCLIENTE</item>
            <item>CNOMECLI</item>
            </fields>
            <constraints />
            <order />
            </ws:getDataset>
            </soapenv:Body>
            </soapenv:Envelope>`

        axios.post('http://kaumam.fluig.com/webdesk/ECMDatasetService?wsdl', xmlData, { headers: { 'Content-Type': 'text/xml' } }).then((res) => {

            let ax = new xml2js.Parser({ ignoreAttrs: true })

            ax.parseString(res.data, (err, result) => {

                let attr = result["soap:Envelope"]["soap:Body"][0]["ns1:getDatasetResponse"][0]["dataset"][0]["columns"]
                let values = result["soap:Envelope"]["soap:Body"][0]["ns1:getDatasetResponse"][0]["dataset"][0]["values"]
                let results = []

                for (let i = 0; i < values.length; i++) {
                    let ax = {}
                    for (let j = 0; j < values[i].value.length; j++) {
                        ax[attr[j]] = values[i].value[j]
                    }
                    results.push(ax)
                }

                let clientes = lodash.uniqBy(results, 'CCLIENTE')
                clientes = lodash.orderBy(clientes, [ax => ax.CNOMECLI.toLowerCase()], ['ASC'])

                this.setState({ clientes })

            });
        })
    }

    /**
     * Ao selecionar um cliente
     */
    selecionarCliente = CCLIENTE => {
        
    }

    componentWillMount() {
        this.listarClientes()
    }
    

    render() {
        return (
            <Container>
                <Content>
                    <Header />
                    <List dataArray={this.state.clientes} key={cliente => `${cliente.CCLIENTE}`}
                        renderRow={item => {
                            return (
                                <ListItem>
                                    <TWF onPress={() => false}>
                                        <View>
                                            <Text>{item.CCLIENTE} - {item.CNOMECLI}</Text>
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

export default Clientes

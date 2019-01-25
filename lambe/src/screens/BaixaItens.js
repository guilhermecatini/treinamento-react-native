import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
// import Header from '../components/Header'
import Clientes from '../components/Clientes'

class BaixaItens extends Component {

    state = {
        clientes: [
            {
                CCLIENTE: 1,
                CNOMCLI: 'GUILHERME CATINI RIBEIRO'
            },
            {
                CCLIENTE: 2,
                CNOMCLI: 'DIOGO CERCHIARO'
            },
            {
                CCLIENTE: 3,
                CNOMCLI: 'VLAMIR IENNE'
            },
        ]
    }

    render() {
        return (
            <View style={s.container}>
                <FlatList data={this.state.clientes} keyExtractor={cliente => `${cliente.CCLIENTE}`}
                    renderItem={({ item }) => <Clientes key={item.CCLIENTE} {...item} />} />
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF'
    }
})

export default BaixaItens

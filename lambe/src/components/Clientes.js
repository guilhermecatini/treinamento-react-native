import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native'

class Clientes extends Component {

    render() {
        let view = null
        // if (this.props.clientes) {
        //     view = this.props.map((item, index) => {
        //         return (
        //             <View style={s.commentContainer} key={index}>
        //                 <Text style={s.CCLIENTE}>{item.CNOMCLI}</Text>
        //             </View>
        //         )
        //     })
        // }

        return (
            <View style={s.container}>
                <Text style={s.nomeCliente}>{this.props.CNOMCLI}</Text>
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginLeft: 10
    },
    nomeCliente: {
        fontSize: 16,
        fontWeight: 'bold'
    }
    // container: {
    //     flex: 1,
    //     margin: 10
    // },
    // commentContainer: {
    //     flexDirection: 'row',
    //     marginTop: 5
    // },
    // nickname: {
    //     marginLeft: 5,
    //     fontWeight: 'bold',
    //     color: '#444'
    // },
    // comment: {
    //     color: '#555'
    // }
})

export default Clientes

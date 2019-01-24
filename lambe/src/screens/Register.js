import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={s.container}>
                <TextInput placeholder="Nome" style={s.input} autoFocus={true}
                    value={this.state.name} onChangeText={name => { this.setState({ name }) }} />
                <TextInput placeholder="E-Mail" style={s.input} keyboardType="email-address"
                    value={this.state.email} onChangeText={email => { this.setState({ email }) }} />
                <TextInput placeholder="Senha" style={s.input} secureTextEntry={true}
                    value={this.state.password} onChangeText={password => { this.setState({ password }) }} />
                <TouchableOpacity style={s.button} onPress={() => { }}>
                    <Text style={s.buttonText}>Registrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})

export default Register

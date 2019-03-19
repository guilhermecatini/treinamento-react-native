import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions/userAction'

class Login extends Component {
    state = {
        name: 'Temporário',
        email: '',
        password: ''
    }

    login = () => {
        this.props.onLogin({ ...this.state })
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={s.container}>
                <TextInput placeholder="E-Mail" style={s.input} autoFocus={true} keyboardType="email-address"
                    value={this.state.email} onChangeText={email => { this.setState({ email }) }} />
                <TextInput placeholder="Senha" style={s.input} secureTextEntry={true}
                    value={this.state.password} onChangeText={password => { this.setState({ password }) }} />
                <TouchableOpacity onPress={this.login} style={s.button}>
                    <Text style={s.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }} style={s.button}>
                    <Text style={s.buttonText}>Criar nova conta</Text>
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
        borderColor: '#333'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

// export default Login

export default connect(null, mapDispatchToProps)(Login)

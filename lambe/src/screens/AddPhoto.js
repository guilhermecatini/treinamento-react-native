import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: ''
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        Alert.alert('Imagem adicionada', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={s.container}>
                    <Text style={s.title}>Compartilhe uma imagem</Text>
                    <View style={s.imageContainer}>
                        <Image source={this.state.image} style={s.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={s.button}>
                        <Text style={s.buttonText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder="Algum comentário para a foto?" style={s.input}
                        value={this.state.comment} onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save} style={s.button}>
                        <Text style={s.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
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
        width: '90%'
    }
})

export default AddPhoto

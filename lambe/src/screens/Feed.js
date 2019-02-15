import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Rafael Pereira Filho',
                email: 'rafaelprrflh@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'John Ray Sheldon',
                        comment: 'Stunning'
                    },
                    {
                        nickname: 'John Doe',
                        comment: 'Se não curte?'
                    }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Vlamir Ienne',
                email: 'vlamirienne@gmail.com',
                image: require('../../assets/imgs/bw.jpg'),
                comments: [
                    {
                        nickname: 'Vanderlei Ienne',
                        comment: 'Vários Projetos!!!!'
                    },
                    {
                        nickname: 'Claudemir Silva',
                        comment: 'Comprou o KendoUI?'
                    }
                ]
            }
        ]
    }



    render() {
        return (
            <View style={s.container}>
                <Header />
                <FlatList data={this.state.posts} keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed

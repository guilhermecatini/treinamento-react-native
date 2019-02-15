import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native'

class Comments extends Component {
    render() {
        let view = null
        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={s.commentContainer} key={index}>
                        <Text style={s.nickname}>{item.nickname}: </Text>
                        <Text style={s.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }

        return (
            <View style={s.container}>
                {view}
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    }
})

export default Comments

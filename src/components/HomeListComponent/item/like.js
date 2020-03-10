import React, {memo} from 'react'
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default LikeComponent = memo(({liked}) => {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <Text style={{
                color: 'rgb(251,109,58)',
                fontSize: 24
            }}>
                {liked ? '\u2665' : '\u2661'}
            </Text>
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        backgroundColor: 'rgb(247,247,247)',
        borderRadius: 10
    },
    heart: {
        width: 20,
        height: 20,
        backgroundColor: '#6427d1',
    },
    heartShape: {
        width: 30,
        height: 45,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#6427d1',
    },
    leftHeart: {
        transform: [
            {rotate: '-45deg'}
        ],
        left: 5
    },
    rightHeart: {
        transform: [
            {rotate: '45deg'}
        ],
        right: 5
    }
})
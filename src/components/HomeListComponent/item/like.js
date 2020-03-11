import React, {memo} from 'react'
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import HeartFullIcon from '../../../assets/img/HeartFullIcon/button.png'
import HeartEmptyIcon from '../../../assets/img/HeartEmptyIcon/heartDefault.png'

export default LikeComponent = memo(({liked}) => {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <Image source={liked ? HeartFullIcon : HeartEmptyIcon}/>
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
    },
    heart: {
        width: 20,
        height: 20,
        backgroundColor: '#6427d1',
    },
})
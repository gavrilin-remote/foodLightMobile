import React, {memo} from 'react'
import {View, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native'
import LikeComponent from './like'
import DishDescription from '../../common/DishDescription'

export const FoodItem = memo(({item, navigateToDish}) => {
    const {
        image,
        id,
        liked
    } = item;
    return (
        <View>
            <TouchableOpacity onPress={() => navigateToDish(id)}>
                <ImageBackground imageStyle={{borderRadius: 5}} style={styles.image} source={image}>
                    <LikeComponent liked={liked}/>
                </ImageBackground>
            </TouchableOpacity>
            <DishDescription item={item}/>
        </View>
    )
});

export const FoodItemSeparator = memo(() => {
    return (
        <View style={styles.separator}/>
    )
});

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 192,
    },
    separator: {
        backgroundColor: 'rgba(103,103,103,0.1)',
        height: 1,
        width: '100%',
        marginVertical: 15,
        marginTop:10
    }
});


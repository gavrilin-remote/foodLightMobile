import React, {memo} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native';

export default StarterItem = memo(({item}) => {
    const {image, name, ingredients, price} = item;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.textTitle}>{name}</Text>
                <Text style={styles.textIngredients}>{ingredients.join(', ')}</Text>
                <Text style={styles.textPrice}>${price}</Text>
            </View>
        </View>
    )
})
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 112,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 5
    },
    image: {
        height: '100%',
        width: 100,
        borderRadius: 5
    },
    descriptionWrapper: {
        paddingLeft: 10,
        height: '100%',
        justifyContent: 'space-around'
    },
    textTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    textPrice: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    },
    textIngredients: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: 'rgb(156,158,175)',
        maxWidth: '90%'
    }
});
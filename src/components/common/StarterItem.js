import React, {memo} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native';

export default StarterItem = memo(({item}) => {
    const {image, name, ingredients, price} = item;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.textBold}>{name}</Text>
                <Text style={styles.textIngredients}>{ingredients.join(', ')}</Text>
                <Text style={styles.textBold}>${price}</Text>
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
    textBold: {
        fontSize: 18, fontWeight: 'bold'
    },
    textIngredients: {
        fontSize: 16, color: 'rgb(156,158,175)', maxWidth: '90%'
    }
});
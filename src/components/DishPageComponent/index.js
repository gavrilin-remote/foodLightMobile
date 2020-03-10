import React, {memo} from 'react'
import {View, FlatList, Text, ImageBackground, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context';
import _ from 'lodash'
import BackButtonIcon from '../../assets/img/BackButtonIcon/button.png'
import ShareButtonIcon from '../../assets/img/ShareButtonIcon/share.png'
import HeartEmptyIcon from '../../assets/img/HeartEmptyIcon/heartDefault.png'

import TelephoneIcon from '../../assets/img/TelephoneIcon/telephone4.png'
import ReceiptIcon from '../../assets/img/ReceiptIcon/receipt.png'
import InfoIcon from '../../assets/img/InfoIcon/info.png'

import SearchIcon from '../../assets/img/SearchIcon/group25.png'

import DishDescription from '../common/DishDescription'
import StarterItem from '../common/StarterItem'

export default DishPageComponent = memo(({dish, navigation}) => {
    if (!dish) {
        return null
    }
    const {
        image,
        starters
    } = dish;
    const insets = useSafeArea();

    return (
        <View style={styles.container}>
            <ImageBackground
                style={[styles.image, {height: 264 + insets.top}]}
                resizeMode={'cover'}
                source={image}
            >
                <TouchableOpacity
                    onPress={navigation.goBack}
                    style={[styles.headerActionButton, {top: insets.top || 30, left: 20,}]}
                >
                    <Image source={BackButtonIcon}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.headerActionButton, {top: insets.top || 30, right: 80}]}
                >
                    <Image source={ShareButtonIcon}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.headerActionButton, {top: insets.top || 30, right: 20}]}
                >
                    <Image source={HeartEmptyIcon}/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.contentWrapper}>
                <DishDescription item={dish}/>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={TelephoneIcon}/>
                        <Text style={styles.buttonText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={InfoIcon}/>
                        <Text style={styles.buttonText}>info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={ReceiptIcon}/>
                        <Text style={styles.buttonText}>enquiry</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.startersHeader}>
                    <Text style={styles.startersHeaderText}>Starters</Text>
                    <Image source={SearchIcon}/>
                </View>
            </View>
            <FlatList
                style={styles.flatList}
                data={starters}
                keyExtractor={(item) => _.uniqueId(item.name)}
                renderItem={(props) => <StarterItem {...props} />}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    image: {
        width: '100%',
    },
    container: {
        flex: 1
    },
    flatList: {
        padding: 20,
        paddingTop: 10,
    },
    headerActionButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentWrapper: {
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: 'rgba(141,146,163,0.1)',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        flex: 0.3
    },
    buttonWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        paddingLeft: 10,
        textTransform: 'uppercase',
        color: 'rgb(87,85,113)',
        fontWeight: 'bold'
    },
    startersHeader: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'
    },
    startersHeaderText: {
        fontSize: 18
    }
});
import React, {memo} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import styles from './styles'
import FiltersComponent from '../common/Filters'
import SearchBar from '../common/SearchBar'
import {FoodItem, FoodItemSeparator} from './item'

import RightIcon from '../../assets/img/IconRight/iconRight.png'
import ArrowDown from '../../assets/img/ArrowDown/arrow.png'

export default HomeListComponent = memo(({foodList, navigateToDish}) => {
    const {container, titleContainer, titleText, textDate, textDeliveringOn, dateContainer} = styles;
    return (
        <View style={container}>
            <View style={titleContainer}>
                <Text style={titleText}>244 Jack Daniels Road</Text>
                <TouchableOpacity><Image source={RightIcon}/></TouchableOpacity>
            </View>
            <View style={dateContainer}>
                <Text style={textDeliveringOn}>Delivering on</Text>
                <Text style={textDate}> Sun, 26th jan
                    03:15PM </Text>
                <TouchableOpacity><Image source={ArrowDown}/></TouchableOpacity>
            </View>
            <FiltersComponent tags={['Delivery', 'Collection']}/>
            <SearchBar/>
            <FlatList
                data={foodList}
                renderItem={(props) => <FoodItem navigateToDish={navigateToDish} {...props} />}
                ItemSeparatorComponent={FoodItemSeparator}
            />
        </View>
    )
});
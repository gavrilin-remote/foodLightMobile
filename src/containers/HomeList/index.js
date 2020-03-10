import React, {memo} from 'react'
import HomeListComponent from '../../components/HomeListComponent'
import {connect} from 'react-redux';
import {StatusBar} from 'react-native';

const HomeListContainer = memo(({foodList, navigation}) => {

    const navigateToDish = (dishId) => {
        navigation.navigate('Dish', {dishId})
    };

    return (
        <>
            <StatusBar hidden/>
            <HomeListComponent
                foodList={foodList}
                navigateToDish={navigateToDish}
            />
        </>
    )
});

const mapStateToProps = ({FoodList: {foodList}}) => ({foodList});

export default connect(mapStateToProps)(HomeListContainer)

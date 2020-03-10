import React, {memo} from 'react'
import {connect} from 'react-redux'
import DishPageComponent from '../../components/DishPageComponent';
import {StatusBar} from 'react-native';

const DishPage = memo(({dish, navigation}) => {
    return (
        <>
            <StatusBar
                translucent
                hidden={false}
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <DishPageComponent navigation={navigation} dish={dish}/>
        </>
    )
});

const mapStatToProps = ({FoodList: {foodList}}, screenProps) => {
    const {dishId} = screenProps.route.params;
    return {
        dish: foodList.find(({id}) => id === dishId)
    }
};

export default connect(mapStatToProps)(DishPage)
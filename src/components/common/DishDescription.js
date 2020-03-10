import React, {memo} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import _ from "lodash";
import StarIcon from '../../assets/img/StarIcon/shape.png'

const renderKitchens = (kitchens) => {
    return (
        <View style={styles.kitchensWrapper}>
            {
                kitchens.map((kitchen, index) => {
                    const isLast = index === kitchens.length - 1;
                    return (
                        <Text
                            key={_.uniqueId()}
                            style={styles.kitchenText}
                        >
                            {`${kitchen}${isLast ? '' : ' | '}`}
                        </Text>
                    )
                })
            }
        </View>
    )
};

export default DishDescription = memo(({item}) => {
    const {
        title, kitchens, rating,
        orders,
        bulkOrders,
        subscriptions,
    } = item;
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.kitchenRatingWrapper}>
                {renderKitchens(kitchens)}
                <Image style={styles.star} source={StarIcon}/>
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.ordersText}>{`${orders} orders \u2022 `}</Text>
                <Text style={styles.ordersText}>{`${bulkOrders} bulk orders \u2022 `}</Text>
                <Text style={styles.ordersText}>{`${subscriptions} subscriptions`}</Text>
            </View>
        </>
    )
});

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    kitchenRatingWrapper: {
        flexDirection: 'row',
        paddingBottom: 10,
        alignItems: 'center'
    },
    kitchensWrapper: {
        flexDirection: 'row',
        paddingRight: 20
    },
    kitchenText: {
        color: 'rgb(141,146,163)',
        fontSize: 18,
    },
    ratingText: {
        paddingLeft: 5,
        fontSize: 16
    },
    ordersText: {
        color: 'rgb(28,25,63)'
    },
    star: {
        width: 13, height: 13
    },
});
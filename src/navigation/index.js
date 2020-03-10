import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeListContainer from '../containers/HomeList'
import DishPageContainer from '../containers/DishPage'
import BlankPage from '../containers/BlankPage'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from '../assets/img/HomeIcon/homeActive.png'
import OrdersIcon from '../assets/img/OrdersIcon/ordersDefault.png'
import NotificationsIcon from '../assets/img/NotificationsIcon/notificationsDefault.png'
import ProfileIcon from '../assets/img/ProfileIcon/profileDefault.png'

import MyTabBar from './myTabs'

export const HomeStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="List" component={HomeListContainer}/>
            <Stack.Screen name="Dish" component={DishPageContainer}/>
        </Stack.Navigator>
    )
};


export const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props}/>}>
            <Tab.Screen name="Home" options={{icon: HomeIcon}} component={HomeStack}/>
            <Tab.Screen name="Orders" options={{icon: OrdersIcon}} component={BlankPage}/>
            <Tab.Screen name="Notifications" options={{icon: NotificationsIcon}} component={BlankPage}/>
            <Tab.Screen name="Profile" options={{icon: ProfileIcon}} component={BlankPage}/>
        </Tab.Navigator>
    );
};


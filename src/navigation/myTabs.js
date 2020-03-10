import React from 'react'
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native'

const ACTIVE_ICON_COLOR = 'rgb(59,85,243)';
const INACTIVE_ICON_COLOR = '#000000';

export default function MyTabBar({state, descriptors, navigation}) {
    return (
        <View style={{flexDirection: 'row'}}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={style.tabButton}
                    >
                        <Image style={{
                            tintColor: isFocused ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR
                        }} source={options.icon}/>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const style = StyleSheet.create({
        tabButton: {
            flex: 1,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
);
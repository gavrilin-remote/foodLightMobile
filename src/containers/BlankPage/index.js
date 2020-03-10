import React, {memo} from 'react'
import {View, Text} from 'react-native'

export default memo(() => (
    <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text>
            See in next release
        </Text>
    </View>
))
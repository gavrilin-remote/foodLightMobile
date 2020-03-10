import React, {memo, useState} from 'react'
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native'

export default FiltersComponent = memo(({tags}) => {
    const [active, setActive] = useState(0);
    return (
        <View style={styles.container}>
            {tags.map((tag, index) => {
                const isActive = active === index;
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setActive(index)}
                        style={[
                            styles.tagContainer,
                            isActive && {backgroundColor: 'rgb(59,85,243)'},
                            index === 0 && {marginLeft: 0}
                        ]}
                    >
                        <Text style={[styles.tagText, isActive && {color: '#fff', fontWeight: 'bold'}]}>{tag}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    tagContainer: {
        padding: 10,
        marginLeft: 15,
        borderRadius: 20,
        backgroundColor: 'transparent'
    },
    tagText: {
        fontSize: 16,
        color: '#000'
    }
});
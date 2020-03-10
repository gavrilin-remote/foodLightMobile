import React, {memo} from 'react'
import {View, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native'
import HamburgerMenu from '../../assets/img/HamburgerMenu/hamburgerMenuCopy.png'
import SearchIcon from '../../assets/img/SearchIcon/group25.png'

export default SearchBar = memo(() => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image source={SearchIcon}/>
                <TextInput
                    placeholder={'Search for dishes, kitchens…'}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity>
                <Image source={HamburgerMenu}/>
            </TouchableOpacity>
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 5,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        paddingLeft: 15,
        width: '90%',
    },
    inputContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        width: '90%',
        backgroundColor: 'rgb(248,248,248)',
        minHeight: 40,
        alignItems: 'center'
    }
});
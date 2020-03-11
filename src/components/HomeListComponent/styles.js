import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    titleContainer: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular'
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textDeliveringOn: {
        textTransform: 'uppercase',
        color: 'grey',
        fontWeight: 'bold',
        fontFamily: 'Poppins-SemiBold'
    },
    textDate: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'rgb(251,109,58)',
        fontFamily: 'Poppins-SemiBold'
    }
})
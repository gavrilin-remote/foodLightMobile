/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {BottomTabs} from './src/navigation'
import {Provider} from 'react-redux'
import store from './src/redux'

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <BottomTabs/>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};


export default App;

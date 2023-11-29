import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from './constants';
import SplashScreen from '../views/intro/SplashScreen';


const Stack = createNativeStackNavigator();

const SplashNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={SCREENS.INTRO.SPLASH.ID} component={SplashScreen} options={{header: () => null}}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default SplashNavigation;
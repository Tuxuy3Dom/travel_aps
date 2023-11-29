import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import AuthStack from './auth-stack/AuthStack';
import HomeStack from './home-stack/HomeStack';
import auth from '@react-native-firebase/auth';

import { AuthContext } from './AuthProvider';
import SplashScreen from '../views/intro/SplashScreen';

DefaultTheme.colors.background = '#fff';

export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const [isSplashDone, setIsSplashDone] = useState(false);

    useEffect(() => {
        // Symulacja ekranu Splash przez 5 sekund
        setTimeout(() => {
            setIsSplashDone(true);
        }, 5000);
    }, []);

    function onAuthStateChanged(newUser) {
        if (newUser) {
            setUser(newUser);
        }
        
        if (initializing) {
            setInitializing(false);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    })

    if (initializing) {
        return null;
    }

    if (!isSplashDone) {
        // Wyświetl ekran Splash, dopóki nie jest gotowy
        return (
            <NavigationContainer>
                <SplashScreen />
            </NavigationContainer>
        );
    }else {
        return (
            <NavigationContainer>
                {user ? <HomeStack /> : <AuthStack />}
            </NavigationContainer>
        );
    }
}
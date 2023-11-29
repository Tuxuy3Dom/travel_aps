import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import onBoarding from "../../views/auth/on_boarding";
import LoginScreen from "../../views/auth/login";
import SignUpScreen from "../../views/auth/sign_up";

import { SCREENS } from "../constants";

const Stack = createStackNavigator();

export default function AuthStack() {
    return <Stack.Navigator 
    initialRouteName={SCREENS.AUTH.SIGN_UP.ID} 
    screenOptions={{headerShown: false}}
    >
        <Stack.Screen name={SCREENS.AUTH.ONBOARDING.ID} component={onBoarding} />
        <Stack.Screen name={SCREENS.AUTH.SIGN_UP.ID} component={SignUpScreen} />
        <Stack.Screen name={SCREENS.AUTH.LOGIN.ID} component={LoginScreen} />
    </Stack.Navigator>
}
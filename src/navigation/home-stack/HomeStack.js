import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from "../../views/home/HomeScreen";
import { SCREENS } from "../constants";

const Stack = createStackNavigator();

export default function HomeStack() {
    return <Stack.Navigator initialRouteName={SCREENS.HOME.DASHBOARD.ID}>
        <Stack.Screen name={SCREENS.HOME.DASHBOARD.ID} component={HomeView} />
    </Stack.Navigator>
}
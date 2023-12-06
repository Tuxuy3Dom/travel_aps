import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import * as RNLocalize from 'react-native-localize';

import LangProvider, { LangModeProvider } from "./src/lang/LangProvider";
import Routes from './src/navigation/Routes';

export default function App(){
    const getLocales = RNLocalize.getLocales();
    const getCurrencies = RNLocalize.getCurrencies();

    const get = {getLocales}

    const Stack = createStackNavigator();

    return (
    <LangModeProvider>
        <LangProvider>
            <Routes />
        </LangProvider>
    </LangModeProvider>
    );
}


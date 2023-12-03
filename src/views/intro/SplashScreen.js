import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.MAIN_COLORS.ACCENT_2,
    }
});

export default function SplashScreen() {
    return (
        <View style={styles.root}>
            <Text>Splash Screen</Text>
        </View>
    );
}
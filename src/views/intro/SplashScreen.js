import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default function SplashScreen() {
    return (
        <View style={styles.root}>
            <Text>Splash Screen</Text>
        </View>
    );
}
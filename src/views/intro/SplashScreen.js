import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../../styles';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.MAIN_COLORS.ACCENT_2,
    },
    IrishGlover: {
        fontFamily: 'IrishGrover-Regular',
        fontSize: typography.FONT_SIZE_36,
        color: '#000000',
    }
});

export default function SplashScreen() {
    return (
        <View style={styles.root}>
            <Text style={styles.IrishGlover}>TravelAPS</Text>
        </View>
    );
}
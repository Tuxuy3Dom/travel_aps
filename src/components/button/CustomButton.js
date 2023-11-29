import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import { colors, constants, spacing, typography } from '../../styles';

import PropTypes from 'prop-types';

import GoForward from '../../assets/svg/icons/goForward.svg';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        borderRadius: constants.BORDER_RADIUS.BUTTON,
        padding: spacing.SCALE_12,
    },
    label: {
        ...typography.FONT_BOLD,
    },
    actionContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    leftActionContainer: {
        alignItems: 'flex-start',
    }
});

export default function CustomButton({ onPress, label, isChevronDisplayes = false }) {
    return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.actionContainer}/>
            <Text style={styles.label}>{ label }</Text>
            <View style={styles.actionContainer}>
                {isChevronDisplayes && <GoForward />}
            </View>
        </View>
    </TouchableOpacity>
    );
}

CustomButton.propTypes = {
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    isChevronDisplayes: PropTypes.bool,
    onPress: PropTypes.func,
}
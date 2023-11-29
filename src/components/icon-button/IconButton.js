import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { spacing, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: spacing.SCALE_12 * 2,
        padding: spacing.SCALE_12,
        borderColor: colors.ADDITIONAL_COLORS.GREY.MAIN,
    }
});

export default function IconButton({ children, activeOpacity = 0.5, onPress = () => {}, TouchableOpacityProps = {}, ContainerProps = {} }) {
    return (
    <TouchableOpacity style={styles.container} activeOpacity={activeOpacity} onPress={onPress} {...TouchableOpacityProps}>
        <View {...ContainerProps}>{children}</View>
    </TouchableOpacity>
    );
}

IconButton.propTypes = {
    children: PropTypes.element.isRequired,
    onPress: PropTypes.func,
}
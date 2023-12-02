import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import { colors, spacing, constants, typography } from '../../styles';

const styles = StyleSheet.create({
    container: {
        marginVertical: spacing.SCALE_8,
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: spacing.SCALE_8,
        paddingVertical: spacing.SCALE_8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: colors.ADDITIONAL_COLORS.TEXT.HINT,
        paddingTop: spacing.SCALE_12,
        paddingBottom: spacing.SCALE_12,
        paddingLeft: spacing.SCALE_8,
        paddingRight: spacing.SCALE_8,
        borderRadius: constants.BORDER_RADIUS.INPUT,
    },
    focus: {
        borderColor: colors.MAIN_COLORS.SECONDARY,
        borderRadius: constants.BORDER_RADIUS.INPUT,
    },
    label: {
        color: colors.ADDITIONAL_COLORS.HINT,
        fontSize: typography.FONT_SIZE_12,
    },
    action: {
        fontSize: typography.FONT_SIZE_12,
        ...typography.FONT_BOLD,
    },
});

export default function TextField({ style, placeholder, error, label, actionLabel, action = () => undefined, ...rest } ) {
    const [focus, setFocus] = useState(false);

    return (
    <View style={styles.container}>
        {(actionLabel || label) && (
            <View style={styles.actionContainer}>
                <Text style={styles.label}>{label}</Text>
                {actionLabel && <Text style={styles.action}>{actionLabel}</Text>}
            </View>
        )}
        <TextInput
        placeholderTextColor={colors.ADDITIONAL_COLORS.HINT}
            selectionColor={colors.MAIN_COLORS.SECONDARY}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...rest}
            style={[styles.textInput, focus ? styles.focus : {} ]}
            />
    </View>
    );
}
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors, spacing, typography } from '../../../styles';

export default StyleSheet.create({
    root: {
        height: '100%',

    },
    container: {
        flex: 1,
        paddingHorizontal: spacing.SCALE_18,
        paddingVertical: spacing.SCALE_18,
        justifyContent: "space-between",
    },
    skipButton: {
        color: colors.ADDITIONAL_COLORS.TEXT.HINT,
    },
    testButton: {
        color: 'red',
    },
    actionContainer: {
        alignItems: 'flex-end',
    },
    iconContainer: {
        alignItems: "center",

    },
    title: {
        ...typography.FONT_BOLD,
        textAlign: 'center',
        fontSize: typography.FONT_SIZE_18,
        paddingVertical: spacing.SCALE_8
    },
    subTitle: {
        textAlign: 'center',
        color: colors.ADDITIONAL_COLORS.TEXT.HINT,
        paddingVertical: spacing.SCALE_8
    },
});
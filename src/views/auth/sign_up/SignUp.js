import React, {useContext} from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import Button from "../../../components/button/CustomButton";

import { colors, spacing, typography } from '../../../styles';
import { AuthContext } from "../../../navigation/AuthProvider";
import IconButton from "../../../components/icon-button/IconButton";
import BackIcon from '../../../assets/svg/icons/Back.svg';

const styles = StyleSheet.create({
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

export default function SignUpScreen() {
    const { register } = useContext(AuthContext);

    return (     
    <SafeAreaView>
        <View>
            <IconButton onPress={() => {
                
            }}>
                <BackIcon />
            </IconButton>
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Subtitle</Text>
        <Button label={'Create Account'} isChevronDisplayes={true} />

    </SafeAreaView>
    );
}
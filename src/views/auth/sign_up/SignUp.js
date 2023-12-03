import React, {useContext} from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { Controller, useForm, onChange } from "react-hook-form";
import { FormattedMessage } from "react-intl";

import Button from "../../../components/button/CustomButton";
import TextField from "../../../components/text-field/TextField";

import { colors, spacing, typography } from '../../../styles';
import { AuthContext, AuthProvider } from "../../../navigation/AuthProvider";
import IconButton from "../../../components/icon-button/IconButton";
import BackIcon from '../../../assets/svg/icons/Back.svg';

const styles = StyleSheet.create({
    root: {
        height: '100%',
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
    actionContainer: {
        alignItems: "flex-start",
    },
    container: {
        paddingVertical: spacing.SCALE_18,
        paddingHorizontal: spacing.SCALE_18,
        flex: 1,
        justifyContent: 'space-between',
    }
});

export default function SignUpScreen({ navigation }) {

    const { register } = useContext(AuthContext);

    const { control, handleSubmit, errors } = useForm();

    function onSubmit({ email, password, confirmPassword }){
        try {
            register(email, password);
        } catch (e) {
            console.log(e);
        }
    }

    return (     
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            <View style={styles.actionContainer}>
                <IconButton onPress={() => navigation.goBack()}>
                    <BackIcon />
                </IconButton>
            </View>
            <View>
            <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subTitle}>Subtitle</Text>
            </View>
            <View>
                <Controller 
                    name={'email'} 
                    control={control}
                    defaultValue={''} 
                    render={({ onChange, onBlur, value }) => (
                        <TextField 
                        autoCapitalize = {'none'}
                        label={'Email Address'} 
                        value={value} 
                        onBlur={onBlur} 
                        onChangeText={(value) => onChange(value)}
                        // error = {errors.email}
                        />
                    )} 
                />
                <Controller 
                    name={'password'} 
                    control={control} 
                    defaultValue={''}
                    render={({ onChange, onBlur, value }) => (
                        <TextField 
                        secureTextEntry = {true}
                        label={'Password'}
                        value={value} 
                        onBlur={onBlur} 
                        onChangeText={(value) => onChange(value)}
                        // error = {errors.password}
                        />
                    )} 
                />
                <Controller 
                    name={'confirmPassword'} 
                    control={control} 
                    defaultValue={''}
                    render={({ onChange, onBlur, value }) => (
                        <TextField 
                        secureTextEntry = {true}
                        label={'Confirm Password'} 
                        value={value} 
                        onBlur={onBlur} 
                        onChangeText={(value) => onChange(value)}
                        // error = {errors.confirmPassword}
                        />
                    )} 
                />
            </View>
            <Button label={'Create Account'} isChevronDisplayes={true} onPress={handleSubmit(onSubmit)}/>
        </View>
    </SafeAreaView>
    );
}
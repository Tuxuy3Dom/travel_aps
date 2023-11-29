import React, { useContext } from "react";
import { Text, Button, SafeAreaView } from "react-native";

import { AuthContext } from "../../../navigation/AuthProvider";

export default function LoginScreen() {
    const { login } = useContext(AuthContext);

    return (
    <SafeAreaView>
        <Text>Login</Text>
        <Button title={'login'} onPress={() => login('test@gmail.com', 'test')}/>
    </SafeAreaView>
    );
}
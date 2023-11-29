import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native'
import { FormattedMessage } from 'react-intl';

import { AuthContext } from '../../navigation/AuthProvider';

export default function HomeView({ navigation }) {
    const { logout } = useContext(AuthContext);

    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
        <Text><FormattedMessage defaultMessage={"Hello"} id={'hello'}/></Text>
        <Button title={"Logout"} onPress={logout}/>
    </View>
    );
}
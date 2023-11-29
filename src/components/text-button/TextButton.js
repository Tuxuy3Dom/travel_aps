import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';



export default function TextButton({ label, onPress = () => undefined, TextProps = {}, TouchableProps = {} }) {
    return (
    <TouchableOpacity {...TouchableProps} onPress={onPress}>
        <Text {...TextProps}>{label}</Text>
    </TouchableOpacity> 
    );
}

TextButton.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired, 
    TextProps: PropTypes.object,
    TouchableProps: PropTypes.object,
    onPress: PropTypes.func,
}
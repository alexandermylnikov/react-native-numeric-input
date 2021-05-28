import React, { Component } from 'react';
import {
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text
} from 'react-native';

function _handlePress(callback){
    requestAnimationFrame(callback)
}


const Button = (props) => {
    return (
        Platform.OS === 'ios'
        ? <TouchableOpacity disabled={props.disabled} style={props.style} onPress={() => _handlePress(props.onPress)}>{props.children}</TouchableOpacity> 
        : <TouchableNativeFeedback  background={JSON.stringify(props.style[1]) !== '{}' ? TouchableNativeFeedback.Ripple(null, true, props.style[0].height / 2) : TouchableNativeFeedback.Ripple()} disabled={props.disabled} onPress={() => _handlePress(props.onPress)}><View style={props.style}>{props.children}</View></TouchableNativeFeedback>
    )
}

Button.defaultProps = {
    onPress : () => {}
}

export default Button;

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


import images from '../commonconfig/images';
import { CSS_STYLES, FONT_STYLES } from '../commonconfig/constStyle';
import { useTheme } from '../commonconfig/ThemeContext';

export default function CustomCheckBox({
    containerStyle,
    onPress,
    square,
    isChecked,
    touchableStyle,
    imageStyle,
    // lable1container,
    // label1, subText1,
    disabled,
    label,
    label2,
    textStyle,
    // subText, subTextStyle
}) {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, containerStyle]}>
            {/* {label1 ? <View style={[{ flex: 1 }, lable1container]}>
                <Text style={[{ color: '#090909', flex: 1 }, textStyle]}>{label1}</Text>
                {subText1 ? <Text style={[{ color: '#090909', opacity: .5, fontSize: 11, flex: 1 }, subTextStyle]}>{subText1}</Text> : null}
            </View> : null} */}
            <TouchableOpacity onPress={onPress}
                disabled={disabled}
                style={[{ marginRight: 5, ...CSS_STYLES.cf2 }, touchableStyle]}>
                {label2 ? <Text style={[{ fontSize: 14, color: theme.text, flex: 1 }, textStyle]}>{label2}</Text> : null}

                {square ? <Image source={isChecked ? images.checked : images.checkbox} style={[{ height: 20, width: 20, resizeMode: 'contain', }, imageStyle]} />
                    : <Image source={isChecked ? images.radiofill : images.radio} style={[{ height: 20, width: 20, resizeMode: 'contain', }, imageStyle]} />}
                {label ?
                    <View style={{}}>
                        <Text style={[{ fontSize: 14, color: theme.text, flex: 1, marginLeft: 5 }, textStyle]}>{label}</Text>
                        {/* {subText ? <Text style={[{ color: '#090909', opacity: .5, fontSize: 11, flex: 1 }, subTextStyle]}>{subText}</Text> : null} */}
                    </View> : null}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

    }
})
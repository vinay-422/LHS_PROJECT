import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    ActivityIndicator,
    StyleSheet,
    ViewStyle,
    TextStyle
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../commonconfig/ThemeContext';
import { LIGHT_THEME, THEME_COLOR } from '../commonconfig/constStyle';

interface CustomButtonProps {
    gradientStyle?: ViewStyle;
    colors?: string[];
    onPress: () => void;
    title: string;
    titleStyle?: TextStyle;
    style?: ViewStyle;
    loading?: boolean;
    disabled?: boolean;
    border?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    gradientStyle,
    colors = [LIGHT_THEME, THEME_COLOR],
    onPress,
    title,
    titleStyle,
    style,
    loading = false,
    disabled = false,
    border = false,
}) => {
    const { theme } = useTheme();
    return (
        <TouchableOpacity
            disabled={disabled}
            // style={[style]}
            onPress={onPress}
            style={[styles.navBtn, disabled && { opacity: .5 }, border && styles.borderStyle, style]}

        >
            {/*  <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={border ? ['transparent', 'transparent'] : colors}
                style={[styles.navBtn, border && styles.borderStyle, gradientStyle]}
            >*/}
            {loading ? (
                <View style={styles.loadingContainer}>
                    <Text style={[styles.titleStylePrime, titleStyle]}>{title}</Text>
                    <ActivityIndicator size="small" color="#fff" style={{ marginLeft: 5 }} />
                </View>
            ) : (
                <Text style={[styles.titleStylePrime, border && styles.borderTitle, titleStyle]}>
                    {title}
                </Text>
            )}
            {/* </LinearGradient>*/}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    titleStylePrime: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '800',
    },
    borderStyle: {
        borderWidth: 1,
        borderColor: THEME_COLOR,
        backgroundColor: 'transparent',
    },
    navBtn: {
        backgroundColor: THEME_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 40,
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    borderTitle: {
        color: THEME_COLOR,
        fontWeight: '500',
    },

});

export default CustomButton;



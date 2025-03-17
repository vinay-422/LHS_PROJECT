import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, Platform, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
    FadeIn,
    FadeOut,
    withTiming,
    useSharedValue,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import images from '../commonconfig/images';
import { hp, wp } from '../utils/Common';

const Splash = () => {
    const navigation = useNavigation();

    const scale = useSharedValue(0.5);
    const opacity = useSharedValue(0);

    useEffect(() => {
        scale.value = withTiming(1, {
            duration: 1500,
            easing: Easing.out(Easing.exp),
        });
        opacity.value = withTiming(1, { duration: 2000 });

        setTimeout(() => {
            navigation.replace("Walkthrough");
        }, 3000);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
    }));

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <Animated.View
                entering={FadeIn.duration(1500)}
                exiting={FadeOut.duration(1700)}>
                <Animated.View style={animatedStyle}>
                    <Image source={images.logo} style={styles.logo} />
                </Animated.View>
            </Animated.View>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: wp(80),
        height: hp(40),
        resizeMode: 'contain',
    },
});

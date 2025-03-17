import React, { useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    Image,
    SafeAreaView,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { hp, wp } from '../../utils/Common';
import images from '../../commonconfig/images';
import { useTheme } from '../../commonconfig/ThemeContext';
import { CSS_STYLES, FONT_STYLES, LIGHT_THEME, THEME_COLOR } from '../../commonconfig/constStyle';
import { CustomButton, TouchableItems } from '../../components';

const Walkthrough = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const flatListRef = useRef(null);
    const scrollX = useSharedValue(0);
    const { theme, switchTheme } = useTheme();
    const handleScroll = useAnimatedScrollHandler(event => {
        scrollX.value = event.contentOffset.x;
    });

    useEffect(() => {
      const interval = setInterval(() => {
        flatListRef.current?.scrollToOffset({
          offset:
            ((Math.round(scrollX.value / width) + 1) % slideList.length) * width,
          animated: true,
        });
      }, 5000);
      return () => clearInterval(interval);
    }, [width]);

    return (
        <SafeAreaView style={styles.container}>
            <Animated.FlatList
                ref={flatListRef}
                data={slideList}
                keyExtractor={item => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                renderItem={({ item, index }) => (
                    <View style={styles.slide}>

                        {/* { marginTop: index === slideList.length - 1 ? hp(3) : hp(10) }, */}
                        <Image source={item?.image} style={{ height: hp(60), width: wp(100), resizeMode: 'contain' }} />
                        <View style={{ paddingHorizontal: 15 }}>
                            <View style={{ height: 50, marginBottom: 20, }} />
                            <Text style={[FONT_STYLES.hb18]}>{item?.heading}</Text>
                            <Text style={[FONT_STYLES.h13, { marginTop: 8 }]}>{item.title}</Text>
                        </View>

                    </View>
                )}
            />

            <View style={styles.pagination}>
                {slideList.map((_, i) => {
                    const animatedStyle = useAnimatedStyle(() => {
                        const isActive = Math.round(scrollX.value / width) === i;
                        return {
                            backgroundColor: isActive ? THEME_COLOR : LIGHT_THEME,
                            borderWidth: isActive ? 3 : 0,
                            borderColor: isActive ? THEME_COLOR : 'transparent',
                        };
                    });

                    return (
                        <Animated.View key={i} style={[styles.dot, animatedStyle]} />
                    );
                })}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableItems text={'Skip'} textStyle={styles.skipText} onPress={() => navigation.replace('Login')} />
                <CustomButton title='Next' onPress={() => navigation.replace('')} />
            </View>
        </SafeAreaView>
    );
};

export default Walkthrough;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4EEFF',
        width: '100%',
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        top: hp(60) + 25,
        alignSelf: 'center',

    },
    dot: {
        width: wp(3),
        height: wp(3),
        borderRadius: wp(2.5),
        marginHorizontal: wp(1.5),
    },

    skipText: {
        ...FONT_STYLES.hb16,
        color: THEME_COLOR,
    },
    buttonContainer: {
        ...CSS_STYLES.cf2,
        paddingHorizontal: 15,
        bottom: hp(3),

    },
    slide: {
        width: wp(100),
    },

});

const slideList = [
    {
        id: 1,
        heading: 'Automating and Integrating Data',
        image: images.walkthrough1,
        title: `Automating and Integrating Data Lifecycle from Acquisition to Dissemination`,
    },
    {
        id: 2,
        heading: 'Automating and Integrating Data',
        image: images.walkthrough2,
        title: `A One Stop Data Hub to disseminate official statistics relating to all aspects of the economic, demographic and social activities`,
    },
    {
        id: 3,
        heading: 'Automating and Integrating Data',
        image: images.walkthrough3,
        title: `Automating and Integrating Data Lifecycle from Acquisition to Dissemination`,
    },
];

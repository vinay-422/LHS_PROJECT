import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import { ChatCard2, DetailCard, HomeCard } from '../../components/CustomCards';
import images from '../../commonconfig/images';
import { CSS_STYLES, FONT_STYLES, THEME_COLOR } from '../../commonconfig/constStyle';
import { useTheme } from '../../commonconfig/ThemeContext';
import { CustomButton, TouchableItems } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

const Home = ({navigation}) => {
    const { theme } = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>

            <SafeAreaView style={{ backgroundColor: THEME_COLOR, paddingHorizontal: 15, ...CSS_STYLES.cf2 }}>
                <View style={{ width: 65, height: 65, ...CSS_STYLES.c1, elevation: 10, borderRadius: 40, backgroundColor: '#fff' }}>
                    <Image source={images.profile} style={[CSS_STYLES.i6]} />
                    <TouchableItems image={images.hamburger}
                        imageStyle={[CSS_STYLES.i15, { tintColor: '#fff' }]}
                        containerStyle={styles.hamburgerContainer} 
                        onPress={()=>{navigation.navigate('Sidebar')}}/>
                </View>
                <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={{ ...FONT_STYLES.h12, color: '#fff' }}>Hello!</Text>
                    <Text style={{ ...FONT_STYLES.hb18, color: '#fff' }}>John doe</Text>

                </View>
                <View style={{ backgroundColor: 'rgba(255,255,255,.1)', borderRadius: 30, padding: 8 }}>
                    <Image source={images.bell} style={[CSS_STYLES.i25]} />
                    <View style={styles.notificationDot} />
                </View>
            </SafeAreaView>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <HomeCard heading={'Attendence'}
                    value={'Random text lorem ipsum dolro lorem lore ipsumdor loremh elroem'}
                    image={images.attendence}
                    onPress={()=>{navigation.navigate('Attendence')}}
                    valueStyle={{ marginTop: 5, opacity: .8, lineHeight: 16 }} />
                <HomeCard heading={'My Beat Plan'}
                    value={'Random text lorem ipsum dolro lorem lore ipsumdor loremh elroem'}
                    image={images.task}
                    valueStyle={{ marginTop: 5, opacity: .8, lineHeight: 16 }} />
                <HomeCard heading={'Reporting'}
                    value={'Random text lorem ipsum dolro lorem lore ipsumdor loremh elroem'}
                    image={images.report}
                    valueStyle={{ marginTop: 5, opacity: .8, lineHeight: 16 }} />
                <HomeCard heading={'Visit'}
                    value={'Random text lorem ipsum dolro lorem lore ipsumdor loremh elroem'}
                    image={images.store}
                    onPress={()=>{navigation.navigate('Visit')}}
                    valueStyle={{ marginTop: 5, opacity: .8, lineHeight: 16 }} />
               
                <View style={[CSS_STYLES.cf1, { marginTop: 20, gap: 15 }]}>
                    <Text style={{ ...FONT_STYLES.h13, color: THEME_COLOR }}>Your KYC is pending</Text>
                    <CustomButton title='Complete now' onPress={() => navigation.navigate('CompleteKyc')} />

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    hamburgerContainer: {
        backgroundColor: THEME_COLOR,
        borderRadius: 30,
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: 0, right: 0
    },
    notificationDot: {
        height: 10,
        width: 10,
        backgroundColor: 'red',
        borderRadius: 30,
        position: 'absolute',
        right: 10,
        top: 10
    },

})

export default Home;

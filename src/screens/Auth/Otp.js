
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CustomButton, CustomInput } from '../../components';
import images from '../../commonconfig/images';
import { hp, wp } from '../../utils/Common';
import { FONT_STYLES, THEME_COLOR } from '../../commonconfig/constStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

const Otp = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 30, backgroundColor: '#fff' }}>
            <Image source={images.logo} style={styles.logo} />
            <Text style={styles.Heading}>OTP Verification</Text>
            <CustomInput placeholder={'Enter OTP'} />
            <CustomButton title='Verify' onPress={() => navigation.navigate('ResetPass')} style={{ marginTop: hp(1.5) }} />
            <Text style={[FONT_STYLES.h13, { textAlign: 'center', marginTop: hp(2) }]}>Back to <Text style={styles.forgotText} onPress={()=>{navigation?.navigate('Login')}}>LOGIN</Text></Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
        marginTop: hp(2),
        width: wp(80),
        height: hp(10),
        resizeMode: 'contain',
    },
    Heading: {
        ...FONT_STYLES.hb22,
        textAlign: 'center',
        marginTop: hp(15),
        marginBottom: hp(2)
    },
    forgotText: {

        color: THEME_COLOR,
    },
})

export default Otp;

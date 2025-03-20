import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CustomButton, CustomInput } from '../../components';
import images from '../../commonconfig/images';
import { hp, wp } from '../../utils/Common';
import { FONT_STYLES, THEME_COLOR } from '../../commonconfig/constStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, paddingHorizontal: 30, backgroundColor: '#fff' }}>
            <Image source={images.logo} style={styles.logo} />
            <Text style={styles.Heading}>Login</Text>
            <CustomInput placeholder={'Email address'} />
            <CustomInput placeholder={'Password'} />
            <Text style={styles.forgotText} onPress={()=>{navigation?.navigate('ForgotPass')}}>Forgot Password?</Text>
            <CustomButton title='Login' onPress={() => navigation.replace('MyStack')} style={{ marginTop: hp(3) }} />

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
        ...FONT_STYLES.h13,
        color: THEME_COLOR,
        textAlign: 'right',
    },

})

export default Login;

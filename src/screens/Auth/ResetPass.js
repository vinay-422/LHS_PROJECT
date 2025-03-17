
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CustomButton, CustomInput } from '../../components';
import images from '../../commonconfig/images';
import { hp, wp } from '../../utils/Common';
import { FONT_STYLES, THEME_COLOR } from '../../commonconfig/constStyle';

const ResetPass = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 30, backgroundColor: '#fff' }}>
            <Image source={images.logo} style={styles.logo} />
            <Text style={styles.Heading}>Reset Password?</Text>
            <CustomInput placeholder={'Enter new password'} />
            <CustomInput placeholder={'Confirm new password'} />
            <CustomButton title='Reset' onPress={() => navigation.navigate('')} style={{ marginTop: hp(1.5) }} />

        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        marginTop: hp(2),
        width: wp(80),
        height: hp(11),
        resizeMode: 'contain',
    },
    Heading: {
        ...FONT_STYLES.hb22,
        textAlign: 'center',
        marginTop: hp(15),
        marginBottom: hp(2)
    },

})

export default ResetPass;

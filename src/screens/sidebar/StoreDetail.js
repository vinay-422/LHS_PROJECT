import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CSS_STYLES, FONT_STYLES, LIGHT_THEME, THEME_COLOR } from '../../commonconfig/constStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton, CustomHeader, CustomInput, TouchableItems } from '../../components';
import images from '../../commonconfig/images';
import { StoreDetailcard, StoreHeader } from '../../components/CustomCards';
import { useTheme } from '../../commonconfig/ThemeContext';
import { hp } from '../../utils/Common';

const StoreDetail = ({ navigation }) => {
    const { theme } = useTheme();
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <CustomHeader title={'Store details'}
                leftImage={images.back}
                onPressLeft={() => { navigation.goBack() }}
            />
            <ScrollView style={{ flex: 1, paddingHorizontal: 15, }} nestedScrollEnabled={true}>
                <StoreHeader
                    storeName={"Store name 01"}
                    storeAddress={"A57, shop no. 567, street DLF, Gurugram, Haryana 122016"}
                    containerStyle={{ marginTop: hp(2) }}
                />
                <View style={{ marginTop: hp(10) }}>
                    <CustomInput placeholder={'Choose Merchandising'}
                        containerStyle={{}}
                    />
                    <TouchableItems
                        image={images.camerarot}
                        text='Click a selfie with store board'
                        onPress={() => navigation.navigate('')}
                        imageStyle={[CSS_STYLES.i2]}
                        textStyle={{ color: '#fff' }}
                        containerStyle={{ paddingVertical: 10, borderRadius: 30, gap: 5, backgroundColor: THEME_COLOR, marginTop: 20 }}
                    />
                    <TouchableItems
                        image={images.camerarot}
                        text='Click a selfie with Promoter/Store Staff'
                        onPress={() => navigation.navigate('')}
                        imageStyle={[CSS_STYLES.i2]}
                        textStyle={{ color: '#fff' }}
                        containerStyle={{ paddingVertical: 10, borderRadius: 30, gap: 5, backgroundColor: THEME_COLOR, marginTop: 10 }}
                    />
                </View>
            </ScrollView>
            <View style={[CSS_STYLES.cf1, { marginTop: 20, gap: 15, }]}>
                <Text style={{ ...FONT_STYLES.h13, color: THEME_COLOR }}>Store KYC is required</Text>
                <CustomButton title='Complete now' border={true}
                    style={{ paddingVertical: 5 }}
                    onPress={() => navigation.navigate('CompleteKyc')} />

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default StoreDetail;

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton, CustomHeader, CustomInput } from '../../../components';
import images from '../../../commonconfig/images';
import { useTheme } from '../../../commonconfig/ThemeContext';
import { CSS_STYLES, FONT_STYLES, THEME_COLOR } from '../../../commonconfig/constStyle';
import { AttendenceCard, UploadCard } from '../../../components/CustomCards';


export default function Add_editProduct() {
    const { theme } = useTheme();

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <CustomHeader title={'Add/edit Product'}
                leftImage={images.back}
                onPressLeft={() => { navigation.goBack() }}
            />
            <ScrollView style={{ paddingHorizontal: 15 }} nestedScrollEnabled={true}>
                <UploadCard text={'+ Product image'} containerStyle={{ borderColor: theme.textLight }} textStyle={{ color: theme.textLight }} />
                <CustomInput placeholder={'Enter row number'} />
                <CustomInput placeholder={'Quantity'} />
                <Text style={[{ ...FONT_STYLES.h14, color: THEME_COLOR, marginTop: 10, marginBottom: 5 }]}>Competitors</Text>
                <View style={[CSS_STYLES.cf1, { gap: 10 }]}>
                    <UploadCard text={'+ Product image'} containerStyle={{ borderColor: theme.textLight, height: 50, width: 50, borderRadius: 50 }} textStyle={{ color: theme.textLight }} />
                    <CustomInput placeholder={'Competitor name'} containerStyle={{ flex: 1 }} />
                </View>
                <Text style={[{ ...FONT_STYLES.h12, color: THEME_COLOR, marginTop: 10, marginBottom: 5 }]}>+ Add more</Text>

            </ScrollView>
            <CustomButton title='Submit' onPress={() => { }} style={{ marginTop: hp(3) }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
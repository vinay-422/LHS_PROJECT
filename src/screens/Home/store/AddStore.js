import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton, CustomHeader, CustomInput } from '../../../components';
import images from '../../../commonconfig/images';
import { useTheme } from '../../../commonconfig/ThemeContext';
import { CSS_STYLES, FONT_STYLES, THEME_COLOR } from '../../../commonconfig/constStyle';
import { AttendenceCard } from '../../../components/CustomCards';


export default function AddStore({ navigation }) {
    const { theme } = useTheme()
    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <CustomHeader title={'Add Store'}
                leftImage={images.back}
                onPressLeft={() => { navigation.goBack() }}
            />
            <ScrollView style={{ paddingHorizontal: 15 }} nestedScrollEnabled={true}>
                <CustomInput placeholder={'Date'} />
                <CustomInput placeholder={'Store name'} />
                <CustomInput placeholder={'Store address'} />
                <CustomInput placeholder={'Store code'} />
                <CustomInput placeholder={'Store city'} />
                <CustomInput placeholder={'Zone'} />
                <CustomInput placeholder={'State'} />
                <CustomInput placeholder={'Store contact person name'} />
                <CustomInput placeholder={'Store contact details'} />
                <CustomInput placeholder={'Geo location'} />
                <CustomInput placeholder={'Project name'} />
                <CustomInput placeholder={'Vertical'} />
                <CustomInput placeholder={'ASE name'} />
                <CustomInput placeholder={'ASM name'} />
                <CustomInput placeholder={'RSM name'} />
                <CustomInput placeholder={'CD name'} />
                <CustomButton title='Add store' onPress={() => setShowModal(!showModal)} style={{ marginTop: hp(3) }} />

            </ScrollView>
            <CustomPopUp
                isVisible={showModal}
                onClose={() => { setShowModal(false) }}
                componentContainer={{ width: wp(70) }}
                image={images.tick}
                imageStyle={{ marginBottom: 15 }}
                text={'Request Sent'}
                subText={'Your addition of store has been sent to admin and once approved, you can view it'}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
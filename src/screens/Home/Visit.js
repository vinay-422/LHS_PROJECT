import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton, CustomHeader, CustomInput, CustomPopUp } from '../../components';
import images from '../../commonconfig/images';
import { useTheme } from '../../commonconfig/ThemeContext';
import { CSS_STYLES, FONT_STYLES, THEME_COLOR } from '../../commonconfig/constStyle';
import { AttendenceCard } from '../../components/CustomCards';
import { wp } from '../../utils/Common';

const Visit = ({ navigation }) => {
    const { theme } = useTheme();
    const [showPurposeModal, setShowPurposeModal] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <CustomHeader title={'Visits'}
                leftImage={images.back}
                onPressLeft={() => { navigation.goBack() }}
            />
            <ScrollView style={{ paddingHorizontal: 15 }} nestedScrollEnabled={true}>

                <Text style={[{ ...FONT_STYLES.h14, color: THEME_COLOR, marginTop: 10, marginBottom: 5 }]}>Today</Text>
                <AttendenceCard
                    image1={images.profile}
                    image2={images.profile}
                    // absent1={true}
                    inTime={'09:00 AM'}
                    outTime={'09:00 AM'}
                    inLocation={'Gurugram, haryana'}
                    outLocation={'Gurugram, haryana'}
                    earlyText={'you go early'}
                    date={'18 mar,2025'}

                />
                <Text style={[{ ...FONT_STYLES.h14, color: THEME_COLOR, marginTop: 10, marginBottom: 5 }]}>History</Text>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    renderItem={({ item, index }) => {
                        return (
                            <AttendenceCard
                                image1={images.profile}
                                image2={images.profile}
                                // absent1={true}
                                heading1={'Visit In'}
                                heading2={'Visit Out'}
                                btn1title={'Visit In'}
                                btn2title={'Visit Out'}
                                inTime={index == 2 ? null : '09:00 AM'}
                                outTime={index % 3 === 0 ? null : '09:00 AM'}
                                inLocation={'Gurugram, haryana'}
                                outLocation={'Gurugram, haryana'}
                                earlyText={index % 4 == 0 ? null : 'you go early'}
                                date={'18 mar,2025'}
                                inPress={() => { setShowPurposeModal(true) }}
                            >
                                <View>
                                    <View style={CSS_STYLES.lineStyle} />
                                    <Text style={[{ textAlign: 'center', ...FONT_STYLES.h10, opacity: .6 }]}>Purpose of visit : <Text style={[{ ...FONT_STYLES.h10, opacity: .6 }]}>Repair devices</Text></Text>
                                </View>

                            </AttendenceCard>
                        )
                    }}
                    keyExtractor={index => ('atte' + index)}
                />
            </ScrollView>
            <CustomPopUp
                isVisible={showPurposeModal}
                onClose={() => { setShowPurposeModal(false) }}
                componentContainer={{ width: wp(70),paddingHorizontal:10,paddingVertical:10 }}
                text={'Purpose Of Visit'}
                textStyle={{marginTop:-15,marginBottom:15}}
                buttontitle1={'Cancel'}
                buttontitle2={'Continue'}
                border={true}
                onPressButton1={()=>{}}
                onPressButton2={()=>{}}
                cross={true}

            // subText={'Your KYC details has been sent and and we will review it then you will be notified soon.'}
            >
                <CustomInput placeholder={'Choose purpose'} containerStyle={{width:'100%'}}/>
            </CustomPopUp>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Visit;

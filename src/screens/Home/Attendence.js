import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton, CustomHeader } from '../../components';
import images from '../../commonconfig/images';
import { useTheme } from '../../commonconfig/ThemeContext';
import { CSS_STYLES, FONT_STYLES, THEME_COLOR } from '../../commonconfig/constStyle';
import { AttendenceCard } from '../../components/CustomCards';

const Attendence = ({ navigation }) => {
    const { theme } = useTheme()

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <CustomHeader title={'Attendence'}
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
                                inTime={index == 2 ? null : '09:00 AM'}
                                outTime={index % 3 === 0 ? null : '09:00 AM'}
                                inLocation={'Gurugram, haryana'}
                                outLocation={'Gurugram, haryana'}
                                earlyText={index % 4 == 0 ? null : 'you go early'}
                                date={'18 mar,2025'}
                            />
                        )
                    }}
                    keyExtractor={index => ('atte' + index)}
                // style={{ paddingHorizontal: 15 }}
                />
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Attendence;

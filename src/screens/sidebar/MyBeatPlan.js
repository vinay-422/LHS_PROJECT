import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CSS_STYLES, FONT_STYLES, THEME_COLOR } from '../../commonconfig/constStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton, CustomHeader, TouchableItems } from '../../components';
import images from '../../commonconfig/images';
import { StoreDetailcard } from '../../components/CustomCards';
import { useTheme } from '../../commonconfig/ThemeContext';

const MyBeatPlan = ({ navigation }) => {
    const { theme } = useTheme();
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <CustomHeader title={'Beat Plan Assigned To Me '}
                leftImage={images.back}
                onPressLeft={() => { navigation.goBack() }}
            />
            <ScrollView style={{ paddingHorizontal: 15 }} nestedScrollEnabled={true}>
                <View style={[CSS_STYLES.cf2]}>
                    <Text style={[CSS_STYLES.heading]}>Stores to cover</Text>
                    <CustomButton title='+ Add more store'
                        onPress={() => navigation.navigate('')}
                        style={{ paddingVertical: 5 }}
                    />
                </View>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    renderItem={({ item, index }) => {
                        return (
                            <StoreDetailcard
                                storeName={"Store name 01"}
                                storeName2={"SN3456"}
                                storeAddress={"A57, shop no. 567, street DLF, Gurugram, Haryana 122016"}
                                onViewAllPress={() => { navigation.navigate("StoreDetail") }}
                            />
                        )
                    }}
                    keyExtractor={index => ('mtbeat' + index)}
                />
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({})

export default MyBeatPlan;

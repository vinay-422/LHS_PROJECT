import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CustomHeader } from '../../components';
import images from '../../commonconfig/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeCard } from '../../components/CustomCards';

const Alerts = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <CustomHeader title={'Alerts/Notification'}
                leftImage={images.back}
                onPressLeft={() => { navigation.goBack() }}
            />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={({ item, index }) => {
                    return (
                        <HomeCard
                            value={'Random text lorem ipsum dolro lorem lore ipsumdor loremh elroem Random text lorem ipsum dolro lorem lore ipsumdor loremh elroemRandom text lorem ipsum dolro lorem lore ipsumdor loremh elroem'}
                            // image={images.attendence}
                            valueStyle={{ marginTop: 5, opacity: .8, lineHeight: 16 }} />
                    )
                }}
                keyExtractor={index => ('res' + index)}
                style={{ paddingHorizontal: 15 }}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Alerts;

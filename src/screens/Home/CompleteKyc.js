import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { CustomButton, CustomHeader, CustomInput, CustomPopUp } from '../../components';
import images from '../../commonconfig/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UploadCard } from '../../components/CustomCards';
import { useTheme } from '../../commonconfig/ThemeContext';
import { wp } from '../../utils/Common';


const CompleteKyc = ({ navigation }) => {
    const { theme } = useTheme();
    // const Orientation= 
    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <CustomHeader title={'Complete Your KYC'}
                leftImage={images.back}
                onPressLeft={() => { navigation.goBack() }}
            />
            <ScrollView style={{ paddingHorizontal: 15 }}>
                <CustomInput placeholder={'Form field 1'} />
                <CustomInput placeholder={'Form field 2'} />
                <UploadCard text={'+ Upload Document 1'} containerStyle={{ borderColor: theme.textLight }} textStyle={{ color: theme.textLight }} />
                <UploadCard text={'+ Upload Document 2'} containerStyle={{ borderColor: theme.textLight }} textStyle={{ color: theme.textLight }} />
                <CustomButton title='Send for cerification'
                    style={{ marginTop: 30 }}
                    onPress={() => { setShowModal(true) }} />
            </ScrollView>

            <CustomPopUp
                isVisible={showModal}
                onClose={()=>{setShowModal(false)}}
                componentContainer={{ width: wp(70) }}
                image={images.tick}
                imageStyle={{ marginBottom: 15 }}
                text={'KYC Details Sent'}
                subText={'Your KYC details has been sent and and we will review it then you will be notified soon.'}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default CompleteKyc;

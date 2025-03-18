import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CSS_STYLES, FONT_STYLES, THEME_COLOR } from '../../commonconfig/constStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableItems } from '../../components';
import images from '../../commonconfig/images';
const Sidebar = ({ navigation }) => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: THEME_COLOR, }}>
            <SafeAreaView style={{ paddingHorizontal: 15 }}>
                <TouchableItems image={images.cross}
                    imageStyle={[CSS_STYLES.i2, { tintColor: '#fff' }]}
                    containerStyle={{ justifyContent: 'flex-end', marginTop: 20, marginBottom: 10 }}
                    onPress={() => { navigation.goBack() }} />
                <TouchableItems text={'Alerts'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("Alerts") }} />
                <TouchableItems text={'My Visits'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'Display & manufacturing date '}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'My report'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'My team reporting'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'My attendance'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'My team attendance'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'My merchandising'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'My order'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'My reiki'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'Beat plan'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'Help'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'My forms'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
                <TouchableItems text={'Training & tutorials'}
                    containerStyle={styles.itemContainer}
                    textStyle={[FONT_STYLES.hb16, { color: '#fff' }]}
                    onPress={() => { navigation.navigate("") }} />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,.1)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        justifyContent: 'flex-start'
    }
})

export default Sidebar;

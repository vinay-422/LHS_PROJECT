import React from 'react';
import {View, StatusBar, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { THEME_COLOR } from '../commonconfig/constStyle';
const CustomStatusBar = ({
  backgroundColor = '#fff',
  barStyle = 'dark-content',
  children,
}) => {
  return (
    <>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={false}
      />
      <SafeAreaView style={[styles.safeArea, {backgroundColor}]}>
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default CustomStatusBar;
import * as React from 'react';
import {
    View,
    StyleSheet,
    Image,

} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import images from '../commonconfig/images';
import { Home, Profile, ZoomTest } from '../screens/index';
import OriantationFunction from '../components/OriantationFunction';
import { THEME_COLOR } from '../commonconfig/constStyle';
import { useTheme } from '../commonconfig/ThemeContext';
// import Pdfs from '../screens/main/Pdf';


const Tab = createBottomTabNavigator();

export default function BottomStack() {
    const Orientation = OriantationFunction();
    // const c = useTheme().colors;
const {theme} = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabel: false,

                tabBarStyle: {
                    height: 60,
                    elevation: 0,
                    borderRadius: 20,
                    paddingHorizontal: 5,
                    paddingVertical: 0,
                    backgroundColor: theme?.background

                },
            }}
            initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },

                    tabBarIcon: ({ color, size, focused }) =>

                        <View style={[styles.backVIew, { borderBottomWidth: focused ? 5 : 0 }]}>
                            <Image
                                source={images.home}
                                style={{
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain',
                                    tintColor: focused ? THEME_COLOR : '#000',
                                }}
                            />
                            {/* <Text style={{ ...FONT_STYLES.h13, color:focused ? THEME_COLOR :'#000',}}>Quote</Text> */}

                        </View>


                }}
            />
            <Tab.Screen
                name="ZoomTest"
                component={ZoomTest}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: ({ color, size, focused }) =>

                        <View style={[styles.backVIew, { borderBottomWidth: focused ? 5 : 0 }]}>
                            <Image
                                source={images.hamburger}
                                style={{
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain',
                                    tintColor: focused ? THEME_COLOR : '#000',
                                }}
                            />
                            {/* <Text style={{ ...FONT_STYLES.h13, color:focused ?THEME_COLOR :'#000', }}>Trade</Text>*/}
                        </View>

                }}
            />
          

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: ({ color, size, focused }) =>

                        <View style={[styles.backVIew, { borderBottomWidth: focused ? 5 : 0 }]}>
                            <Image
                                source={images.profile}
                                style={{
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain',
                                    tintColor: focused ? THEME_COLOR : '#000',
                                }}
                            />
                            {/* <Text style={{ ...FONT_STYLES.h13, color: focused ?THEME_COLOR :'#000',}}>Profile</Text> */}
                        </View>

                }}
            />
            {/* <Tab.Screen
                name="Pdf"
                component={Pdfs}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: ({ color, size, focused }) =>

                        <View style={[styles.backVIew, { borderBottomWidth: focused ? 5 : 0 }]}>
                            <Image
                                source={images.profile}
                                style={{
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain',
                                    tintColor: focused ? THEME_COLOR : '#000',
                                }}
                            />
                            {/* <Text style={{ ...FONT_STYLES.h13, color: focused ?THEME_COLOR :'#000',}}>Profile</Text> //
                        </View>

                }}
            /> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    backVIew: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderBottomWidth: 5,
        borderColor: THEME_COLOR,
    },
});

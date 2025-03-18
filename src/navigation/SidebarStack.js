import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Sidebar from '../screens/sidebar/Sidebar';
import MyStack from './MyStack';



const Drawer = createDrawerNavigator();

export default function SidebarStack(props) {
    return (
        <Drawer.Navigator drawerContent={(props) => <Sidebar  {...props} />}
            screenOptions={{ headerShown: false }}
            initialRouteName='MyStack'
        >
            <Drawer.Screen name='MyStack' component={MyStack} />
            {/* <Drawer.Screen name='BottomStack' component={BottomStack} /> */}

        </Drawer.Navigator>
    );
}
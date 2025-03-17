import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Sidebar from '../screens/sidebar/Sidebar';
import BottomStack from './BottomStack';
import { Home } from '../screens';



const Drawer = createDrawerNavigator();

export default function SidebarStack(props) {
    return (
        <Drawer.Navigator drawerContent={(props) => <Sidebar  {...props} />}
         screenOptions={{ headerShown: false }}
         initialRouteName='BottomStack'
         >
            {/* <Drawer.Screen name='Home' component={Home} /> */}
            <Drawer.Screen name='BottomStack' component={BottomStack} />

        </Drawer.Navigator>
    );
}
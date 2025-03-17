
// import BottomStack from './BottomStack';
// import SidebarStack from './SidebarStack';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator()

export default function MyStack() {
console.log('entere in my stack')
  return (
    <Stack.Navigator
      initialRouteName='AuthStack'
      screenOptions={{ headerShown: false ,}}
    >
      {/* <Stack.Screen name='BottomStack' component={BottomStack}/> */}
      {/* <Stack.Screen name='SidebarStack' component={SidebarStack}/> */}
      <Stack.Screen name='AuthStack' component={AuthStack}/>
     


    </Stack.Navigator>
  );
}
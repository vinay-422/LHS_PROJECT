import { Alerts, Home, Sidebar,CompleteKyc, Attendence, Visit } from '../screens';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false, }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='CompleteKyc' component={CompleteKyc} />
      <Stack.Screen name='Attendence' component={Attendence} />
      <Stack.Screen name='Visit' component={Visit} />


      <Stack.Screen name='Sidebar' component={Sidebar} />
      <Stack.Screen name='Alerts' component={Alerts} />


      <Stack.Screen name='AuthStack' component={AuthStack} />


    </Stack.Navigator>
  );
}
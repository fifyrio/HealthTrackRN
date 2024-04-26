import React from 'react';

import {HealthStackParamList} from './navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HealthIntro from 'screens/Health/HealthIntro';
import Health01 from 'screens/Health/Health01';
import Health02 from 'screens/Health/Health02';
import Health03 from 'screens/Health/Health03';
import Health04 from 'screens/Health/Health04';
import Health05 from 'screens/Health/Health05';
import Health06 from 'screens/Health/Health06';
import Health07 from 'screens/Health/Health07';
import Health08 from 'screens/Health/Health08';
import Health09 from 'screens/Health/Health09';
import Health10 from 'screens/Health/Health10';

const Stack = createNativeStackNavigator<HealthStackParamList>();

const HealthaNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HealthIntro">
      <Stack.Screen name="HealthIntro" component={HealthIntro} />
      <Stack.Screen name="Health01" component={Health01} />
      <Stack.Screen name="Health02" component={Health02} />
      <Stack.Screen name="Health03" component={Health03} />
      <Stack.Screen name="Health04" component={Health04} />
      <Stack.Screen name="Health05" component={Health05} />
      <Stack.Screen name="Health06" component={Health06} />
      <Stack.Screen name="Health07" component={Health07} />
      <Stack.Screen name="Health08" component={Health08} />
      <Stack.Screen name="Health09" component={Health09} />
      <Stack.Screen name="Health10" component={Health10} />
    </Stack.Navigator>
  );
};
export default HealthaNavigator;

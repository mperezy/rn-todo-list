import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default () => (
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name='index' options={{ title: 'My First Page ' }} />
    <Stack.Screen
      name='my-second-page'
      options={{
        title: 'My Second Page',
        headerShown: Platform.OS !== 'android',
      }}
    />
    <Stack.Screen name='my-third-page' options={{ title: 'My Third Page ' }} />
  </Stack>
);

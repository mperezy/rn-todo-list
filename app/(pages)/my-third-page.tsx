import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default () => {
  const router = useRouter();

  return (
    <View>
      <Text style={{ fontSize: 40, color: 'grey' }}>My third page</Text>
      <Button title='Take to the My Second Page' onPress={() => router.push('/my-second-page')} />
    </View>
  );
};

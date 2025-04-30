import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default () => {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Nada');

  useEffect(() => {
    if (count > 5) {
      setMessage('My count is higher than 5');
    } else if (count < 0) {
      setMessage('My count is negative !!');
    } else {
      setMessage('My count is lower than 5');
    }
  }, [count]);

  return (
    <>
      <View>
        <Text style={{ fontSize: 36, color: 'red' }}>My App page Hey</Text>
        <Text style={{ fontSize: 36, color: 'red' }}>{count}</Text>
        <Text style={{ fontSize: 36, color: 'red' }}>{message}</Text>

        <View style={{ rowGap: 8 }}>
          <Button title='Add +1' onPress={() => setCount((prevCount) => prevCount + 1)} />
          <Button title='Add -1' onPress={() => setCount((prevCount) => prevCount - 1)} />
          <Button
            title='Take to the My Second Page'
            onPress={() => router.push('/my-second-page')}
          />
          <Button title='Take to the My Third Page' onPress={() => router.push('/my-third-page')} />
        </View>
      </View>
    </>
  );
};

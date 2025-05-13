'use dom';
import { StyleSheet, Text, View } from 'react-native';
import Tasks from '../screens/Tasks/Tasks';
import '../global.css'
// Import the global.css file in the index.js file:
export default function HomeScreen() {
  return (
    <View style={{backgroundColor:'white',flex:1,alignItems:'center'}}>
      <Tasks/>
      <Text className='text-2xl'>
        Hello
      </Text>
    </View>
  );
}


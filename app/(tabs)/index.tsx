import { StyleSheet, Text, View } from 'react-native';
import Tasks from '../screens/Tasks'
export default function HomeScreen() {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <Tasks/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

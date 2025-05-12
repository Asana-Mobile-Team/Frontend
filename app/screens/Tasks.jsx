import { View, Text,StyleSheet, SafeAreaView } from 'react-native'


const Tasks = () => {
  return (
    <SafeAreaView>
      <View>
           <Text style={{alignItems:'center'}}> My Tasks
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style={{width: 20, height: 20}}>
           <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
           </svg>

           </Text>
        <View>

        </View>
        <View>

        </View>
      </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {

}})
export default Tasks
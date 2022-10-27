import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function App() {
  return (
    <View style={styles.container}>
      <Text>Operator app</Text>
      <StatusBar style="auto" />
    </View>
  )
}

registerRootComponent(App)

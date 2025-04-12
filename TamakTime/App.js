import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableHighlight, View } from 'react-native';
import TamakTimePage from './TamakTimePage';

export default function App() {

  const dd = () => Alert.alert('Tamak Times', 'UseFull web application', [
    {text: 'Yes', onPress: () => console.log('Yes')}, {text: 'No'}
  ]);
  return (
    <TamakTimePage></TamakTimePage>
    // <View style = {styles.mainBlock}>
    //   <View style={[styles.box, {backgroundColor: 'red', flex: 6}]}></View>
    //   <View style={[styles.box, {backgroundColor: 'blue', flex: 2}]}></View>
    //   <View style={[styles.box, {backgroundColor: 'black', flex: 2}]}></View>
    // </View>
    // <SafeAreaView style={styles.container}>
    //   <Text>Omar!!!</Text>
    //   <Button title='Press' onPress={() => Alert.alert('Tamak Times', 'UseFull web application', [
    //     {text: 'Yes', onPress: () => console.log('Yes')}, {text: 'No'}
    //   ])}/>

    //   <TouchableHighlight onPress={dd}>
    //   <Image source={{
    //     width: 200, height: 150, uri: "https://i.pinimg.com/736x/5e/7b/e0/5e7be05de1eb00ff2fb2246e843c17fb.jpg"
    //   }
        
    //   }/>
    //   </TouchableHighlight>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBlock:{
    flex: 1,
    backgroundColor: 'yellow'
  },
  box: {
    flex: 1,
    backgroundColor: 'blue'
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

let x =1;

 // console.log("App executed");

// let x;
// x.toString();

  return (
    <View style={styles.container}>
    <View style={{ height: 300, width: '100%', backgroundColor: '#eaa'}}></View>
      <Text>John Talernt</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Ap = () =>{
  return(
    <View styles={styles.container}>
    <Text> God is good</Text>
    <StatusBar styles="auto"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fca',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


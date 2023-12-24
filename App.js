import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


// Vector Icon 
import { AntDesign } from '@expo/vector-icons';

// FUNCTION APP
export default function App() {

  // RETURN
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <AntDesign name="form" size={30} color="blue" />
      <Text style={styles.headerText}>Form Cv</Text>
     <StatusBar style="auto" />
    </View>
    <TextInput placeholder='Username' style={styles.input}/>
    <TextInput placeholder='Surname' style={styles.input}/>
    <TextInput placeholder='email' style={styles.input}/>
    <TextInput placeholder='password' style={styles.input}/>
    </SafeAreaView>
  );
} //end return

// CSS
const styles = StyleSheet.create({
  // header: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container:{
    flex:1,
    backgroundColor:'lightblue',
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    // flexDirection:'column',
    flexDirection:'row',
    backgroundColor:'#f2f2f2',
    width:"80%",
    alignSelf:'center',
    padding:10,
    justifyContent:"center",
  },
  headerText:{
    fontSize:20,
    fontWeight:'500',
    marginLeft:10,
  },
  input:{
    width:'80%',
    height:40,
    backgroundColor:'#fff',
    alignSelf:'center',
    marginTop:20,
    borderRadius:5,
    paddingLeft:10,
  }
}); //end styles

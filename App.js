
// rnfe

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


// Add firebase/index.js
import { app, db, getFirestore, collection, addDoc, getDocs } from "./firebase/index";

// Vector Icon 
import { AntDesign } from '@expo/vector-icons';

// STATE
import { useEffect, useState } from 'react';

// FUNCTION APP
export default function App() {

  // STATE
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // STATE GET
  const [formList, setFormList] = useState([]);

  // ADD FORM
  const addFormApp = async () => {
    try {
      const docRef = await addDoc(collection(db, "form"), {
        username: username,
        surname: surname,
        email: email,
        password: password,
      });

      console.log("Document written with ID: ", docRef.id);
      // Database veri gödnerdikten sonra input verileri temizlensin.
      setUsername('')
      setSurname('')
      setEmail('')
      setPassword('')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // Ekledikten sonra
    getFormApp();
  } //end add 

  ///////////////////////////////////////
  // GET FORM
  const getFormApp = async () => {
    const querySnapshot = await getDocs(collection(db, "form"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id,doc.data());
      console.log(formList);
      console.log("username: "+doc.data().username);
      console.log("surname: "+doc.data().surname);
      console.log("email: "+doc.data().email);
      console.log("password: "+doc.data().password);
      setFormList([...formList, { id: doc.id, ...doc.data() }]);
    });
  }

  // USE EFFECT 
  useEffect(() => {
    getFormApp();
  }, []); //end Use Effect


  /////////////////////////////////////////

  // RETURN
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <AntDesign name="form" size={30} color="blue" />
        <Text style={styles.headerText}>Form Cv</Text>
        <StatusBar style="auto" />
      </View>

      {/* INPUT USERNAME */}
      <TextInput
        placeholder='username'
        style={styles.input}
        value={username}
        onChangeText={(data) => setUsername(data)}
        onSubmitEditing={addFormApp}
      />

      {/* INPUT SURNAME */}
      <TextInput
        placeholder='surname'
        style={styles.input}
        value={surname}
        onChangeText={(data) => setSurname(data)}
        onSubmitEditing={addFormApp}
      />

      {/* INPUT EMAİL */}
      <TextInput
        placeholder='email'
        style={styles.input}
        value={email}
        onChangeText={(data) => setEmail(data)}
        onSubmitEditing={addFormApp}
      />

      {/* INPUT PASSWORD */}
      <TextInput
        placeholder='password'
        style={styles.input}
        value={password}
        onChangeText={(data) => setPassword(data)}
        onSubmitEditing={addFormApp}
      />

      <Text>Data: {formList.id}</Text>
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
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // flexDirection:'column',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    width: "80%",
    alignSelf: 'center',
    padding: 10,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
    paddingLeft: 10,
  }
}); //end styles

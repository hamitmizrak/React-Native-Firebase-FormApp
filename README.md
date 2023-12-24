# Install
npx create-expo-app FormApp 
cd FormApp
npx expo start 
a: android

# Eğer 8081 portunu başka uygulama kullanıyorsa;
npx expo start --port=4444

# Eğer expo sizlerde çalışmazsa eğer;
npm uninstall --global expo-cli
npm install --global expo-cli

# Dikkat: npx expo start yaparken Visual Studio code terminalinde yapalım.

--- 

[GitHub](https://github.com/hamitmizrak/React-Native-Firebase-FormApp)
---
# Vector Fontu: https://icons.expo.fyi/Index
[Vector Font](https://icons.expo.fyi/Index)
import { Ionicons } from '@expo/vector-icons';
<Ionicons name="person" size={24} color="black" />


--- 
# Firebase
[Firebase Console](https://firebase.google.com/)

[Go To Console](https://console.firebase.google.com/u/0/)

Firebase Create => Google Analytic isactive => Web => 
```sh
npm install firebase
```

```sh

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoSClT2xQQefNHSHBr5wi6rGTLx2wzVhI",
  authDomain: "formapp-1c22d.firebaseapp.com",
  projectId: "formapp-1c22d",
  storageBucket: "formapp-1c22d.appspot.com",
  messagingSenderId: "810967235082",
  appId: "1:810967235082:web:f2925b291e55fb0b853df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

---
[Firebase Docs](https://firebase.google.com/docs?hl=en&authuser=0)
[Firebase firestora](https://firebase.google.com/docs/firestore?hl=tr)

[Firebase firestora Get Starting](https://firebase.google.com/docs/firestore/quickstart?hl=en)
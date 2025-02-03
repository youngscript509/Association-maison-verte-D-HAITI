// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpileNVo9RNDEQTdyIOVhwxB9e-ofW6iU",
  authDomain: "cinecolohaiti.firebaseapp.com",
  projectId: "cinecolohaiti",
  storageBucket: "cinecolohaiti.appspot.com",
  messagingSenderId: "950547178540",
  appId: "1:950547178540:web:20cd5b54f686fbe0061d89",
  measurementId: "G-YBVLV6FT5K"
};
  firebase.initializeApp(firebaseConfig);
 
  const firestore = firebase.firestore();
  const db = firebase.firestore();
  
  firebase.firestore().settings({
    timestampsInSnapshots: true
  });
  
  firebase.firestore().enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            console.log('La persistance des données a échoué car plusieurs onglets sont ouverts.');
        } else if (err.code == 'unimplemented') {
            console.log('La persistance des données n\'est pas prise en charge par le navigateur.');
        }
    });
  
   
  
  
  
  
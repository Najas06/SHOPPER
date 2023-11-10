import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDWwb1YFQtd4JP2zdajWQdO9jXpED8pIjE",
  authDomain: "shopper-93592.firebaseapp.com",
  databaseURL: "https://shopper-93592-default-rtdb.firebaseio.com",
  projectId: "shopper-93592",
  storageBucket: "shopper-93592.appspot.com",
  messagingSenderId: "125912736150",
  appId: "1:125912736150:web:9c96e1874f7679eec4fdb7"
};

const firebaseApp=initializeApp(firebaseConfig);
export default firebaseApp;

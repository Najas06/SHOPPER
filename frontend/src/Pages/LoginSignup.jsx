// LoginSignup.js
import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseApp from '../firebase'; // Update the path
// firebase.js
import { initializeApp } from 'firebase/app';

const db = getFirestore(firebaseApp);

const firebaseConfig = {
  apiKey: "AIzaSyDWwb1YFQtd4JP2zdajWQdO9jXpED8pIjE",
  authDomain: "shopper-93592.firebaseapp.com",
  databaseURL: "https://shopper-93592-default-rtdb.firebaseio.com",
  projectId: "shopper-93592",
  storageBucket: "shopper-93592.appspot.com",
  messagingSenderId: "125912736150",
  appId: "1:125912736150:web:9c96e1874f7679eec4fdb7"
};

initializeApp(firebaseConfig);


const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userRef = await addDoc(collection(db, 'users'), {
        name,
        email,
        password,
      });
      console.log('User added with ID: ', userRef.id);
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  };

  return (
    <div className='Loginsignup'>
      {/* ... Your existing code ... */}
      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignUp}>Continue</button>
      {/* ... Your existing code ... */}
    </div>
  );
};

export default LoginSignup;


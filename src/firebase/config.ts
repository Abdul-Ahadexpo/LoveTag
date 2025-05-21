import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBIVDqwlnbnJjm0b1CflG9wLA1vJhDK-OQ",
  authDomain: "lovetag-bb091.firebaseapp.com",
  databaseURL: "https://lovetag-bb091-default-rtdb.firebaseio.com",
  projectId: "lovetag-bb091",
  storageBucket: "lovetag-bb091.firebasestorage.app",
  messagingSenderId: "847687576677",
  appId: "1:847687576677:web:57d08661c33f1d5c4d2a8c"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
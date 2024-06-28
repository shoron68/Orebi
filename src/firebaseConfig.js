// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDrRfsfl8iegdhiXbmb4k6i2kUc3oS0Czk",
  authDomain: "todo-1dff6.firebaseapp.com",
  projectId: "todo-1dff6",
  storageBucket: "todo-1dff6.appspot.com",
  messagingSenderId: "968584819405",
  appId: "1:968584819405:web:32aa10dba81948bb5c2f84",
  measurementId: "G-QGGK8ZMXSD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig
// Importiere die benötigten Firebase-Module (Version 10+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  query, 
  where, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Deine Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyBs9XJHIZHmbbEMpdz0gTqGziFX76hUK_k",
  authDomain: "fakemelderprojekt.firebaseapp.com",
  projectId: "fakemelderprojekt",
  storageBucket: "fakemelderprojekt.firebasestorage.app",
  messagingSenderId: "40516507468",
  appId: "1:40516507468:web:1b3724bb3e7b83e724a1e9",
  measurementId: "G-GKVHDHPGWW"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Instanzen exportieren, damit die HTML-Seiten darauf zugreifen können
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export { analytics };

// Funktionen ebenfalls exportieren
export { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  query, 
  where, 
  serverTimestamp, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
};
// Importera Firebase-moduler
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase-konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyCrI_QJV4Pslt8PF564ifT3z_gxKgsWq0Y",
  authDomain: "bibelstudion-cb07f.firebaseapp.com",
  projectId: "bibelstudion-cb07f",
  storageBucket: "bibelstudion-cb07f.firebasestorage.app",
  messagingSenderId: "468561879620",
  appId: "1:468561879620:web:66459888a6d6bbd6379211",
  measurementId: "G-2Q78YS7BH8"
};

// Initiera Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funktion för att spara en kommentar
async function addComment(namn, kommentar) {
  try {
    await addDoc(collection(db, "kommentarer"), {
      namn: namn,
      kommentar: kommentar,
      tid: new Date()
    });
    console.log("Kommentar sparad!");
  } catch (error) {
    console.error("Fel vid sparning:", error);
  }
}

// Exportera funktioner om du vill använda dem i andra filer
export { addComment };

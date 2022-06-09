// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc3KQE-7XQdQbFPJ3ON9YqrqDz17tGbZI",
    authDomain: "image-uploader-f0287.firebaseapp.com",
    projectId: "image-uploader-f0287",
    storageBucket: "image-uploader-f0287.appspot.com",
    messagingSenderId: "960635447009",
    appId: "1:960635447009:web:29e9fc0aafc5874a64b9a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
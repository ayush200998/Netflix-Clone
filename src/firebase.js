import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1Gm4ytDVKRWWNSkI7StbbM4Fr_JN_ue4",
    authDomain: "netflixclone-3c963.firebaseapp.com",
    projectId: "netflixclone-3c963",
    storageBucket: "netflixclone-3c963.appspot.com",
    messagingSenderId: "847353877421",
    appId: "1:847353877421:web:daab9a65f8ef8e7cc54724",
    measurementId: "G-LPHR8E1XBT"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
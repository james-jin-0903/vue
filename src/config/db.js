import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyC7FtSsrfNzPFtN2LCYIUtyXqLHGC4qRoE",
  authDomain: "firstvueandfirebase.firebaseapp.com",
  databaseURL: "https://firstvueandfirebase.firebaseio.com",
  projectId: "firstvueandfirebase",
  storageBucket: "firstvueandfirebase.appspot.com",
  messagingSenderId: "631758544906",
  appId: "1:631758544906:web:d25ed95bf1ca87d075fff3",
  measurementId: "G-83RZZJXX7D"
};

let app = Firebase.initializeApp(config)
export const db = app.database()
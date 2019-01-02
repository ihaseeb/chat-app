import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

// firebase.firestore().settings({ timestampsInSnapshots: true })

let config = {
  apiKey: 'AIzaSyAvcWcNs9fWo_ocaQ0MVGuHveTmNQdlTig',
  authDomain: 'muskeeters-group.firebaseapp.com',
  databaseURL: 'https://muskeeters-group.firebaseio.com',
  projectId: 'muskeeters-group',
  messagingSenderId: '395376972000'
}
export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()

export const fireStore = !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore()

export const firebaseAuth = !firebase.apps.length
  ? firebase.initializeApp(config).auth()
  : firebase.app().auth()

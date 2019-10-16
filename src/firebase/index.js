import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import variables from '../../localenv.js'

export const firebaseApp = firebase.initializeApp({
  apiKey: variables.apiKey,
  authDomain: variables.authDomain,
  databaseURL: variables.databaseURL,
  projectId: variables.projectId,
  storageBucket: variables.storageBucket,
  messagingSenderId: variables.messagingSenderId,
  appId: variables.appId,
  measurementId: variables.measurementId
});

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}

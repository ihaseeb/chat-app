import {firebaseAuth} from '@/plugins/firebase'

export default function (store, next, to) {
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user already logged in, redirecting')
      store.dispatch('autoSignIn', user).then(data => {
        return next(to.fullPath)
      })
    } else {
      return next('/signin')
    }
  })
}

import {firebaseAuth} from '@/plugins/firebase'

export default async function (store, next, to) {
  await firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user already logged in, redirecting')
      store.dispatch('autoSignIn', user).then(data => {
        return next(to.fullPath)
      }).then(() => {
        store.dispatch('loadMainChatMessages')
      })
    } else {
      return next('/signin')
    }
  })
}

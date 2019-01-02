import {firebaseAuth, fireStore} from '@/plugins/firebase.js'
// import * as firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      return firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        data => {
          return fireStore.collection('users').doc(data.user.uid).set({name: payload.name, email: payload.email})
          .then(() => {
            commit('setLoading', false)
            const newUser = {
              id: data.uid,
              registeredMeetups: [],
              fbkeys: {}
            }
            commit('setUser', newUser)
            return data.user
          })
          .catch(
            error => {
              commit('setLoading', false)
              commit('setError', error)
              console.log(error)
              return error
            }
          )
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
          return error
        }
      )
    },
    signUserInwithEmail ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      const email = payload.email
      const password = payload.password
      return firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(data => {
          commit('setLoading', false)
          // console.log('Login successful' + JSON.stringify(data))
          return fireStore.collection('users').doc(data.user.uid).get()
            .then(doc => {
              if (doc.exists) {
                const userData = {
                  ...doc.data(),
                  id: data.user.uid
                }
                // console.log(`User Data fetched: ${JSON.stringify(userData)}`)
                commit('setUser', userData)
                return userData
              } else {
                // doc.data() will be undefined in this case
                console.log('[Error]: No record of user found on the server!')
              }
            })
            .catch(errorUserData => {
              commit('setLoading', false)
              commit('setError', errorUserData)
              console.log(`[ERROR]: An error occured fetching the user data from the server: ${errorUserData}`)
            })
        }).catch(function (error) {
          commit('setLoading', false)
          commit('setError', error)
          let errorCode = error.code
          let errorMessage = error.message
          console.log('error is ' + JSON.stringify(errorCode) + 'error message is ' + JSON.stringify(errorMessage))
          commit('setUser', null)
          let errorData = {
            error: error,
            status: null
          }
          return errorData
        })
    },
    // signInWithGoogle ({ commit }) {
    //   commit('setLoading', true)
    //   commit('clearError')
    //   const provider = new firebase.auth.GoogleAuthProvider()
    //   firebaseAuth.signInWithRedirect(provider).then((result) => {
    //     console.log('result is ', result)
    //     commit('setLoading', false)
    //     const newUser = {
    //       id: result.uid,
    //       registeredMeetups: [],
    //       fbkeys: {}
    //     }
    //     commit('setUser', newUser)
    //   }).catch(
    //     error => {
    //       commit('setLoading', false)
    //       commit('setError', error)
    //       console.log(error)
    //     })
    // },
    // signInWithFacebook ({ commit }) {
    //   commit('setLoading', true)
    //   commit('clearError')
    //   const provider = new firebase.auth.FacebookAuthProvider()
    //   firebaseAuth.signInWithRedirect(provider).then((result) => {
    //     console.log('result is ', result)
    //     commit('setLoading', false)
    //     const newUser = {
    //       id: result.uid,
    //       registeredMeetups: [],
    //       fbkeys: {}
    //     }
    //     commit('setUser', newUser)
    //   }).catch(
    //     error => {
    //       commit('setLoading', false)
    //       commit('setError', error)
    //       console.log(error)
    //     })
    // },
    passwordReset ({commit}, payload) {
      let route = payload.route
      firebaseAuth.sendPasswordResetEmail(payload.email)
      .then(() => {
        route.push('/MailSent')
      })
      .catch(error => {
        commit('setError', error)
        console.log(error)
      })
    },
    async autoSignIn ({ commit }, payload) {
      const userSignin = await fireStore.collection('users').doc(payload.uid).get()
      .then(doc => {
        if (doc.exists) {
          const userData = {
            ...doc.data(),
            id: payload.uid
          }
          // console.log(`User Data fetched: ${JSON.stringify(userData)}`)
          commit('setUser', userData)
          return userData
        } else {
          // doc.data() will be undefined in this case
          console.log('[Error]: No record of user found on the server!')
        }
      })
      .catch(errorUserData => {
        commit('setLoading', false)
        commit('setError', errorUserData)
        console.log(`[ERROR]: An error occured fetching the user data from the server: ${errorUserData}`)
      })
      return userSignin
    },
    // fetchUserData ({ commit, getters }) {
    //   commit('setLoading', true)
    //   firebase.database().ref('/users/' + getters.user.id + '/registrations').once('value')
    //     .then(data => {
    //       const dataPairs = data.val()
    //       let registeredMeetups = []
    //       let swappedPairs = {}
    //       for (let key in dataPairs) {
    //         registeredMeetups.push(dataPairs[key])
    //         swappedPairs[dataPairs[key]] = key
    //       }
    //       const updatedUser = {
    //         id: getters.user.id,
    //         registeredMeetups: registeredMeetups,
    //         fbkeys: swappedPairs
    //       }
    //       commit('setLoading', false)
    //       commit('setUser', updatedUser)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       commit('setLoading', false)
    //     })
    // },
    logout ({ commit }) {
      firebaseAuth.signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}

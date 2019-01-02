import io from 'socket.io-client'
import { fireStore } from '@/plugins/firebase.js'
import { store } from '../index'
const socket = io('localhost:3001')

socket.on('MESSAGE', (data) => {
  store.dispatch('addMessage', data)
})

export default {
  state: {
    isTyping: null,
    loadMainChatMessages: [
    ]
  },
  mutations: {
    addChatMessage (state, payload) {
      state.loadMainChatMessages.push(payload)
    },
    setloadMainChatMessages (state, payload) {
      state.loadMainChatMessages = payload
    }
  },
  actions: {
    sendMessage ({commit}, payload) {
      socket.emit('SEND_MESSAGE',
        {
          message: payload.message,
          date: new Date().getTime(),
          sender: payload.sender
        })
      return true
    },
    addMessage ({commit, getters}, payload) {
      commit('addChatMessage', payload)
    },
    async loadMainChatMessages ({commit, getters}) {
      await fireStore.collection('mainChat').orderBy('date').get().then((querySnapshot) => {
        let chatMessages = []
        querySnapshot.forEach(function (doc) {
          chatMessages.push({...doc.data()})
        })
        commit('setloadMainChatMessages', chatMessages)
      })
    }
  },
  getters: {
    loadMainChatMessages (state) {
      return state.loadMainChatMessages
    }
  }
}

<template>
  <v-layout row wrap>
    <v-flex md11>
      <input v-model="message" type="text" id="message" placeholder="Type a message">
    </v-flex>
    <v-flex md1>
      <!-- <v-btn class="send-btn">Send</v-btn> -->
      <v-btn fab color="#00695C" class="send-btn" @click="sendMessage">
        <v-icon class="send-btn-icon">send</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage () {
      console.log('send message is clicked')
      const payload = {
        sender: this.getUserName.name,
        message: this.message
      }
      this.$store.dispatch('sendMessage', payload).then((data) => {
        if (data === true) {
          this.message = ''
        } else {
          console.log('[ERROR]: ')
        }
      })
    }
  },
  computed: {
    getUserName () {
      return this.$store.getters['user']
    }
  }
}
</script>
<style scoped>
input{
  padding: 10px 20px;
  box-sizing: border-box;
  background: #eee;
  border: 0;
  display: block;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  margin-top: 1em; 
}
.send-btn{
  margin-top: 1em;
  margin-left: 1em;
  height: 3.2em;
  width: 3.2em;
}
.send-btn-icon{
  margin-left: .2em;
  color: white!important;
}
</style>

<template>
  <div>
    <!-- <v-container> -->
      <v-layout row wrap>
        <v-flex md10 offset-md1>
          <v-text-field
            label="Search"
            class="search-bar"
            prepend-inner-icon="search"
            box
            single-line
          ></v-text-field>
        </v-flex>
        <v-flex md12>
          <hr class="search-bar-border">
        </v-flex>
      </v-layout>
      <v-layout row wrap v-for="(chat, index) in chats" :key="index" >
        <v-flex  md12 class="user-chat-flex">
          <user-chat class="user-chat" :chat='chat'></user-chat>
        </v-flex>
        <v-flex md12>
          <hr class="user-chat-border">
        </v-flex>
      </v-layout>
    <!-- </v-container> -->
  </div>
</template>
<script>
import UserChat from '@/components/chat/UsersPanel/UserChat'
export default {
  data () {
    return {
      chats: [
        {
          id: 'sdfhwkljd1onid3dn2o1i2n',
          userName: 'Haseeb',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'sdfhwkljd1asavwwecw1i2n',
          userName: 'vicky',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'sdfhwkljd1oniuhwfieww2n',
          userName: 'Yasir',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'sdfhwkljd1kjhciwdno1i2n',
          userName: 'Hassan',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'syihibkjj1ovenid3dn2o1i2n',
          userName: 'Zahid',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'syihibkjjbfe1onid3dn2o1i2n',
          userName: 'qweqwe',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'syihibkjj1oqwenid3dn2o1i2n',
          userName: 'Zaqweqwehid',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'syihibkjj1onsdcid3dn2o1i2n',
          userName: 'Zaqwqwchid',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'syihibkjj1ogfbnid3dn2o1i2n',
          userName: 'Zasdcsdhid',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        }
      ]
    }
  },
  components: {
    UserChat
  }
}
</script>
<style scoped>
.user-chat{
  margin-top: 1em;
  margin-bottom: 0em;
}
.user-chat-border{
  width: 15em;
  margin-left: 6.1em;
  border: none;
  height: 1px;
  color: grey;
  background-color: grey;
  opacity: 0.6;
}
.user-chat-flex{
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.user-chat-flex:hover{
  /* display: inline-block; */
  background-color: grey;
  color: white;
  cursor: pointer;
}
.search-bar{
  margin-top:1.5em;
  /* margin-left: .5em; */
}
.search-bar-border{
  width: 100%;
  /* margin-left: 6.1em; */
  border: none;
  height: 1px;
  color: grey;
  background-color: grey;
  opacity: 0.6;
}

</style>

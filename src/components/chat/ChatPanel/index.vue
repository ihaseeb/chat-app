<template>
  <v-container>
    <div class="chat-window">
    <v-layout class="chat-window-messages" row wrap v-for="(message, index) in loadMainChatMessages" :key="index">
      <v-flex v-if="getUserName && getUserName.name !== message.sender" class="receiver">
        <v-layout row wrap class="receiver-message mt-2">
          <v-flex md12 class="message-body">
            <p style="font-weight: bold; text-transform: capitalize; display: inline-block">{{message.sender}}:</p>
            <p style="display:inline-block"> {{message.message}}</p>
          </v-flex>
          <v-flex md12 class="date-flex">
            <p class="date-body">{{formateDate(message.date)}}</p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-else class="sender mt-2">
        <v-layout row wrap class="sender-message">
          <v-flex md12 class="message-body">
            {{message.message}}
          </v-flex>
          <v-flex md12 class="date-flex">
            <p class="date-body">{{formateDate(message.date)}}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    </div>
  </v-container>
</template>
<script>
export default {
  computed: {
    loadMainChatMessages () {
      return this.$store.getters['loadMainChatMessages']
    },
    getUserName () {
      return this.$store.getters['user']
    }
  },
  methods: {
    formateDate (date) {
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }

      let formatedDate = new Intl.DateTimeFormat('en-US', options).format(date) // "7/22/2018, 7:22:13 AM"
      let formatedTime = formatedDate.split(', ')
      console.log(formatedTime[1])
      return formatedTime[1]
    }
  }
}
</script>

<style scoped>
.chat-window{
  height: 38em;
}
.receiver-message{
  padding: .5em .5em .5em .5em;
  /* width: auto; */
  background: white;
  float: left;
  border-radius: 2%;
}
.sender-message{
  padding: .5em .5em .5em .5em;
  border-radius: 2%;
  float: right;
  background: #C8E6C9;
}
.sender{
  max-height: 10em;
  max-width: 50%;
  margin-left: 30em;
}
.receiver{
  max-height: 10em;
  max-width: 50%;
  margin-right: 30em;
}
.date-flex{
  height: 1em;
  padding: 0 0 0 .4em
}
.message-body{
  font-size: 13px;
}
.date-body{
  float: right;
  font-size: .8em;
  color: grey;
}
p{
  margin-bottom: 0px;
}
</style>

<template>
  <v-container>
    <div class="chat-window">
    <v-layout row wrap v-for="(message, index) in chatMessages" :key="index">
      <v-flex v-if="userName !== message.sender" class="receiver">
        <v-layout row wrap class="receiver-message">
          <v-flex md12 class="message-body">
            {{message.message}}
          </v-flex>
          <v-flex md12 class="date-flex">
            <p class="date-body">{{message.date}}</p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-else class="sender">
        <v-layout row wrap class="sender-message">
          <v-flex md12 class="message-body">
            {{message.message}}
          </v-flex>
          <v-flex md12 class="date-flex">
            <p class="date-body">{{message.date}}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    </div>
    <v-layout row wrap>
      <v-flex md11>
        <input type="text" id="message" placeholder="Type a message">
      <!-- <div id="mario-chat">
        <div id="chat-window">
            <div id="output"></div>
            <div id="feedback"></div>
            <div id="status"></div>
        </div>
        <input type="text" id="handle" placeholder="Name">
        <input type="text" id="message" placeholder="Message">
        <button id="send">Send</button>
      </div> -->
      </v-flex>
      <v-flex md1>
        <!-- <v-btn class="send-btn">Send</v-btn> -->
        <v-btn fab color="#00695C" class="send-btn">
          <v-icon class="send-btn-icon">send</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      chatMessages: [
        {
          message: 'this is first sender message',
          date: '6:30 PM',
          sender: 'haseeb'
        },
        {
          message: 'this is first receiver message',
          date: '6:35 PM',
          sender: 'jawad'
        },
        {
          message: 'this is second sender message',
          date: '6:36 PM',
          sender: 'haseeb'
        },
        {
          message: 'this is second receiver message',
          date: '6:39 PM',
          sender: 'jawad'
        },
        {
          message: 'this is third sender message',
          date: '7:00 PM',
          sender: 'haseeb'
        }
      ],
      userName: 'haseeb'
    }
  }
}
</script>

<style scoped>
.chat-window{
  height: 40em;
}
input{
  padding: 10px 20px;
  box-sizing: border-box;
  background: #eee;
  border: 0;
  display: block;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: 16px;
}
.send-btn{
  margin-top: -.3em;
  margin-left: 1em;
  height: 3.5em;
  width: 3.5em;
}
.send-btn-icon{
  margin-left: .2em;
  color: white!important;
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
  /* font-family: 'Montserrat' */
}
.date-body{
  float: right;
  font-size: .8em;
  color: grey;
}
</style>

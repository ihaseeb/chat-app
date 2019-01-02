<template>
  <div>
    <v-layout class="">
      <v-flex md10 offset-md1 class="mt-3 chat">
        <v-layout>
          <v-flex md3 class="users-panel-flex">
            <!-- user info panel -->
            <users-panel class="users-panel"></users-panel>
          </v-flex>
          <v-flex md9>
            <!-- chat panel -->
            <v-layout row wrap> 
              <v-flex class="chat-panel">
                <chat-panel></chat-panel>
              </v-flex>
              <!-- Message input -->
              <v-flex class="message-input">
                <message-input></message-input>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import UsersPanel from '@/components/chat/UsersPanel'
import ChatPanel from '@/components/chat/ChatPanel'
import MessageInput from '@/components/chat/ChatPanel/MessageInput'
export default {
  components: {
    UsersPanel,
    ChatPanel,
    MessageInput
  }
}
</script>
<style scoped>
.chat{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.users-panel-flex{
  height: 650px;
  min-width: 295px;
  border-right: grey .5px solid;
  background: #FFFFFF;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
}
.chat-panel{
  height: 580px;
  min-width: 900px;
  background: #D7CCC8;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
}
.message-input{
  height: 70px;
  background: #D7CCC8;
  padding: 0 1em 0 1em;
}
/* ScrollBar */
/* width */
::-webkit-scrollbar {
  width: 5px;
  cursor:pointer;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

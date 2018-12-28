<template>
  <div class="user-chat-container">
    <v-layout row wrap>
      <v-flex md3>
        <v-avatar color="indigo">
          <v-icon dark>account_circle</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex md9>
        <v-layout row wrap class="user-name-date">
          <v-flex md8 class="user-name">
            <p>{{chat.userName}}</p>
          </v-flex>
          <v-flex md4 class="last-message-date">
            <p>{{chat.messageDate}}</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md12 class="user-message">
            <p>{{chat.message}}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  props: ['chat']
}
</script>
<style scoped>
  .user-chat-container{
    padding-left: 24px;
    padding-right: 24px;
  }
 .user-name{
   font-size: 1em;
   font-weight: 500;
 }
 .last-message-date{
   font-size: .9em;
   font-weight: 450;
   padding-left: 1.4em;
 }
 .user-message{
   font-size: .9em;
   font-weight: 200;
   opacity: .8;
 }
 .user-name-date{
   height: 2em;
 }
</style>

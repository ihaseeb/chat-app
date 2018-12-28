<template>
  <v-app>
    <v-toolbar
      class="toolbar"
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title" ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="white--text" flat v-if="!user" @click="signIn">Sign In</v-btn>
      <v-btn class="white--text" flat v-if="user" @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="main">
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app class="toolbar">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Chat-App'
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    signIn () {
      this.$router.push('/signin')
    }
  }
}
</script>
<style scoped>
.toolbar{
  /* background: #2098D1; */
  /* background: #D7CCC8; */
  background: #00695C;
  color: white;
}
.main{
  background: #ECEFF1;
}
</style>

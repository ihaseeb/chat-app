
<template>
<div>
  <v-layout>
    <v-flex md6 offset-md3 class="mt-5">
      <v-card>
        <v-container>
          <v-layout row v-if= "error" >
            <v-flex xs12 sm8 md12>
              <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex md4 offset-md5>
              <h1 class="primary--text">Sign in</h1>
            </v-flex>
            <v-flex md10 offset-md1>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  type="email"
                  name="email"
                  autocomplete
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :append-icon="passwordVisibility ? 'visibility_off' : 'visibility'"
                  :type="passwordVisibility ? 'text' : 'password'"
                  @click:append="passwordVisibility = !passwordVisibility"
                  autocomplete="section-blue shipping current-password"
                  hint="At least 6 characters"
                  label="Password"
                  required
                ></v-text-field>
                <v-btn
                  :disabled="!valid && !loading"
                  :loading="loading"
                  @click="submit"
                  class="primary"
                >
                  Sign in
                </v-btn>
              </v-form>
            </v-flex>
            <v-flex m6 offset-md4 class="mt-3">
              <p>Don't have an account? Go to <i class="sign-up" @click="toSignUp">Sign Up</i> </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must have more than 6 characters'
        ],
        passwordVisibility: false
      }
    },
    computed: {
      valid () {
        return this.email !== '' && /\S+@\S+\.\S+/.test(this.email) &&
          this.password !== '' && this.password.length >= 6
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          let userData = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('signUserInwithEmail', userData).then(data => {
            if (data.id) {
              this.$router.push('/')
            }
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      },
      toSignUp () {
        this.$router.push('/signup')
      }
    }
  }
</script>
<style scoped>
.form-title {
  color: #0277bd;
}
.btn-color {
  color: white;
  background: #0277bd;
}
.sign-up{
  color: #0277bd;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}
</style>

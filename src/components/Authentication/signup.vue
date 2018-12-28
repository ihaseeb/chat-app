
<template>
<div>
  <v-layout>
    <v-flex md6 offset-md3 class="mt-5">
      <v-card>
        <v-container>
          <v-layout row v-if= "error" >
            <v-flex xs12 sm8 md6 offset-sm3>
              <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex md7 offset-md5>
              <h1 class="primary--text">Sign up</h1>
            </v-flex>
            <v-flex md10 offset-md1>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>
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
                  autocomplete="section-blue shipping new-password"
                  hint="At least 6 characters"
                  label="Password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                  :append-icon="confirmPasswordVisibility ? 'visibility_off' : 'visibility'"
                  :type="confirmPasswordVisibility ? 'text' : 'password'"
                  @click:append="confirmPasswordVisibility = !confirmPasswordVisibility"
                  autocomplete="section-blue shipping new-password"
                  hint="At least 6 characters"
                  label="Confirm Password"
                  required
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!valid && !loading"
                  :loading="loading"
                  @click="submit"
                  class="primary"
                >
                  Sign up
                </v-btn>
                <!-- <v-btn @click="clear">clear</v-btn> -->
              </v-form>
            </v-flex>
            <v-flex m6 offset-md4 class="mt-4">
              <p>Already have an account? Go to <i class="sign-in" @click="toSignIn">Sign In</i> </p>
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
        name: '',
        nameRules: [
          v => !!v || 'Name is required'
        ],
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
        confirmPassword: '',
        confirmPasswordRules: [
          v => !!v || 'Confirm Password is required',
          v => (v && v === this.password) || "Password don't match"
        ],
        passwordVisibility: false,
        confirmPasswordVisibility: false
      }
    },
    computed: {
      valid () {
        return this.name !== '' &&
          this.email !== '' && /\S+@\S+\.\S+/.test(this.email) &&
          this.password !== '' && this.password.length >= 6 &&
          this.confirmPassword !== '' && this.confirmPassword.length >= 6 &&
          this.password === this.confirmPassword
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
          console.log('data', this.email, this.name, this.password)
          let userData = {
            email: this.email,
            name: this.name,
            password: this.password
          }
          this.$store.dispatch('signUserUp', userData).then(data => {
            if (data.uid) {
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
      toSignIn () {
        this.$router.push('/signin')
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
.sign-in {
  color: #0277bd;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}
</style>

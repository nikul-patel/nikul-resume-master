<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text class="text-xs-center">
      <content-section title="Contact Me">
        <form
          netlify
          netlify-honeypot="bot-field"
        >
          <v-container>
            <v-layout wrap>
              <v-flex
                md5
                sm12
                xs12
                pa-2
              >
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="25"
                  label="Name *"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                />
              </v-flex>
              <v-flex
                md7
                sm12
                xs12
                pa-2
              >
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail *"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                />
              </v-flex>
              <v-flex
                md12
                sm12
                xs12
                pa-2
              >
                <v-text-field
                  v-model="subject"
                  label="Subject"
                  required
                />
              </v-flex>
              <v-flex
                md12
                sm12
                xs12
                pa-2
              >
                <v-textarea
                  v-model="message"
                  :error-messages="messageErrors"
                  label="Message *"
                  required
                  @input="$v.message.$touch()"
                  @blur="$v.message.$touch()"
                />
              </v-flex>
              <v-flex
                key="captcha"
                md12
                sm12
                xs12
              >
                <!--                <vue-recaptcha sitekey="6Lf5HNIZAAAAAEIRzQhYchrSaN5-IDIPj0CAZM6r" >-->
                <!--                </vue-recaptcha>-->
              </v-flex>
              <v-flex
                key="submit"
                md12
                sm12
                xs12
              >
                <v-btn
                  round
                  large
                  class="left"
                  @click="submit"
                >
                  <v-icon small>
                    mdi-email-outline
                  </v-icon>
                  &nbsp;Send Message
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </form>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
// import VueContentLoading, { VclCode } from 'vue-content-loading'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
// import VueRecaptcha from 'vue-recaptcha'

export default {
  name       : 'ContactMe',
  components : { ContentSection },
  mixins     : [validationMixin],
  validations: {
    name   : { required, maxLength: maxLength(25) },
    email  : { required, email },
    message: { required },
  },
  data: () => ({
    futurePage   : 0,
    name         : '',
    email        : '',
    message      : '',
    subject      : '',
    toggleMessage: true,
    loading      : false,
  }),
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('Message should not empty.')
      return errors
    },
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
  },
}
</script>

<style scoped>
    .fill-width {
        width: 100%;
    }
    .pre {
        white-space: pre;
    }
</style>

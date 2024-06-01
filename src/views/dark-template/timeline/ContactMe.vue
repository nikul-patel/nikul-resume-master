<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text class="text-xs-center">
      <content-section title="Contact Me">
        <v-alert
          dense
          text
          outline
          dismissible
          transition="scale-transition"
          :value="success"
          type="success"
        >
          <h1>Thank You!</h1>
          <p>Your message has been successfully sent. I'll contact you very soon! </p>
        </v-alert>
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
                  v-model="contactFormData.name"
                  :error-messages="nameErrors"
                  :counter="25"
                  :disabled="loading"
                  label="Name *"
                  required
                  @input="$v.contactFormData.name.$touch()"
                  @blur="$v.contactFormData.name.$touch()"
                />
              </v-flex>
              <v-flex
                md7
                sm12
                xs12
                pa-2
              >
                <v-text-field
                  v-model="contactFormData.email"
                  :error-messages="emailErrors"
                  :disabled="loading"
                  label="E-mail *"
                  required
                  @input="$v.contactFormData.email.$touch()"
                  @blur="$v.contactFormData.email.$touch()"
                />
              </v-flex>
              <v-flex
                md12
                sm12
                xs12
                pa-2
              >
                <v-text-field
                  v-model="contactFormData.subject"
                  :disabled="loading"
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
                  v-model="contactFormData.message"
                  :error-messages="messageErrors"
                  :disabled="loading"
                  label="Message *"
                  required
                  @input="$v.contactFormData.message.$touch()"
                  @blur="$v.contactFormData.message.$touch()"
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
                  :loading="loading"
                  :disabled="loading"
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name       : 'ContactMe',
  components : { ContentSection },
  mixins     : [validationMixin],
  validations: {
    contactFormData: {
      name   : { required, maxLength: maxLength(25) },
      email  : { required, email },
      message: { required },
    },
  },
  data: () => ({
    futurePage     : 0,
    contactFormData: {
      name   : '',
      email  : '',
      message: '',
      subject: '',
    },
    success      : false,
    toggleMessage: true,
    loading      : false,
  }),
  computed: {
    nameErrors () {
      const errors = []
      // eslint-disable-next-line no-undef
      if (!this.$v.contactFormData.name.$dirty) return errors
      !this.$v.contactFormData.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.contactFormData.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.contactFormData.email.$dirty) return errors
      !this.$v.contactFormData.email.email && errors.push('Must be valid e-mail')
      !this.$v.contactFormData.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.contactFormData.message.$dirty) return errors
      !this.$v.contactFormData.message.required && errors.push('Message should not empty.')
      return errors
    },
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.contactFormData.$anyError)
        this.sendMail()
    },
    sendMail: async function () {
      this.loading = true
      // in a real app, it would be better if the URL is extracted as a env variable
      const url                               = 'https://nikul-contact-email.glitch.me/api/sendEmail'
      const { name, email, message, subject } = this.contactFormData
      const payload                           = {
        name, email, message, subject,
      }
      await fetch(url, {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify(payload),
      })
        .then((response) => {
          if (response.status === 200) {
            this.success = true
            this.resetForm()
            setTimeout(() => {
              this.success = false
            }, 10000)
          }
        })
        .catch(() => {
          this.error = true
        })
        .finally(() => {
          this.loading = false
        })
    },
    resetForm: function () {
      this.$v.$reset()
      this.contactFormData = {
        name   : '',
        email  : '',
        message: '',
        subject: '',
      }
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

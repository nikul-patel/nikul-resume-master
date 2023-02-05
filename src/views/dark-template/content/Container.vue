<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="Who am I?"
      >
        Hello! I am Nikul Patel, a web developer with over 3 years of experience in the industry. I specialize in using technologies such as PHP, Laravel, Codeigniter, React.js, Vue.js, Bootstrap, CSS, and HTML to create dynamic and user-friendly websites and applications.
        I am passionate about developing clean and innovative solutions that meet the unique needs of my clients. I am also a dedicated professional who places a strong emphasis on communication and collaboration to ensure the best results for my clients.
        Thank you for taking the time to visit my portfolio. I am excited to bring my skills and experience to your next project.
      </content-section>
      <content-section
        v-if="educations"
        title="Education"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        title="Skills"
      >
        <template slot="actions">
          (% are relative not absolute)
        </template>
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="4"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
      <content-section
        id="to-contact"
        title="Contact"
      >
        <template>
          <v-flex>
            <div class="text-center">
              <v-btn
                round
                outline
                light
                @click="downloadWithAxios(publicPath('/docs/Resume.pdf'),'RESUME_NIKUL_PATEL.pdf')"
              >
                <v-icon
                  light
                >
                  mdi-file-pdf-box
                </v-icon> &nbsp;Download Resume
              </v-btn>
            </div>
          </v-flex>
        </template>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
import axios from 'axios'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : '',
        text  : '',
        source: '',
      },
    ],
    educations: [
      {
        from       : '2016',
        to         : '2019',
        title      : 'MASTER OF COMPUTER APPLICATION',
        location   : 'Charusat University​ - Changa, Gujarat',
        description: '',
      },
      {
        from       : '2013',
        to         : '2016',
        title      : 'BACHELORS OF COMPUTER APPLICATION',
        location   : 'Shri D. N. Institute of Computer Applications - Anand, Gujarat',
        description: '',
      },
      {
        from       : '2011',
        to         : '2013',
        title      : 'HIGHER SECONDARY SCHOOL IN COMMERCE',
        location   : 'H & D Parekh High School - Kheda, Gujarat',
        description: '',
      },
      {
        from       : '2011',
        to         : '2001',
        title      : 'SECONDARY SCHOOL',
        location   : 'H & D Parekh High School - Kheda, Gujarat',
        description: '',
      },
    ],
    skills: [
      {
        title: 'HTML',
        icon : 'mdi-language-html5',
        value: 95,
      },
      {
        title: 'Bootstrap/CSS',
        icon : 'mdi-bootstrap',
        value: 85,
      },
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        value: 95,
      },
      {
        title: 'JavaScript',
        icon : 'mdi-language-javascript',
        value: 80,
      },
      {
        title: 'Laravel Framework',
        icon : 'mdi-laravel',
        value: 85,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 82,
      },
      {
        title: 'CodeIgniter',
        icon : 'mdi-fire',
        value: 82,
      },
      {
        title: 'JQuery',
        icon : 'mdi-jquery',
        value: 80,
      },
      { divider: true },
      {
        title: 'Ubuntu Server',
        icon : 'mdi-ubuntu',
        value: 70,
      },
      {
        title: 'CentOS Server',
        icon : 'mdi-linux',
        value: 47,
      },
      {
        title: 'Web Application Security',
        icon : 'mdi-shield-lock',
        value: 80,
      },
      {
        title: 'Software Development Lifecycle',
        icon : 'mdi-recycle',
        value: 70,
      },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon : 'mdi-truck-fast',
        value: 35,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 75,
      },
      { divider: true },
      {
        title: 'C/C++',
        icon : 'mdi-language-cpp',
        value: 38,
      },
    ],
  }),
  methods: {
    forceFileDownload (response, title) {
      const url  = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href  = url
      link.setAttribute('download', title)
      document.body.appendChild(link)
      link.click()
    },
    downloadWithAxios (url, title) {
      axios({
        method      : 'get',
        url,
        responseType: 'arraybuffer',
      }).then((response) => {
        this.forceFileDownload(response, title)
      }).catch(() => alert('Unable to download the resume'))
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>

<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Nikul <span class="light-blue--text text--lighten-3">Patel</span>
        </h1>
        <span>
          Full Stack Web Developer
        </span>
        <type-write />
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>
<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
import TypeWrite from '@/views/dark-template/sidebar/TypeWrite'

export default {
  name      : 'Sidebar',
  components: {
    SidebarSection,
    Avatar,
    TypeWrite,
  },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'nikulpatel1643@gmail.com',
            },
            {
              name: 'Website',
              icon: 'mdi-web',
              text: 'nikulpatel.netlify.app',
            },
            {
              name: 'Birth Date',
              icon: 'mdi-cake-variant',
              text: 'June 1',
            },
            {
              name: 'Address',
              icon: 'mdi-map-marker',
              text: 'Gujarat,India',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/nikul-patel',
              link: 'https://github.com/nikul-patel',
            },
            {
              icon: 'mdi-gitlab',
              text: 'gitlab.com/nikul-patel',
              link: 'https://gitlab.com/nikul-patel',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'linkedin.com/in/nikul-patel',
              link: 'https://linkedin.com/in/nikul-patel-392b33a2',
            },
            {
              icon: 'mdi-twitter',
              text: 'twitter.com/nikulpatel43',
              link: 'https://twitter.com/nikulpatel43',
            },
            {
              icon: 'mdi-instagram',
              text: 'instagram.com/patel_nikul',
              link: 'https://instagram.com/patel_nikul',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [

            {
              icon: 'mdi-gamepad-variant',
              text: 'Gaming',
            },
            {
              icon: 'mdi-image-filter-hdr',
              text: 'Nature',
            },
            {
              icon: 'mdi-code-tags',
              text: 'Coding',
            },
            {
              icon: 'mdi-cricket',
              text: 'Sports',
            },
            {
              icon: 'mdi-music',
              text: 'Music',
            },
            {
              icon: 'mdi-book-open-page-variant',
              text: 'Reading',
            },
            {
              icon: 'mdi-android-debug-bridge',
              text: 'Tickling Bugs!',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text : 'English',
              value: 80,
            },
            {
              text : 'Hindi',
              value: 100,
            },
            {
              text : 'Gujarati',
              value: 100,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>

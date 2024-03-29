<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        id="timeline"
        :title="'My Experiences'"
      >
        <v-timeline
          dense
        >
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon || ''"
            :class="{transparent: item.transparent}"
            large
          >
            <template
              v-if="item.iconImage"
              v-slot:icon
            >
              <v-avatar>
                <img
                  :src="publicPath(item.iconImage)"
                >
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                v-if="$vuetify.breakpoint.smAndUp"
                md1
                sm2
                align-self-center
              >
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex
                md11
                sm10
                xs12
              >
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex
                        :md7="!!item.image"
                        :md12="!item.image"
                        xs12
                      >
                        <div class="mr-1">
                          <span
                            v-if="item.text"
                            class="pre"
                          >{{ item.text }}</span>
                          <!-- eslint-disable vue/no-v-html -->
                          <div
                            v-else-if="item.html"
                            v-html="item.html"
                          />
                          <!-- eslint-enable vue/no-v-html -->
                        </div>
                      </v-flex>
                      <v-flex
                        v-if="item.image"
                        md5
                        xs12
                      >
                        <div
                          class="mt-2"
                        >
                          <v-carousel
                            v-if="Array.isArray(item.image)"
                            :show-arrows="false"
                            :height="325"
                          >
                            <v-carousel-item
                              v-for="(citem,ci) in item.image"
                              :key="ci"
                              :src="publicPath(citem)"
                            />
                          </v-carousel>
                          <v-img
                            v-else
                            :max-height="item.imageHeight ? item.imageHeight : ''"
                            :src="publicPath(item.image)"
                          />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'Timeline',
  components: { ContentSection },
  data      : () => ({
    detailed: true,
    items   : [
      {
        year       : '2019-20',
        transparent: true,
        title      : 'Junior Software Engineer',
        /* eslint-disable no-useless-escape */
        html       : `
                <ul>
                  <li> Determining the structure and design of web pages and ensuring user experience determines design choices.</li>
                  <li> Designing user interactions on web pages.</li>
                  <li> Implement REST API.</li>
                  <li> Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.</li>
                  <li> Design, develop, and implement database systems based on client requirements.</li>
                  <li> Self-directed and self-motivated with the ability to take charge or play a supporting role</li>
                </ul>
                `,
        /* eslint-enable no-useless-escape */
        icon: 'mdi-briefcase',
      },
      {
        year       : '2020 - present',
        transparent: true,
        title      : 'Freelancer Full Stack Developer',
        /* eslint-disable no-useless-escape */
        html       : `
                <ul>
                  <li> Implement well designed, testable, efficient, and robust code by using best software development general practice.</li>
                  <li> Designing layout/user interface by using standard HTML/CSS/JS practices.</li>
                  <li> Implement REST API.</li>
                  <li> Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.</li>
                  <li> Design, develop, and implement database systems based on client requirements.</li>
                </ul>
                `,
        /* eslint-enable no-useless-escape */
        icon: 'mdi-web',
      },
      {
        year       : '2021 - present',
        transparent: true,
        title      : 'PHP Developer',
        /* eslint-disable no-useless-escape */
        html       : `
                <ul>
                  <li> Determining the structure and design of web pages and ensuring user experience determines design choices.</li>
                  <li> Designing user interactions on web pages.</li>
                  <li> Implement REST API.</li>
                  <li> Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.</li>
                  <li> Design, develop, and implement database systems based on client requirements.</li>
                  <li> Self-directed and self-motivated with the ability to take charge or play a supporting role</li>
                </ul>
                `,
        /* eslint-enable no-useless-escape */
        icon: 'mdi-briefcase',
      },
    ],
  }),
  computed: {
    orderedItems () {
      const items = [...this.items].reverse()
      if (this.detailed)
        return items
      return items.filter((item) => {
        return !item.detailed
      })
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent{
  opacity: 0.6;
}
</style>

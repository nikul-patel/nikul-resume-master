<template>
  <v-app async>
    <v-content>
      <dark-template-container v-if="loading" />
    </v-content>
  </v-app>
</template>

<script>
import DarkTemplateContainer from '@/views/dark-template/Container'

export default {
  name      : 'App',
  components: { DarkTemplateContainer },
  data () {
    return { loading: false }
  },
  mounted () {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete')
        this.loading            = true
    }
  },
}
</script>

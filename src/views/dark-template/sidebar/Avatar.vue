<template>
  <div class="text-md-center">
    <v-avatar
      color="grey lighten-4"
      size="140"
    >
      <img
        :src="publicPath('/img/avtar.jpg')"
        alt="Nikul Patel"
        width="100%"
        height="100%"
      >
    </v-avatar>
  </div>
</template>

<script>
export default { name: 'Avatar' }
</script>

<style scoped>

</style>

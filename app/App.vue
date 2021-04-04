<template>
  <div>
    <h1>{{ content }}</h1>
    <img :src="require('./assets/logo.png')" alt="logo" />
  </div>
</template>

<script>
const log = () => console.log('App')
export default {
  name: 'App',
  data() {
    return {
      content: 'Hello webpack & vue.'
    }
  },
  mounted() {
    this.log()
  },
  methods: {
    log
  }
}
</script>
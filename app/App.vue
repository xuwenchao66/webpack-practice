<template>
  <div>
    <h1>{{ content }}</h1>
    <img :src="require('./assets/logo.png')" alt="logo" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      content: 'Hello webpack & vue.'
    }
  }
}
</script>
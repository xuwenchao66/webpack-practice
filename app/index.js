import { createApp, h } from 'vue'
const app = createApp({
  render() {
    return h('h1', this.content)
  },
  data() {
    return {
      content: 'Hello webpack & vue.'
    }
  }
})
app.mount('#app')

import { createApp, ref } from 'vue'

    createApp({
      setup() {
          const counter = ref(0)
          const dataInput = ref('')
          return {
              counter,
              dataInput
          }
      },
      methods: {
          add(num) {
              this.counter = this.counter + num
          },
          reduce(num) {
              this.counter = this.counter - num
          },
          setData(event, data) {
              this.dataInput = data + ' ' + event.target.value
          },
          showAlert(event) {
              alert(event.target.value)
          }

      }
  }).mount('#events')
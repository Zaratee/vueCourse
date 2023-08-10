import { createApp, ref } from 'vue'

createApp({
  setup() {
      const age = ref(24)
      const data = ref([
          {
              value: 'Carlos Zarate',
              type: 'name'
          },
          {
              value: age,
              type: 'age'
          },
          {
              value: age,
              type: 'age + 5'
          },
      ])

      const imgSrc = 'https://seeklogo.com/images/C/cuphead-logo-DCB0CA40D3-seeklogo.com.png'
      return {
          data,
          age,
          imgSrc
      }
  },
  methods: {

  }
}).mount('#info')
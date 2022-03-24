const app = Vue.createApp ({
    data() {
        return {
            message: 'Hello',
            name: 'Explorers'
        }
    }
})

// tambien podemos poner }).mount('#app') pero para que sea mas legible lo separamos

app.mount('#app')
const app = Vue.createApp ({
    data() {
        return {
            nombre: 'Rodrigo',
            apellido: 'Martinez',
            email: 'rmartinez@inovaccion.mx',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    }
})

// tambien podemos poner }).mount('#app') pero para que sea mas legible lo separamos

app.mount('#app')
const app = Vue.createApp ({
    data() {
        return {
            nombre: 'Rodrigo',
            apellido: 'Martinez',
            email: 'rmartinez@inovaccion.mx',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },
    //para poner todas nuestras funciones que tenga nuestra app usamos methods:
    // aqui adentro podremos poner todas nuestras funciones.
    methods: {
        //En lugar de usar promesas ahora lo vamos a hacer con async para definir que nuestra funcion es asincrona
        // la diferencia de nuestra funcion async es que se va a ir linea por linea de código y hasta que tenga una respuesta avanza a la siguiente linea de código, etc etc.
        async cambiarUsuario() {
            const res = await fetch('https://randomuser.me/api');
            // {} una llave indica que adentro va un objeto
            const { results } = await res.json()

            // ya no necesitamos estar imprimiendo results  console.log(results);

            //para obtener la información dentro de un objeto tenemos que ir poniendo los niveles ejemplo: results.name.first donde result es nuestra constante la Url/API donde sacamos los demas datos
            this.nombre = results[0].name.first
            this.apellido = results[0].name.last
            this.email = results[0].email
            this.genero = results[0].gender
            this.foto = results[0].picture.large
        }
    }

})

// tambien podemos poner }).mount('#app') pero para que sea mas legible lo separamos

app.mount('#app')

<template>
    <body>

    <form action="@" @submit.prevent="register">
    <div class="container">

    <label for="name"><b>Nombre</b></label>
    <input type="text" placeholder="Introduzca su nombre" required v-model="name">
    <hr>

    <label for="email"><b>Correo electrónico</b></label>
    <input type="text" placeholder="Introduzca su correo electrónico"  required v-model="emailF">
    <hr>

    <label for="psw"><b>Contraseña</b></label>
    <input type="password" placeholder="Ingrese su contraseña" required v-model="passwordF">
    <hr>

    <label for="psw-repeat"><b>Repetir contraseña</b></label>
    <input type="password" placeholder="Repita su contraseña" required v-model="passwordF2">
    <hr>

    
    <button type="submit" class="registerbtn">Registrar</button>
  </div>
  
</form>



</body>
</template>

<script>

import '@/firebase/init.js'
import firebase from 'firebase';

export default {
    data() {
        return{
            name: '',
            emailF: '',
            passwordF: '',
            passwordF2: '',
            error: '',
            images: ['https://www.shaades.com/images/Logo%20-%20Menu.png']
        }
    },

    name: 'Register',
    methods: {
        register(){
            this.error = ''
            firebase.auth().createUserWithEmailAndPassword(this.emailF, this.passwordF)
            .then(user => {
              this.$router.push({ name: 'dashboard'})
                //ACTUALIZANDO EL USUARIO
                if(user){
                  user.updateProfile({ 
                    displayName: this.name
                  }).then((u)=>{
                    this.name = ''
                    this.emailF = ''
                    this.passwordF = ''
                    this.passwordF2 = ''
                    
                    console.log(user) 
                    console.log(u) 
                  }).catch((err)=>{
                    this.error = err.message
                  })
                }
                
            }).catch(err =>{
                this.error = err.message  
            })
        }
    }
}
</script>
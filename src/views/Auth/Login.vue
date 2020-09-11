<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');
body {
  font-family: 'Ubuntu', sans-serif;
  background-color: rgb(36, 36, 36);
}

* {
  box-sizing: border-box;
}

b{
  color: white;  
}

.container {
  padding: 16px;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 10%;
  margin-left: 10%;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: rgb(36, 36, 36);
  color: white;
}

input[type=text]:focus, input[type=password]:focus {
  color: white;
  outline: none;
}


.registerbtn {
  background: rgb(20, 20, 20);
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 20px;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 15px;
  transition-duration: 1s;
}

.registerbtn:hover {
  opacity: 4;
  border-radius: 50px;
  transition-duration: 1s;
}

hr {
  border: 1px solid rgb(59, 59, 59);;
  margin-bottom: 20px;
  margin-top: -20px;
}
</style>


<template>
    <body>

    <form action="@" @submit.prevent="login">
  <div class="container">

    <label for="email"><b>Correo electrónico</b></label>
    <input type="text" placeholder="Ingrese su correo electrónico"  required v-model="emailF">
    <hr>

    <label for="psw"><b>Contraseña</b></label>
    <input type="password" placeholder="Ingrese su contraseña"  required v-model="passwordF">
    <hr>
    
    <button type="submit" class="registerbtn">Iniciar sesión</button>
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
            emailF: '',
            passwordF: '',
            error: ''
        }
    },

    name: 'Login',
    methods: {
        login(){
            this.error = ''
            firebase.auth().signInWithEmailAndPassword(this.emailF, this.passwordF)
            .then(user => {
                this.$router.push({name: 'dashboard'})
                console.log(user) 
            }).catch(err => {
                this.error = err.message  
            })
        }
    }
}
</script>
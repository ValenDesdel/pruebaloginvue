<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

body {
  font-family: 'Ubuntu', sans-serif;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  border-radius: 50px;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 900;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
}

.navbar a:hover {
  color: rgb(129, 129, 129);
}

.dropdown-content {
  display: none;
  margin-top: 70px;
  position: absolute;
  background-color: #333;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 50px;
}

.dropdown-content a {
  float: none;
  color: rgb(255, 255, 255);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  color: rgb(129, 129, 129);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.rightlogin{
  background-color: blue;
  border-radius: 50px;
  
}
</style>

<template>

<body>

<div class="navbar">
  <router-link to="/">
  <a class="">Shaades</a>
  </router-link>

<template v-if="user">
  <div class="dropdown">
    <router-link to="">
    <a class="dropbtn">
      {{ user.email }}
      <i class="fa fa-caret-down"></i>
    </a>
    </router-link>
    <div class="dropdown-content">
      <a href="" @click.prevent="logout">Cerrar sesión</a>
    </div>
    </div> 

</template>

<template v-else>
  <router-link to="/login">
    <a class="rightlogin">Iniciar sesión</a>
  </router-link>

  <router-link  to="/register">
    <a class="">Registrarse</a>
  </router-link>
</template>



</div>
</body>
</template>




<script>
import firebase from 'firebase'
export default {
  data() {
    return{
      user: null
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'login'})
      })
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }
}
</script>
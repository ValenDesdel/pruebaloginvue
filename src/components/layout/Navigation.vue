<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
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
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>

<template>
<body>

<div class="navbar">
  <router-link to="/">
  <a class="active">Home</a>
  </router-link>

<template v-if="user">
  <div class="dropdown">
    <router-link to="">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    </router-link>
    <div class="dropdown-content">
      <a href="" @click.prevent="logout">Cerrar sesión</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    </div> 

</template>

<template v-else>
  <router-link to="/login">
    <a class="rightlogin">Login</a>
  </router-link>

  <router-link  to="/register">
    <a class="rightlogin">Register</a>
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
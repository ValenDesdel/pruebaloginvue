<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');
  h1{
    font-family: 'Ubuntu', sans-serif;
    color: white;
    text-align: center;
    margin-top: 70px;
    font-size: 150px;
    transition-duration: 1s;
  }

  h1:hover{
    color: black;
    background-color: white;
    border-radius: 50px;
    transition-duration: 1s;
  }

  p{
    font-family: 'Ubuntu', sans-serif;
    color: white;
    text-align: center;
    margin-top: 70px;
    font-size: 60px;
    transition-duration: 1s;
  }
</style>

<template>
<body>
  <h1>BIENVENIDO A SHAADES</h1>
  <div class="explication">
    <p>Esto es un sistema de registro y login hecho para Shaades Digital</p>
    <p>Valentino Destefano</p>
  </div>
</body>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  }
}
</script>

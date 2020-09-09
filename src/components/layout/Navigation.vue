<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: rgb(22, 22, 22);
}

.topnav a{
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: auto;
  text-decoration: none;
  font-size: 14px;
}

.topnav .rightlogin{
  
  
}




</style>

<template>
<body>

<div class="topnav">

<router-link to="/">
  <a class="active">Home</a>
</router-link>

<router-link to="/login">
  <a class="rightlogin">Login</a>
</router-link>

<router-link  to="/register">
  <a class="rightlogin">Register</a>
</router-link>


</div>

<div style="padding-left:16px">
  
</div>

</body>
</template>



<script>
export default {

}
</script>
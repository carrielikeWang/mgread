<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  /*color: #2c3e50;
  margin-top: 60px;*/
  box-sizing: border-box;
}
*{
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}
body{
  box-sizing: border-box;
  background-color: #f3f3f3;
}
a{
  text-decoration: none;
  color: #2c3e50;
}
.clearfix:after{
  content: '';
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}

ul, ol, li{
  list-style: none;
}
</style>

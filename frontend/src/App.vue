<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

      Le nombre d'accès à la page : <br>
      <span>{{ numberCount }}</span>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
   data: () => ({
      numberCount: 0,
  }),
  mounted() {
       axios
        .get('http://localhost:5000/home', { withCredentials: true }, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res)
          this.numberCount = res.data.pageCount;
          console.log("Nombre d'itérations: " + res.data.pageCount)
        })
        .catch((err) => {
          console.log(err);
        });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

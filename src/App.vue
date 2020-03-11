<template>
  <div id="app">
    <navBar></navBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'

export default {
  name: 'App',
  components: {
    navBar
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
}
body {
  margin: 0;
}
.fade-enter-active {
  animation: bounce-in 1s;
}
/* .fade-leave-active {
  animation: bounce-in 1s reverse;
} */
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

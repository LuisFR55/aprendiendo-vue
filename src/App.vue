<template>
    <div>
        <NavBar></NavBar>
        <div class="container">
          <router-view />
        </div>
    </div>
</template>

<script>
import NavBar from './views/layouts/navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
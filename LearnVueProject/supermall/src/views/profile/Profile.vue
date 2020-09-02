<template>
  <div id = 'profile'>
    <nav-bar class="navbar-profile">
      <div slot = "center">
        个人
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Profile",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .navbar-profile{
    background-color: var(--color-tint);
    color:#ffffff;
  }
</style>

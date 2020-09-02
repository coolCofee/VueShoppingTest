<template>
  <div id = 'category'>
    <nav-bar class="nav-category">
      <div slot="center">
        分类
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Category",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .nav-category{
    background-color: var(--color-tint);
    color:#ffffff;
  }
</style>

<template>
  <div id="cart">
    <nav-bar class="navbar-cart">
      <div slot="center">商品</div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Cart",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .navbar-cart{
    background-color: var(--color-tint);
    color:#ffffff;
  }
</style>

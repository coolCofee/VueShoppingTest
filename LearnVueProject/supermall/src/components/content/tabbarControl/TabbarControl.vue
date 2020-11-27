<template>
    <div id="tabbar-control">
      <div v-for="(item,index) in title" :key="item.title"
           class="tabbar-control-item"
           :class = "{active: index === tabbarIndex}" @click="tabbarOnClick(index)">
          <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabbarControl",
        props:{
          title:{
            type:Array,
            default(){
              return [];
            }
          }
        },
        data(){
          return{
              tabbarIndex:0
          }
        },
        methods:{
          tabbarOnClick(index){
            this.tabbarIndex = index;
            this.$emit("tabOnclick",index);
          }
        }

    }
</script>

<style scoped>
  #tabbar-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .tabbar-control-item{
    flex:1;
  }
  .tabbar-control-item span{
    padding:5px;
  }

  .active{
    color:var(--color-high-text)
  }

  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }



</style>

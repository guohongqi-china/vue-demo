<template>
  <div class="tabbar-item" @click="goToRouter">
    <span class="tabbar-item-icon" v-show="!isHieghter">
      <slot name="icon-normal"></slot>
    </span>
    <span class="tabbar-item-icon" v-show="isHieghter">
      <slot name="icon-active"></slot>
    </span>
    <span class="tabbar-item-text" :style="{color:isHieghter?'red':'black'}">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    isRouter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isHieghter() {
      if (this.$parent.value === this.id) {
        return true;
      }
    }
  },
  methods: {
    goToRouter() {
      this.$parent.change(this.id)
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  background-color: red;
  margin-left: 10px;
  width: 60px; 
}
.tabbar-item-icon{
  display: block;
  background-color: paleturquoise;
  text-align: center;
  padding-top: 4px;
}
.tabbar-item-icon img{
  width: 20px;
  height: 20px;
}
.tabbar-item-text{
  display: inline-block;
  width: 100%;
  background-color: plum;
  text-align: center;
}
</style>
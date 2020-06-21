<template>
  <div class="m-tabbar" :class="{isFixed:fixed}">
    <slot></slot>
  </div>
</template>

<script>
import tabbarItem from "./tabbaritem.vue";

export default {
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  },
  data(){
      return{
          msg:'home'
      }
  },
  computed: {
    value() {
      return this.msg;
    }
  },
  methods: {
    change(ev) {
      this.msg = ev;
    },
    fatherMethod() {
      alert("我是父组件的方法");
    }
  }
};
</script>

<style  scoped>
.m-tabbar {
  background-color: rebeccapurple;
  height: 204px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.isFixed {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 9;
}
</style>
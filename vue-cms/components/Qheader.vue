<template>
  <div class="body" :class="{'is-fixed':fixed}" :style="{backgroundColor:bgcolor}">
    <!-- 左边图标 -->
    <div class="body-left is-left">
      <div class="left-item" v-show="leftShow">
        <slot name="left"></slot>
      </div>
    </div>
    <!-- 标题 -->
    <div class="body-title">
      <span :style="{color:titlecolor,fontSize:fontSize}">{{title}}</span>
    </div>
    <!-- 右边边图标 -->
    <div class="body-right">
      <div class="left-item" v-show="rightShow">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    fixed: {
      type: Boolean,
      default: false
    },
    leftShow: {
      type: Boolean,
      default: true
    },
    rightShow: {
      type: Boolean,
      default: true
    },
    titlecolor: {
      type: String,
      default: "red"
    },
    fontSize: {
      type: String,
      default: "20px"
    },
    bgcolor: {
      type: String,
      default: "lightskyblue"
    },
    titleattribute: {
      type: Object,
      default: () => {
        return {
          color: "red",
          fontSize: "20px"
        };
      }
    }
  },
  created() {
    console.log(this.titleattribute);
  }
};
</script>

<style lang="css" scoped>
.body {
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
.is-fixed {
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}

/* .body span{
      color: bisque;
  } */

.body .body-left {
  width: 80px;
  height: 20px;
  /* background-color: red; */
}
.body .body-right {
  width: 80px;
  height: 20px;
  /* background-color: red; */
  align-items: stretch;
}
.body .body-title {
  height: 30px;
  justify-self: center;
  flex: 1;
  text-align: center;
  /* background-color: seagreen; */
}
.is-left {
  left: 10px;
  /* background-color: saddlebrown; */
  text-align: left;
}
</style>
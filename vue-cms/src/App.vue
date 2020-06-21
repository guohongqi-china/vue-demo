
<template>
  <div class="app-container">
    <!-- <mt-header fixed title='黑马程序员'></mt-header> -->
    <uiheader :title="message" fixed titlecolor="white">
      <span slot="left">左边按钮</span>
    </uiheader>
    <h1 style="background-color:red;margin:0;">这是APP组件</h1>
    <!-- 顶部header区域 -->
    <!-- 中间vue-router区域 -->
    <!-- 底部tabbar区域 -->
    <tabbar>
      <tabbaritem id="home" >
        <img src="./assets/home_active.png" style="width:20px;height:20px" alt slot="icon-active" />
        <img src="./assets/home_normal.png" alt slot="icon-normal" />
        首页
      </tabbaritem>

      <tabbaritem id="message" >
        <img src="./assets/message_active.png" alt slot="icon-active" />
        <img src="./assets/message_normal.png" alt slot="icon-normal" />
        消息
      </tabbaritem>

      <tabbaritem id="person" >
        <img src="./assets/person_active.png" alt slot="icon-active" />
        <img src="./assets/person_normal.png" alt slot="icon-normal" />
        通讯录
      </tabbaritem>

      <tabbaritem id="setting" >
        <img src="./assets/setting_active.png" alt slot="icon-active" />
        <img src="./assets/setting_normal.png" alt slot="icon-normal" />
        设置
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "../components/tabbar.vue";
import tabbaritem from "../components/tabbaritem.vue";
export default {
  data() {
    return {
      message: "uuuuuu",
      titleSetting: {
        color: "yellow",
        fontSize: 20
      }
    };
  },
  components: {
    tabbar,
    tabbaritem
  }
};
</script>

<style scoped>
.titleSett {
  color: aqua;
}
.app-container {
  padding-top: 60px;
}
</style>

 


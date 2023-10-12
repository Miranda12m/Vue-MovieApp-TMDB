<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <SlidebarComp></SlidebarComp>
    <router-view></router-view>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import SlidebarComp from "./components/SlidebarComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
    SlidebarComp,
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>

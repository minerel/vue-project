<template>
  <div>
    <app-header class="container">
    </app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>


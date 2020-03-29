<template>
  <div class="container">
    <Header></Header>
    <div class="row">
      <div class="col-md-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: { Header },
  created() {
    this.$store.dispatch('initStocks');
  },
};
</script>

<style lang="scss">
.container {
padding: 30px;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-18px);
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.1s ease-in;
}
</style>

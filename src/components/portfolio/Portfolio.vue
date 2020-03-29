<template>
  <div>
    <Stock v-for="stock in stocks"
    :stock="stock" :key="`stockers-${stock.id}`"></Stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters(
      { stocks: 'stockPortfolio' },
    ),
  },
  components: {
    Stock,
  },
};
</script>

<style>

</style>

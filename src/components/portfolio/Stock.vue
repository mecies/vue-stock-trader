<template>
<div class="col-sm-12 col-md-12">
  <div class="card">
    <h3 class="card-header alert-success">
      {{ stock.name }} <small>(Price: {{ stock.price }} | Quantity: {{stock.quantity}})</small>
    </h3>
    <div class="card-body">
      <div class="float-left">
        <input v-model.number="quantity"
          type="number" class="form-control"
          placeholder="Quantity"
        />
      </div>
      <div class="float-right">
        <button
          @click="sellStock" class="btn btn-success"
          :disabled="cantSell || quantity <= 0 || !Number.isInteger(quantity)"
        >
          {{cantSell? 'Not enough stocks' : 'Sell'}}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    cantSell() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        quantity: this.quantity,
        stockPrice: this.stock.price,
      };
      this.$store.dispatch('sellStock', order);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
  .card {
    margin: 20px 0 20px 0;
  }
</style>

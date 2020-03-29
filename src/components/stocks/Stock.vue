<template>
<div class="col-sm-12 col-md-12">
  <div class="card">
    <h3 class="card-header alert-success">NAME <small>(Price: PRICE)</small></h3>
    <div class="card-body">
      <div class="float-left">
        <input type="number" class="form-control" placeholder="Quantity" />
      </div>
      <div class="float-right">
        <button class="btn btn-success">Buy</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['stock'],
};
</script>

<style scoped>
  .card {
    margin: 20px 0 20px 0;
  }
</style>

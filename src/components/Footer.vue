<template>
  <footer>
    <div class="mt-3 p-3 bg-white">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-dark">
          <img :src="vue" alt="..." class="mb-4" style="height:30px; width: 30px;" />
          <p class="h6">
            &copy; 2020
            <a>Mine EREL</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data: function() {
    return {
      vue: "/src/img/vue-logo.JPG"
    };
  }
};
</script>

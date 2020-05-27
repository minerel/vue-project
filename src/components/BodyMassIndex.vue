<template>
  <!--partial:BMI Calculator-->
  <div class="row justify-content-center p-md-5 mb-5">
    <div class="col-md-6 card m-3 m-md-5 p-5">
      <h3 class="mb-3 text-center font-weight-bold">{{$t('homePage.bciHead')}}</h3>
      <label class="text-dark mb-2 mt-3" for="height">{{$t('homePage.height')}}</label>
      <input
        type="number"
        class="form-control shadow-sm mb-2"
        id="height"
        v-model="height"
        placeholder="Please enter your height"
      />
      <label class="text-dark mb-2 mt-3" for="weight">{{$t('homePage.weight')}}</label>
      <input
        type="number"
        class="form-control shadow-sm mb-2"
        id="weight"
        v-model="weight"
        placeholder="Please enter your weight"
      />
      <div class="d-flex justify-content-center">
        <h5 class="m-4 font-weight-bold" v-if="height && weight">{{calculate()}}</h5>
      </div>
    </div>
  </div>
  <!--partial-->
</template>
<script>
export default {
  data() {
    return {
      weight: "",
      height: ""
    };
  },
  methods: {
    calculate: function() {
      var x = this.height / 100;
      var y = this.weight;

      var result = y / (x * x);
      result = result.toFixed(2);

      if (result < 18.5) {
        return result + " " + "Underweight";
      } else if (result > 18.5 && result < 25) {
        return result + " " + "Normal weight";
      } else if (result > 25) {
        return result + " " + "Overweight ";
      }
    }
  }
};
</script>
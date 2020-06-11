<template>
  <div>
    <!--partial:slider-->
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/src/img/img8.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/src/img/img7.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/src/img/img6.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/src/img/img10.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/src/img/img11.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/src/img/img12.png" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
    <!--partial-->

    <div class="container my-5">
      <!--partial:section-->
      <h1 class="mb-3 text-center">{{$t('homePage.head')}}</h1>
      <div class="card rounded-lg border-0 p-md-5 my-5">
        <p>{{$t('homePage.p')}}</p>
      </div>
      <h2 class="mb-3 text-center">{{$t('homePage.head2')}}</h2>
      <div class="card rounded-lg border-0 p-md-5 my-5">
        <p v-html="$t('homePage.p2')" />
      </div>
      <!--partial:-->

      <!--partial:BMI Calculator-->
      <app-bmi></app-bmi>
      <!--partial-->

      <!--partial:foods-->
      <app-calorie></app-calorie>
      <!--partial-->

      <app-list></app-list>
    </div>
    
  </div>
</template>
<script>
import FilterList from "./FilterList";
import Calorie from "./Calorie";
import BodyMassIndex from "./BodyMassIndex";
export default {
  components: {
    appList: FilterList,
    appCalorie: Calorie,
    appBmi: BodyMassIndex
  },
  methods: {}
};
</script>



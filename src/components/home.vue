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
    <!-- <button class="btn btn-link">
      <img src="/src/img/like.png" style="height:10%; width:10%" />
    </button> -->
  </div>
</template>
<script>
import filterList from "./FilterList";
import calorie from "./Calorie";
import BodyMassIndex from "./BodyMassIndex";
export default {
  components: {
    appList: filterList,
    appCalorie: calorie,
    appBmi: BodyMassIndex
  },
  methods: {}
};
</script>



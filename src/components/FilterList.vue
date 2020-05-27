<template>
  <div class="row card p-4 m-1 p-md-5 mb-5">
    <div class="row justify-content-center">
      <h3>{{ $t("homePage.calorieHead") }}</h3>
      <p>{{ $t("homePage.calorieText") }}</p>
      <button
        type="button"
        class="btn btn-outline-primary col-md-3"
        data-toggle="modal"
        data-target="#calorieChart"
      >
        <b>Calorie Chart</b>
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="calorieChart"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <b>Calorie Chart</b>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="height:450px; overflow:auto;">
            <input
              class="col-md-12 p-2"
              type="text"
              v-model="searchText"
              placeholder="search food"
            />
            <div>
              <ul>
                <li
                  class="m-3"
                  :v-if="searchText"
                  v-for="food in filtered"
                  :key="food"
                >
                  {{ food }}
                  <hr />
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /Modal -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      foods: [
        "Bananas => 95cal",
        "Avocado => 270cal",
        "Apple => 95cal",
        "Blackberries => 25cal",
        "Lemon => 6cal",
        "Carrots => 30cal",
        "Orange => 60cal",
        "Mango => 107cal",
        "Tomato => 22cal",
        "Cabbage => 31cal",
        "Grapes => 60cal"
      ],
      searchText: ""
    };
  },
  computed: {
    filtered() {
      return this.foods.filter(element => {
        return element.match(this.searchText);
      });
    }
  }
};
</script>

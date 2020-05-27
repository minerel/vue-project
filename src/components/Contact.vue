<template>
  <div class="container" style="margin-top:80px">
    <div class="row mb-5">
      <!--partial-->
      <div class="col-md-6 card rounded-lg border-0 m-3 mt-md-5 p-md-5">
        <h1>{{$t('contactPage.head')}}</h1>
        <p>{{$t('contactPage.p')}}</p>
      </div>
      <!--partial-->

      <!--partial:form-->
      <div class="col-md-5 align-self-center">
        <label class="text-secondary mb-2 mt-5" for="name">{{$t('contactPage.name')}}</label>
        <input type="text" class="form-control mb-2" id="name" v-model="userName" required/>
        <label class="text-secondary mb-2" for="email">{{$t('contactPage.email')}}</label>
        <input type="email" class="form-control mb-2" id="email" v-model="email" required/>
        <label class="text-secondary mb-2" for="note">{{$t('contactPage.note')}}</label>
        <textarea class="form-control mb-2" rows="3" id="note" v-model="note" required></textarea>
        <div class="d-flex justify-content-center">
          <button class="btn btn-lg btn-info col-md-5" @click="save">{{$t('contactPage.submit')}}</button>
        </div>
      </div>
      <!--partial-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactHead: "contact",
      userName: null,
      email: null,
      note: null
    };
  },
  methods: {
    save() {
      this.$http
        .post("https://vuejs-vue-resource-7f145.firebaseio.com/users.json", {
          userName: this.userName,
          email: this.email,
          note: this.note
        })
        .then(response => {
          
        });
    }
  }
};
</script>

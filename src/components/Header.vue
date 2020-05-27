<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <router-link :to="`/${$i18n.locale}/`" tag="div" class="nav-item">
      <a class="navbar-brand" href="#">
        <img
          src="/src/img/apple.png"
          width="40"
          height="40"
          class="d-inline-block align-top"
          alt
          loading="lazy"
        />
        <span class="nutritionist">{{$t('message')}}</span>
      </a>
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <router-link active-class="active" :to="`/${$i18n.locale}`" tag="li" class="nav-item mr-3">
          <a class="nav-link" href="#">{{$t('nav.home')}}</a>
        </router-link>
        <router-link
          active-class="active"
          :to="`/${$i18n.locale}/about`"
          tag="li"
          class="nav-item mr-3"
        >
          <a class="nav-link" href="#">{{$t('nav.about')}}</a>
        </router-link>
        <router-link
          active-class="active"
          :to="`/${$i18n.locale}/contact`"
          tag="li"
          class="nav-item mr-5"
        >
          <a class="nav-link" href="#">{{$t('nav.contact')}}</a>
        </router-link>
        <!-- <div class="locale-changer">
          <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
          </select>
        </div>-->
        <div class="dropdown">
          <button
            class="btn btn-outline-info dropdown-toggle p-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="ml-2">Language</span>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click.prevent="setLocale('en')">
              <img src="/src/img/flag_en.png" class="mr-2" />English
            </a>
            <a class="dropdown-item" href="#" @click.prevent="setLocale('tr')">
              <img src="/src/img/flag_tr.png" class="mr-2" />Turkish
            </a>
          </div>
        </div>
      
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
    }
  }
};
</script>

   
 
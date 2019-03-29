import VueOwlCarousel from './Carousel.vue';

module.exports = {
  install: function(Vue, options) {
    Vue.component('vuejs-owl-carousel', VueOwlCarousel);
  },
};

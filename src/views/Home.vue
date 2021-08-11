<template>
  <Navbar/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Navbar from '@/components/UserNavbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

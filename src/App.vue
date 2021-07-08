<template>
  <div>
    <Alert></Alert>
    <router-view/>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue';
import emitter from '@/assets/javascript/emitter';

export default {
  components: {
    Alert,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>

<style lang="scss">
@import './assets/all';
</style>

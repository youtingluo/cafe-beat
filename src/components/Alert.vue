<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  methods: {
    showAlert(msg) {
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: msg.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    },
    showFailAlert(msg) {
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: msg.message,
        showConfirmButton: false,
        timer: 3000,
      });
    },
  },
  mounted() {
    this.emitter.on('push-message', (response) => {
      if (response.success) {
        this.showAlert(response);
      } else {
        this.showFailAlert(response);
      }
    });
  },
};
</script>

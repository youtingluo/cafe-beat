<template>
  <div></div>
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
        position: 'top',
        icon: 'success',
        title: msg.message,
        showCloseButton: true,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    },
    showFailAlert(msg) {
      this.$swal({
        toast: true,
        position: 'bottom-end',
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

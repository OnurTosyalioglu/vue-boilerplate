<template>
  <div class="col-span-12 mt-16">
    <button
      class="btn btn-block btn-circle gap-4 normal-case"
    >
      {{ $t("auth.login") }}
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    email: String,
  },
};
</script>

<style></style>

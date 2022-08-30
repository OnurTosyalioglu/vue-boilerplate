<template>
  <div class="col-span-12 mt-12">
    <label class="relative block">
      <span
        class="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <v-icon name="md-email-outlined" class="" />
      </span>
      <input
        class="input input-bordered w-full py-2 pl-10 pr-4"
        type="text"
        :placeholder="$t('auth.email')"
        @input="update($event)"
        :value="email"
        name="email"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    email: String,
  },
  data: () => ({}),
  methods: {
    update(event) {
      this.$emit(
        "update:" + event.target.name,
        event.target.value
      );
    },
  },
  watch: {},
};
</script>

<style></style>

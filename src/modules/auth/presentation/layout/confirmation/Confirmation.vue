<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ $t(content) }}
    </template>
  </metainfo>

  <div class="grid grid-cols-12 max-w-sm mx-auto px-4">
    <Header :title="$t('auth.confirmation')" />
    <Password />
    <Password />
    <ConfirmationButton />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import Header from "../../../../main/presentation/component/header/Header.vue";
import ConfirmationButton from "../../component/confirmationButton/ConfirmationButton.vue";
import Password from "../../component/password/Password.vue";

export default {
  setup() {
    useMeta({
      title: "auth.confirmation",
      htmlAttrs: {
        amp: true,
      },
    });
  },
  data: () => ({}),
  components: {
    Header,
    ConfirmationButton,
    Password,
  },
};
</script>

<style></style>

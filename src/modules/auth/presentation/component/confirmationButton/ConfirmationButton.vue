<template>
  <div class="col-span-12 mt-12">
    <button
      class="btn btn-primary btn-block btn-circle normal-case"
    >
      {{ $t("auth.confirm") }}
    </button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"
export default {
  data () {
  
  },
  methods: {
    ...mapActions([

    ]),
  },
  computed: {
    ...mapState({
  
    }),
  }
};
</script>

<style></style>

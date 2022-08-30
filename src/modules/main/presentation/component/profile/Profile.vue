<template>
  <div class="col-span-1 justify-self-center">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="">
        <v-icon name="md-accountcircle-outlined" />
      </label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36"
      >
        <li class="flex self-center">
          <a> {{ $t("main.settings") }}</a>
        </li>
        <li class="flex self-center">
          <a> {{ $t("main.logout") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

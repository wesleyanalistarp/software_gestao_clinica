<template>
  <select ref="selectElement" class="select2 form-select">
    <slot></slot>
  </select>
</template>
  
<script>
import $ from "jquery";
import select2 from "select2";
import "select2/dist/css/select2.min.css";

select2();

export default {
  name: "Select2Component",
  mounted() {
    $(this.$refs.selectElement).select2();
  },
  beforeUnmount() {
    $(this.$refs.selectElement).select2("destroy");
  },
};
</script>
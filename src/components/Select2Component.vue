<template>
  <select ref="selectElement" :value="modelValue" class="select2 form-select" @change="onChange">
    <!-- <option v-for="(option, index) in options" :key="index" :value="option.id">{{ option.nome }}</option> -->
  </select>
</template>

<script setup>
import $ from "jquery";
import select2 from "select2";
import "select2/dist/css/select2.min.css";
import { ref, defineProps, watch, defineEmits } from "vue";

//props
const props = defineProps({
  modelValue: [String, Number],
  options: {
    type: Array,
    required: true,
  }
});
// chama a função sempre que percebe uma alteração na prop
watch(
  () => props.options,
  alterarOptions
)


select2();
const selectElement = ref(null);
function alterarOptions(newOption, oldOption) {


  if ($(selectElement.value).hasClass("select2-hidden-accessible")) {
    $(selectElement.value).select2('destroy');
    $(selectElement.value).empty();
  }


  $(selectElement.value).select2({
    placeholder: "Selecione",
    data: newOption
  });

}

const emit = defineEmits(['update:modelValue']);
const onChange = (event) => {
  emit('update:modelValue', event.target.value); // emite o valor selecionado
};


</script>
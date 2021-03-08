This is how a component could look.

<template>
  <div class="counter">
    [function] Count: {{ valueInternal }}<br />
    <template v-if="!hideButtons">
      <button type="button" @click="onAdd">Add</button>&nbsp;
      <button type="button" @click="onSubtract">
        Sub
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TEST_COUNT } from "../App.vue";

export default defineComponent({
  props: {
    value: Number,
    hideButtons: Boolean
  },
  emits: ["all-mounted"],
  mounted() {
    if (this.value === TEST_COUNT) {
      this.$emit("all-mounted");
    }
  },
  setup: props => {
    const valueInternal = ref<number>(props.value || 0);

    return {
      valueInternal,

      onAdd() {
        valueInternal.value++;
      },
      onSubtract() {
        valueInternal.value--;
      },

      // Some dummy functions for testing
      someOtherMethod1() {
        console.log(valueInternal.value * 1);
      },
      someOtherMethod2() {
        console.log(valueInternal.value * 2);
      },
      someOtherMethod3() {
        console.log(valueInternal.value * 3);
      },
      someOtherMethod4() {
        console.log(valueInternal.value * 4);
      },
      someOtherMethod5() {
        console.log(valueInternal.value * 5);
      },
      someOtherMethod6() {
        console.log(valueInternal.value * 6);
      },
      someOtherMethod7() {
        console.log(valueInternal.value * 7);
      },
      someOtherMethod8() {
        console.log(valueInternal.value * 8);
      },
      someOtherMethod9() {
        console.log(valueInternal.value * 9);
      },
      someOtherMethod10() {
        console.log(valueInternal.value * 10);
      }
    };
  }
});
</script>

<style scoped>
.counter {
  font-size: 2em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>

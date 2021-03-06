This is how a component could look.

<template>
  <div class="counter">
    Counter: {{ valueInternal }}<br />
    <button type="button" @click="onAdd">Add</button>&nbsp;
    <button type="button" @click="onSubtract">Sub</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

class Counter {
  valueInternal: any;

  constructor(val: number) {
    this.valueInternal = ref<number>(val);

    // Guess this is needed because of hasOwn check @ https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/componentPublicInstance.ts#L293
    // We must be able to remove it with official support
    Object.assign(this, {
      onAdd: this.onAdd,
      onSubtract: this.onSubtract
    });
  }

  onAdd() {
    this.valueInternal++;
  }

  onSubtract() {
    this.valueInternal--;
  }

  someOtherMethod() {
    // Statements
  }
}

export default defineComponent({
  props: {
    value: Number
  },
  setup: props => new Counter(props.value || 0)
});
</script>

<style scoped>
.counter {
  font-size: 2em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>

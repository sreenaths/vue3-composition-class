<template>
  <div class="counter">
    Counter: {{ valueInternal }}<br />
    <button type="button" @click="add">Add</button>&nbsp;
    <button type="button" @click="subtract">Sub</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

class Counter {
  valueInternal: Ref<number>;

  constructor(val: number) {
    this.valueInternal = ref(val);

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.valueInternal.value++;
  }

  subtract() {
    this.valueInternal.value--;
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

This is how a component could look.

<template>
  <div class="counter">
    [class] Count: {{ valueInternal }}<br />
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

  // Some dummy functions for testing
  someOtherMethod1() {
    console.log(this.valueInternal * 1);
  }
  someOtherMethod2() {
    console.log(this.valueInternal * 2);
  }
  someOtherMethod3() {
    console.log(this.valueInternal * 3);
  }
  someOtherMethod4() {
    console.log(this.valueInternal * 4);
  }
  someOtherMethod5() {
    console.log(this.valueInternal * 5);
  }
  someOtherMethod6() {
    console.log(this.valueInternal * 6);
  }
  someOtherMethod7() {
    console.log(this.valueInternal * 7);
  }
  someOtherMethod8() {
    console.log(this.valueInternal * 8);
  }
  someOtherMethod9() {
    console.log(this.valueInternal * 9);
  }
  someOtherMethod10() {
    console.log(this.valueInternal * 10);
  }
}

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
  setup: props => new Counter(props.value || 0)
});
</script>

<style scoped>
.counter {
  font-size: 2em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>

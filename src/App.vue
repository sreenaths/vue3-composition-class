<template>
  <h1>Working Demo:</h1>
  <Counter :value="3" />
  <br />
  <hr />
  <div>
    <h1>Perfomance Evaluation:</h1>
    <div class="vertical-panel">
      <h2>Function Style:</h2>
      <button type="button" @click="onEvaluateFunctionStyle">Start</button>
      <div>
        Time taken : {{ functionStyleEndTime - functionStyleStartTime }} ms |
        Memory Used : {{ functionStyleEndMem - functionStyleStartMem }}
      </div>
      <div class="test-panel">
        <CounterFunctionStyle
          v-for="index in functionStyleCount"
          :key="index"
          :value="index"
          :hide-buttons="true"
          @all-mounted="allFunctionStyleComponentsUpdated"
        />
      </div>
    </div>
    <div class="vertical-panel">
      <h2>Class Style:</h2>
      <button type="button" @click="onEvaluateClassStyle">Start</button>
      <div>
        Time taken : {{ classStyleEndTime - classStyleStartTime }} ms |
        Memory Used : {{ classStyleEndMem - classStyleStartMem }}
      </div>
      <div class="test-panel">
        <Counter
          v-for="index in classStyleCount"
          :key="index"
          :value="index"
          :hide-buttons="true"
          @all-mounted="allClassStyleComponentsUpdated"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "./components/Counter.vue";
import CounterFunctionStyle from "./components/CounterFunctionStyle.vue";

export const TEST_COUNT = 10000;

export default defineComponent({
  name: "App",
  components: {
    Counter,
    CounterFunctionStyle
  },
  setup() {
    return {
      functionStyleStartTime: 0,
      functionStyleStartMem: 0,

      classStyleStartTime: 0,
      classStyleStartMem: 0
    };
  },
  data() {
    return {
      functionStyleCount: 0,
      functionStyleEndTime: 0,
      functionStyleEndMem: 0,

      classStyleCount: 0,
      classStyleEndTime: 0,
      classStyleEndMem: 0
    };
  },
  methods: {
    onEvaluateFunctionStyle(): void {
      this.functionStyleStartTime = Date.now();
      this.functionStyleStartMem = (performance as any).memory.usedJSHeapSize;

      this.functionStyleCount = TEST_COUNT;
    },
    onEvaluateClassStyle(): void {
      this.classStyleStartTime = Date.now();
      this.classStyleStartMem = (performance as any).memory.usedJSHeapSize;

      this.classStyleCount = TEST_COUNT;
    },
    allFunctionStyleComponentsUpdated(): void {
      this.functionStyleEndTime = Date.now();
      setTimeout(
        () =>
          (this.functionStyleEndMem = (performance as any).memory.usedJSHeapSize),
        1000
      );
    },
    allClassStyleComponentsUpdated(): void {
      this.classStyleEndTime = Date.now();
      setTimeout(
        () =>
          (this.classStyleEndMem = (performance as any).memory.usedJSHeapSize),
        1000
      );
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vertical-panel {
  width: 40%;
  display: inline-block;

  vertical-align: top;

  .test-panel {
    border: 1px solid silver;
    margin: 10px 30px;
    padding: 5px;

    font-size: 0.5em;
  }
}
</style>

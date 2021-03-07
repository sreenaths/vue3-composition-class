const mem1 = process.memoryUsage();
const time1 = process.hrtime.bigint();

const getInstance = props => {
  const valueInternal = props.value;

  return {
    valueInternal,

    onAdd() {
      valueInternal.value++;
    },
    onSubtract() {
      valueInternal.value--;
    },

    someOtherMethod1() {
      console.log(valueInternal.value);
    },
    someOtherMethod2() {
      console.log(valueInternal.value);
    },
    someOtherMethod3() {
      console.log(valueInternal.value);
    },
    someOtherMethod4() {
      console.log(valueInternal.value);
    },
    someOtherMethod5() {
      console.log(valueInternal.value);
    },
    someOtherMethod6() {
      console.log(valueInternal.value);
    }
  };
};

const instances = new Array(1000).fill({}).map(getInstance);

const time2 = process.hrtime.bigint();
const mem2 = process.memoryUsage();

console.log(`Memory Used: ${mem2.heapUsed - mem1.heapUsed} bytes`); // Memory Used: 532792 bytes
console.log(`Time taken: ${time2 - time1} nanoseconds`); // Time taken: 1573748 nanoseconds

const mem1 = process.memoryUsage();

const getInstance = props => {
  const valueInternal = props.value;

  return {
    valueInternal,

    onAdd() {
      valueInternal.value++;
    },
    onSubtract() {
      valueInternal.value--;
    }
  };
};

const instances = new Array(1000).fill({}).map(getInstance);
const mem2 = process.memoryUsage();

console.log(`Memory Used: ${mem2.heapUsed - mem1.heapUsed} bytes`); //Memory Used: 239656 bytes

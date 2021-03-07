const mem1 = process.memoryUsage();

class Counter {
  valueInternal;

  constructor(props) {
    this.valueInternal = props.value;

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
}

const getInstance2 = props => new Counter(props);

const instances = new Array(1000).fill({}).map(getInstance2);
const mem2 = process.memoryUsage();

console.log(`Memory Used: ${mem2.heapUsed - mem1.heapUsed} bytes`); // Memory Used: 127248 bytes

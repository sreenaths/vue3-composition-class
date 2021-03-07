const mem1 = process.memoryUsage();
const time1 = process.hrtime.bigint();

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

  someOtherFunction1() {
    console.log(this.valueInternal);
  }
  someOtherFunction2() {
    console.log(this.valueInternal);
  }
  someOtherFunction3() {
    console.log(this.valueInternal);
  }
  someOtherFunction4() {
    console.log(this.valueInternal);
  }
  someOtherFunction5() {
    console.log(this.valueInternal);
  }
  someOtherFunction6() {
    console.log(this.valueInternal);
  }
}

const getInstance2 = props => new Counter(props);

const instances = new Array(1000).fill({}).map(getInstance2);

const time2 = process.hrtime.bigint();
const mem2 = process.memoryUsage();

console.log(`Memory Used: ${mem2.heapUsed - mem1.heapUsed} bytes`); // Memory Used: 128528 bytes
console.log(`Time taken: ${time2 - time1} nanoseconds`); // Time taken: 586271 nanoseconds

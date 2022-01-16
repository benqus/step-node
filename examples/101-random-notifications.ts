import { StepNode, ActiveNode, DistributorNode } from '../dist';

// receiver nodes
const receiver1 = new StepNode();
receiver1.processor = (node, input) => console.log('Receiver 1', input);
const receiver2 = new StepNode();
receiver2.processor = (node, input) => console.log('Receiver 2', input);
const receiver3 = new StepNode();
receiver3.processor = (node, input) => console.log('Receiver 3', input);

// distributor node
const distributor = new DistributorNode();
distributor.addTarget(receiver1);
distributor.addTarget(receiver2);
distributor.addTarget(receiver3);

// activator node
const activator = new ActiveNode();
activator.target = distributor;

// random notification emitter
const emitter = new StepNode();
emitter.target = activator;
emitter.processor = (node) => {
  let count = 0;
  function emit() {
    node.next(`Notification #${++count} @ ${new Date().toISOString()}`);
    setTimeout(emit, Math.random() * 1000);
  }
  emit();
};

emitter.process();

// deactivate notification distribution after 10 seconds, reactivate after 5 seconds
setTimeout(() => {
  activator.deactivate();
  setTimeout(() => activator.activate(), 5000);
}, 8000);

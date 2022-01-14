import { SwapNode, StepNode } from '../dist';

// Create target nodes
const targetA = new StepNode();
targetA.processor = (n, ...input) => {
  console.log('Processing', 'targetA', ...input);
};

const targetB = new StepNode();
targetB.processor = (n, ...input) => {
  console.log('Processing', 'targetB', ...input);
};

// Create a switch node
const switchNode = new SwapNode();
switchNode.setTargetA(targetA);
switchNode.setTargetB(targetB);

// create source node
const sourceNode = new StepNode();
sourceNode.target = switchNode;

// start process
sourceNode.process('Hi!');
console.log('Swapping nodes...');
switchNode.swap();
sourceNode.process('Hi!');
console.log('Swapping nodes...');
switchNode.swap();
sourceNode.process('Hi!');
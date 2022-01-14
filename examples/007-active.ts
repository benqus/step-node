import { ActiveNode, StepNode } from '../dist';

// Create target nodes
const targetNode = new StepNode();
targetNode.processor = (n, ...input) => {
  console.log('Processing', ...input);
};

// Create an active 
const activeNode = new ActiveNode();
activeNode.target = targetNode;

// create source node
const sourceNode = new StepNode();
sourceNode.target = activeNode;

// start process
sourceNode.process('Hi!');
sourceNode.process('Hi!');
sourceNode.process('Hi!');
sourceNode.process('Hi!');
console.log('Deactivating node...');
activeNode.deactivate();
sourceNode.process('Hi!');
sourceNode.process('Hi!');
console.log('Activating node...');
activeNode.activate();
sourceNode.process('Hi!');
sourceNode.process('Hi!');
import { ActiveNode, StepNode } from '../dist';

// Create target nodes
const targetNode = new StepNode((n, ...input) => {
  console.log('Processing', ...input);
});

// Create an active 
const activeNode = new ActiveNode();
activeNode.target = targetNode;

// create source node
const sourceNode = new StepNode();
sourceNode.target = activeNode;

// start process
sourceNode.execute('Hi!');
sourceNode.execute('Hi!');
sourceNode.execute('Hi!');
sourceNode.execute('Hi!');
console.log('Deactivating node...');
activeNode.deactivate();
sourceNode.execute('Hi!');
sourceNode.execute('Hi!');
console.log('Activating node...');
activeNode.activate();
sourceNode.execute('Hi!');
sourceNode.execute('Hi!');
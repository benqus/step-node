import { BroadcasterNode, StepNode } from '../dist';

// Create target nodes
const target1 = new StepNode();
target1.processor = (n, ...input) => {
  console.log('Processing','target1', ...input);
};

const target2 = new StepNode();
target2.processor = (n, ...input) => {
  console.log('Processing', 'target2', ...input);
};

const target3 = new StepNode();
target3.processor = (n, ...input) => {
  console.log('Processing', 'target3', ...input);
};

// Create a broadcast node
const broadcastNode = new BroadcasterNode();
// add targets to broadcast node
broadcastNode.addTarget(target1);
broadcastNode.addTarget(target2);
broadcastNode.addTarget(target3);

// create source node
const sourceNode = new StepNode<{}, string>();
sourceNode.target = broadcastNode;

// start process
sourceNode.process('Hi All!');
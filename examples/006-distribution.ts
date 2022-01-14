import { DistributorNode, StepNode } from '../dist';

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
const distributionNode = new DistributorNode();
// add targets to broadcast node
distributionNode.addTarget(target1);
distributionNode.addTarget(target2);
distributionNode.addTarget(target3);

// create source node
const sourceNode = new StepNode<{}, string, string>();
sourceNode.target = distributionNode;

// start process
sourceNode.process('Hi Node!'); // target1
sourceNode.process('Hi Node!'); // target2
sourceNode.process('Hi Node!'); // target3

sourceNode.process('Hi Node!'); // target1
sourceNode.process('Hi Node!'); // target2
sourceNode.process('Hi Node!'); // target3
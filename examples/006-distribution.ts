import { DistributorNode, StepNode } from '../dist';

// Create target nodes
const target1 = new StepNode((n, ...input) => {
  console.log('Processing','target1', ...input);
});

const target2 = new StepNode((n, ...input) => {
  console.log('Processing', 'target2', ...input);
});

const target3 = new StepNode((n, ...input) => {
  console.log('Processing', 'target3', ...input);
});

// Create a distribution node
const distributionNode = new DistributorNode();
// add targets to distribution node
distributionNode.addTarget(target1);
distributionNode.addTarget(target2);
distributionNode.addTarget(target3);

// create source node
const sourceNode = new StepNode<{}, string>();
sourceNode.target = distributionNode;

// start process
sourceNode.execute('Hi Node!'); // target1
sourceNode.execute('Hi Node!'); // target2
sourceNode.execute('Hi Node!'); // target3

sourceNode.execute('Hi Node!'); // target1
sourceNode.execute('Hi Node!'); // target2
sourceNode.execute('Hi Node!'); // target3
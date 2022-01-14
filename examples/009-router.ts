import { RouterNode, StepNode } from '../dist';

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
const routerNode = new RouterNode();
routerNode.route('a').target = targetA;
routerNode.route('b').target = targetB;

// create source node
const sourceNode = new StepNode();
sourceNode.target = routerNode;

// start process
sourceNode.process([ 'a', 'Hi A!' ]);
sourceNode.process([ 'b', 'Hi B!' ]);
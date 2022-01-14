import { StepNode } from '../dist';

import { logger } from './001-basic';

interface AddNodeScope {
  lastValue: number;
}

// add numbers node with scope, input, output types and scope default values
const addNode = new StepNode<AddNodeScope, number>({
  lastValue: 0,
});

// feed output into logger node from first example
addNode.target = logger;

// define processor
addNode.processor = (node, n = 0) => {
  const value = node.scope.lastValue + n;
  
  // update scope after process
  node.scope = { lastValue: value };

  // feed into the target StepNode
  node.next(value);
};

// process stuff
addNode.process();
addNode.process(1);
addNode.process(2);
addNode.process(3);
addNode.process(5);
addNode.process(8);

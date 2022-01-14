import { StepNode } from '../dist';

import { logger } from './001-basic';

export const nameNode = new StepNode<{}, string>();
nameNode.target = logger;

// define a parser to ensure a single input of expected type
nameNode.parser = (...args: Array<unknown>): string => {
  return args.join(' ') || 'Unknown Person';
};

nameNode.processor = (node, i: string): void => {
  const [firstName, ...rest] = i.split(' ');
  const lastName = rest.pop();
  node.next({ firstName, lastName });
};

nameNode.process('Hakuna', 'Matata');

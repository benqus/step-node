import { StepNode } from '../dist';
import { logger } from './001-basic';

export const nameNode = new StepNode<{}, string>();
nameNode.target = logger;
nameNode.parser = (...args: Array<unknown>): string => {
  return args.join(' ') || 'Unknown Person';
};
nameNode.processor = async (node, i: string): Promise<void> => {
  const [firstName, ...rest] = i.split(' ');
  const lastName = rest.pop();

  const output = await new Promise(r => {
    setTimeout(() => r({ firstName, lastName }), 2000);
  });

  node.next(output);
};

logger.process('Processing started');

nameNode.process();


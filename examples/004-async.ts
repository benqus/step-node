import { StepNode } from '../dist';
import { logger } from './001-basic';

export const nameNode = new StepNode<string, {}>(async (node, i: string): Promise<void> => {
  const [ firstName, ...rest ] = i.split(' ');
  const lastName = rest.pop();

  const output = await new Promise(r => {
    setTimeout(() => r({ firstName, lastName }), 2000);
  });

  node.next(output);
});
nameNode.target = logger;

logger.execute('Processing started');

nameNode.execute();


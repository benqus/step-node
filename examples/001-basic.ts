import { StepNode } from '../dist';

// Node that logs stuff
export const logger = new StepNode<String>((node, input: any) => {
  const date = new Date().toISOString();
  console.log(date, input);
});

logger.execute('Hakuna');
logger.execute('Matata');

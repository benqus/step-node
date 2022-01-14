import { StepNode } from '../dist';

// Node that logs stuff
export const logger = new StepNode();
logger.processor = (node, input: any) => {
  const date = new Date().toISOString();
  console.log(date, input);
};

logger.process('Hakuna');
logger.process('Matata');

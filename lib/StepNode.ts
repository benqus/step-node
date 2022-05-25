import { IExecutable, IStepNode } from './types';

export class StepNode<Input = unknown, Output = unknown> implements IStepNode<Input, Output> {
  public target: IExecutable<Output> | null = null;

  constructor(
    /* eslint-disable no-unused-vars  */
    public executor = (node: IStepNode<Input, Output>, input: Input): void => node.next(input as unknown as Output)
  ) {}

  public execute(input?: Input): void {
    try {
      this.executor(this, input);
    } catch (e) {
      console.error('Error:StepNode#process', e);
      throw e;
    }
  }

  public next(output: Output): void {
    this.target?.execute(output);
  }
}

import { IProcessable, IStepNode } from './types';

export class StepNode<Scope = unknown, Input = unknown, Output = unknown> implements IStepNode<Scope, Input, Output> {
  public target: IProcessable = null;

  constructor(public scope: Scope = null) {}

  public parser = (...args: Array<unknown>): Input => args[0] as Input;
  public processor = (node: StepNode<Scope, Input, Output>, input: Input): void =>
    node.next(input as unknown as Output);

  process(...rawInput: Array<any>): void {
    if (typeof this.processor !== 'function') throw new TypeError('Missing Node executor');
    const input = this.parser?.(...rawInput) ?? (rawInput[0] as Input);
    try {
      this.processor(this, input);
    } catch (e) {
      console.error('Error:StepNode#process', e);
      throw e;
    }
  }

  public next(output: Output): void {
    this.target?.process(output);
  }
}

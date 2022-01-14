import { IProcessable, IStepNode } from './types';

export class StepNode<Scope = unknown, Input = unknown> implements IStepNode<Scope, Input> {
  public target: IProcessable = null;

  constructor(public scope: Scope = null) {}

  public parser = (...args: Array<any>): Input => args[0] as Input;
  public processor = (node: StepNode<Scope, Input>, input: Input): void => node.next(input);

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

  public next(...output: Array<any>): void {
    this.target?.process(...output);
  }
}

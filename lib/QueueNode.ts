import { StepNode } from './StepNode';

export class QueueNode<Input = unknown, Output = unknown> extends StepNode<Input, Output> {
  private _t: number | null = null;
  private _timeout: number = 1000;
  private _inputs: Array<Input> = [];

  public get timeout(): number {
    return this._timeout;
  }

  public set timeout(timeout: number) {
    this.clear();
    this._timeout = timeout;
  }

  private _next(): void {
    this._t = setTimeout(() => {
      const [ firstInput, ...remainingInputs ] = this._inputs;
      
      super.execute(firstInput);

      if (remainingInputs.length === 0) return;

      this._inputs = remainingInputs;
      this._next();
    }, this.timeout) as unknown as number;
  }

  public clear(): void {
    if (this._t === null) return;
    clearTimeout(this._t);
    this._t = null;
  }

  public execute(input: Input): void {
    if (!input) return;
    this._inputs.push(input);
    this._next();
  }
}

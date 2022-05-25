import { StepNode } from './StepNode';

export class ThrottleNode<Input = unknown, Output = unknown> extends StepNode<Input, Output> {
  private _t: number | null = null;
  private _timeout: number = 1000;
  private _input: Input | null = null;

  public get timeout(): number {
    return this._timeout;
  }

  public set timeout(timeout: number) {
    this.clear();
    this._timeout = timeout;
    this.execute(this._input);
  }

  public clear(): void {
    if (this._t === null) return;
    clearTimeout(this._t);
    this._t = null;
  }

  public execute(input: Input): void {
    if (!input) return;
  
    this._input = input;

    if (this._t !== null) return;

    this._t = setTimeout(() => {
      this.clear();
      super.execute(this._input as Input);
    }, this.timeout) as unknown as number; // clamp for runtime Browser/Node compatibility
  }
}

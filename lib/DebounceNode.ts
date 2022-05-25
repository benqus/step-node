import { StepNode } from './StepNode';

export class DebounceNode<Input = unknown, Output = unknown> extends StepNode<Input, Output> {
  private _t: number | null = null;

  public clear(): void {
    if (this._t === null) return;
    clearTimeout(this._t);
    this._t = null;
  }

  public execute(input: Input, timeout = 1000): void {
    if (!input) return;
    
    this.clear();
    this._t = setTimeout(() => {
      this.clear();
      super.execute(input);
    }, timeout) as unknown as number;
  }
}

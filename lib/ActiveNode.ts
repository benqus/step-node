import { StepNode } from './StepNode';

export class ActiveNode<Input = unknown, Output = unknown> extends StepNode<Input, Output> {
  private _active: boolean = true;

  get active(): boolean {
    return this._active;
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  toggle() {
    this._active = !this._active;
  }

  execute(input?: Input): void {
    if (this.active) {
      super.execute(input);
    }
  }
}

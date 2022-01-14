import { StepNode } from './StepNode';

export class ActiveNode extends StepNode {

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

  process(...rawInputs: Array<any>): void {
    if (this.active) {
      super.process(...rawInputs);
    }
  }

}

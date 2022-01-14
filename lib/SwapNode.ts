import { StepNode } from './StepNode';
import { IProcessable } from './types';

export class SwapNode extends StepNode {

  private _nodes: Array<IProcessable> = [];

  getTargetA(): IProcessable {
    return this._nodes[0];
  }

  setTargetA(node: IProcessable) {
    this._nodes[0] = node;
    this.target ??= node;
  }

  getTargetB(): IProcessable {
    return this._nodes[0];
  }

  setTargetB(node: IProcessable) {
    this._nodes[1] = node;
    this.target ??= node;
  }

  swap() {
    const [ a, b ] = this._nodes;
    this.target = (this.target === a ? b : a);
  }

}

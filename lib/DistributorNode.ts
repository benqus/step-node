import { BaseMultiTargetNode } from './BaseMultiTargetNode';

export class DistributorNode<Input = unknown> extends BaseMultiTargetNode<Input> {
  private _index: number = 0;

  get index(): number {
    const index = this._index;
    this._index += 1;
    if (this._index >= this.targets.size) this._index = 0;
    return index;
  }

  process(input: Input): void {
    const node = [ ...this.targets ][this.index];
    node?.execute(input);
  }

}

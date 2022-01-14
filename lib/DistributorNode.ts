import { BaseMultiTargetNode } from './BaseMultiTargetNode';

export class DistributorNode extends BaseMultiTargetNode {
  private _index: number = 0;

  get index(): number {
    const index = this._index;
    this._index += 1;
    if (this._index >= this.targets.size) this._index = 0;
    return index;
  }

  process(...args: Array<any>): void {
    const node = [...this.targets][this.index];
    node?.process(...args);
  }

}

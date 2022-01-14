import { IProcessable } from './types';

export class BaseMultiTargetNode implements IProcessable {

  public targets: Set<IProcessable> = new Set();

  addTarget(node: IProcessable): void {
    this.targets.add(node);
  }

  removeTarget(node: IProcessable): void {
    this.targets.delete(node);
  }

  process(...rawInputs: Array<any>): void {
    throw new Error("Method not implemented.");
  }

}

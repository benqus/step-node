import { IProcessable, IStepNode } from "./types";

export class BroadcastNode implements IProcessable {

  private _targets: Set<IStepNode> = new Set();

  addTarget(node: IStepNode): void {
    this._targets.add(node);
  }

  removeTarget(node: IStepNode): void {
    this._targets.delete(node);
  }

  process(...args: Array<any>): void {
    this._targets.forEach(t => t.process(...args));
  }

}

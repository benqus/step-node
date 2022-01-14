import { BaseMultiTargetNode } from './BaseMultiTargetNode';

export class BroadcastNode extends BaseMultiTargetNode {

  process(...rawInputs: Array<any>): void {
    this.targets.forEach(node => node.process(...rawInputs));
  }

}

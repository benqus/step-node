import { BaseMultiTargetNode } from './BaseMultiTargetNode';

export class BroadcasterNode extends BaseMultiTargetNode {

  process(...rawInputs: Array<any>): void {
    this.targets.forEach(node => node.process(...rawInputs));
  }

}

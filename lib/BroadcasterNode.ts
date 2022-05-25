import { BaseMultiTargetNode } from './BaseMultiTargetNode';

export class BroadcasterNode<Input = unknown> extends BaseMultiTargetNode<Input> {

  process(input: Input): void {
    this.targets.forEach(node => node.execute(input));
  }

}

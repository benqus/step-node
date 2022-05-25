import { IExecutable } from './types';

export class BaseMultiTargetNode<Input> implements IExecutable<Input> {

  public targets: Set<IExecutable<Input>> = new Set();

  addTarget(node: IExecutable<Input>): void {
    this.targets.add(node);
  }

  removeTarget(node: IExecutable<Input>): void {
    this.targets.delete(node);
  }

  execute(input: Input): void {
    throw new Error('Method not implemented.');
  }

}

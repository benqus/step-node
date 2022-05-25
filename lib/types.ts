/* eslint-disable no-unused-vars */
export type Args = Array<unknown>;
export type Processor<Node, Input> = (node: Node, input: Input) => void | Promise<void>;

export type RouteParameter = [ string, Args ];

export interface IExecutable<Input> {
  execute(input?: Input): void;
}

export interface ITargetable<Input> {
  /**
   * Next node to feed output into
   */
  target: IExecutable<Input> | null;
}

export interface IRoute extends ITargetable<null> {
  readonly path: string;
}

export interface IStepNode<Input, Output> extends IExecutable<Input>, ITargetable<Output> {
  /**
   * Executor method that receives the input
   */  
  executor: Processor<this, Input>;

  /**
   * Invoke or forward processor output to next step node
   */
  next: (output: Output) => void;
}

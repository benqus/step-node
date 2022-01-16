export type Parser<Input> = (...args: Array<unknown>) => Input;
export type Processor<Node, Input> = (node: Node, input: Input) => void|Promise<void>;

export type RouteParameter = [ string, Array<any> ];

export interface IProcessable {
  process(...rawInputs: Array<any>): void;
}

export interface ITargetable {
  /**
   * Next node to feed output into
   */
  target: IProcessable | null;
}

export interface IRoute extends ITargetable {
  readonly path: string;
}

export interface IStepNode<Scope = unknown, Input = unknown> extends IProcessable, ITargetable {
  /**
   * Scope to preserve data across multiple processes
   */
  scope: Scope | null;

  /**
   * Parser for input to be processed
   */
  parser: Parser<Input>;

  /**
   * Processor method that receives the input
   */
  processor: Processor<this, Input>;

  /**
   * Invoke or forward processor output to next step node
   */
  next: (...outputs: Array<any>) => void;
}

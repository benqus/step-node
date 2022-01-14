export type Parser<Input> = (...args: Array<unknown>) => Input;
export type Processor<Node, Input> = (node: Node, input: Input) => void;

export interface IStepNode<Scope = unknown, Input = unknown, Output = unknown> {
  /**
   * Scope to preserve data across multiple processes
   */
  scope: Scope;

  /**
   * Next node to feed output into
   */
  target: IStepNode<unknown, Output, unknown>;

  /**
   * Start processing (execution)
   */
  process(...rawInputs: Array<unknown>): void;

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
  next: (o: Output) => void;
}

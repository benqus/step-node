import { StepNode } from '../lib/StepNode';

describe('StepNode', () => {
  test('Create', () => {
    const node = new StepNode();

    expect(node.target).toBeNull();
    expect(node.executor).toBeInstanceOf(Function);
  });

  test('Default processor to receive node and input', () => {
    const node = new StepNode();
    node.executor = jest.fn();

    node.execute(1);

    expect(node.executor).toHaveBeenCalled();
    expect(node.executor).toHaveBeenCalledWith(node, 1);
  });

  test('Default processor to invoke StepNode#next() with input parameter', () => {
    const node = new StepNode();
    const spy = jest.spyOn(node, 'next');

    node.execute(1);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

  test('Processor can be async', (done) => {
    const node = new StepNode<number, number>();
    node.executor = async (node: StepNode<number, number>, input: number) => {
      setTimeout(() => {
        node.next(input);
      }, 5);
    };

    node.execute(1);

    setTimeout(done, 10);
  });

  test('Invokes next node', () => {
    const source = new StepNode();
    const target = new StepNode();

    const spy = jest.spyOn(target, 'execute');

    source.target = target;
    source.execute(1);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

});

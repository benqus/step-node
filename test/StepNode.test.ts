import { StepNode } from '../lib/StepNode';

describe('StepNode', () => {
  test('Create', () => {
    const node = new StepNode();

    expect(node.scope).toBeNull();
    expect(node.target).toBeNull();
    expect(node.parser).toBeInstanceOf(Function);
    expect(node.processor).toBeInstanceOf(Function);
  });

  test('Default parser to return the first received function parameter', () => {
    const node = new StepNode();
    const result = node.parser(1, 2, 3);

    expect(result).toEqual(1);
  });

  test('Parser to be invoked at process', () => {
    const node = new StepNode();
    node.parser = jest.fn();

    node.process(1, 2, 3);

    expect(node.parser).toHaveBeenCalled();
    expect(node.parser).toHaveBeenCalledWith(1, 2, 3);
  });

  test('Default processor to receive node and input', () => {
    const node = new StepNode();
    node.processor = jest.fn();

    node.process(1);

    expect(node.processor).toHaveBeenCalled();
    expect(node.processor).toHaveBeenCalledWith(node, 1);
  });

  test('Default processor to invoke StepNode#next() with input parameter', () => {
    const node = new StepNode();
    const spy = jest.spyOn(node, 'next');

    node.process(1);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

  test('Processor can be async', (done) => {
    const node = new StepNode<{}, number>();
    node.processor = async (node: StepNode<{}, number>, input: number) => {
      setTimeout(() => {
        node.next(input);
      }, 5);
    }

    node.process(1);

    setTimeout(done, 10);
  });

  test('Invokes next node', () => {
    const source = new StepNode();
    const target = new StepNode();

    const spy = jest.spyOn(target, 'process');

    source.target = target;
    source.process(1);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

});

import { ActiveNode } from '../lib/ActiveNode';

describe('ActiveNode', () => {
  test('Active by default', () => {
    const node = new ActiveNode();
    node.executor = jest.fn();

    node.execute();

    expect(node.executor).toHaveBeenCalled();
  });

  test('Deactivating does not invoke processor', () => {
    const node = new ActiveNode();
    node.executor = jest.fn();

    node.deactivate();
    node.execute();

    expect(node.executor).not.toHaveBeenCalled();
  });

  test('Reactivating does invoke processor', () => {
    const node = new ActiveNode();
    node.executor = jest.fn();

    node.deactivate();
    node.activate();
    node.execute();

    expect(node.executor).toHaveBeenCalled();
  });

});

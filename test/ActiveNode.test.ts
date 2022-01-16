import { ActiveNode } from '../lib/ActiveNode';

describe('ActiveNode', () => {
  test('Active by default', () => {
    const node = new ActiveNode();
    node.processor = jest.fn();

    node.process();

    expect(node.processor).toHaveBeenCalled();
  });

  test('Deactivating does not invoke processor', () => {
    const node = new ActiveNode();
    node.processor = jest.fn();

    node.deactivate();
    node.process();

    expect(node.processor).not.toHaveBeenCalled();
  });

  test('Reactivating does invoke processor', () => {
    const node = new ActiveNode();
    node.processor = jest.fn();

    node.deactivate();
    node.activate();
    node.process();

    expect(node.processor).toHaveBeenCalled();
  });

});

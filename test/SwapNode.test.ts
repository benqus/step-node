import { SwapNode } from '../lib/SwapNode';
import { createIProcessableFixture } from './fixtures/IProcessableFixture';

describe('SwapNode', () => {
  test('can set target A and becomes default target', () => {
    const node = new SwapNode();
    const target = createIProcessableFixture();

    node.setTargetA(target);

    expect(node.target).toEqual(target);
  });

  test('can set target B and becomes default target', () => {
    const node = new SwapNode();
    const target = createIProcessableFixture();

    node.setTargetB(target);

    expect(node.target).toEqual(target);
  });

  test('can set targets and swap between them and back', () => {
    const node = new SwapNode();
    const targetA = createIProcessableFixture();
    const targetB = createIProcessableFixture();

    node.setTargetA(targetA);
    node.setTargetB(targetB);
    node.swap();

    expect(node.target).toEqual(targetB);

    node.swap();

    expect(node.target).toEqual(targetA);
  });

  test('if target B is missing, target remains A', () => {
    const node = new SwapNode();
    const target = createIProcessableFixture();

    node.setTargetA(target);
    node.swap();
    node.swap();
    node.swap();

    expect(node.target).toEqual(target);
  });

  test('if target A is missing, target remains B', () => {
    const node = new SwapNode();
    const target = createIProcessableFixture();

    node.setTargetB(target);
    node.swap();
    node.swap();
    node.swap();

    expect(node.target).toEqual(target);
  });
});

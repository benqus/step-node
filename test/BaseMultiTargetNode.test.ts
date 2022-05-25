import { BaseMultiTargetNode } from '../lib/BaseMultiTargetNode';
import { createIProcessableFixture } from './fixtures/IProcessableFixture';

describe('BaseMultiTargetNode', () => {

  test('Can add targets', () => {
    const mnode = new BaseMultiTargetNode();

    mnode.addTarget(createIProcessableFixture());
    mnode.addTarget(createIProcessableFixture());

    expect(mnode.targets.size).toEqual(2);
  });

  test('Can remove targets', () => {
    const mnode = new BaseMultiTargetNode();
    const target1 = createIProcessableFixture();
    const target2 = createIProcessableFixture();

    mnode.addTarget(target1);
    mnode.addTarget(target2);

    mnode.removeTarget(target1);

    expect(mnode.targets.size).toEqual(1);
  });

  test('process throws error', () => {
    const mnode = new BaseMultiTargetNode();

    expect(() => mnode.execute(1)).toThrow('Method not implemented.');
  });

});

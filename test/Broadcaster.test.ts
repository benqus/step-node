import { BroadcasterNode } from '../lib/BroadcasterNode';
import { createIProcessableFixture } from './fixtures/IProcessableFixture';

describe('BroadcasterNode', () => {
  test('broadcasts inputs to all targets', () => {
    const t1 = createIProcessableFixture();
    const t2 = createIProcessableFixture();
    const t3 = createIProcessableFixture();

    const bnode = new BroadcasterNode();
    bnode.addTarget(t1);
    bnode.addTarget(t2);
    bnode.addTarget(t3);

    bnode.process(1);

    expect(t1.execute).toHaveBeenCalled();
    expect(t1.execute).toHaveBeenCalledWith(1);

    expect(t2.execute).toHaveBeenCalled();
    expect(t2.execute).toHaveBeenCalledWith(1);

    expect(t3.execute).toHaveBeenCalled();
    expect(t3.execute).toHaveBeenCalledWith(1);
  });
});
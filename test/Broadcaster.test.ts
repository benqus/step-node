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

    bnode.process(1, 2, 3);

    expect(t1.process).toHaveBeenCalled();
    expect(t1.process).toHaveBeenCalledWith(1, 2, 3);

    expect(t2.process).toHaveBeenCalled();
    expect(t2.process).toHaveBeenCalledWith(1, 2, 3);

    expect(t3.process).toHaveBeenCalled();
    expect(t3.process).toHaveBeenCalledWith(1, 2, 3);
  });
});
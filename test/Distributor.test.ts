import { DistributorNode } from '../lib/DistributorNode';
import { createIProcessableFixture } from './fixtures/IProcessableFixture';

describe('BroadcasterNode', () => {
  test('broadcasts inputs to all targets', () => {
    const t1 = createIProcessableFixture();
    const t2 = createIProcessableFixture();
    const t3 = createIProcessableFixture();

    const bnode = new DistributorNode();
    bnode.addTarget(t1);
    bnode.addTarget(t2);
    bnode.addTarget(t3);

    // first call
    bnode.process(1, 2, 3);

    expect(t1.process).toHaveBeenCalled();
    expect(t1.process).toHaveBeenCalledWith(1, 2, 3);

    expect(t2.process).not.toHaveBeenCalled();

    expect(t3.process).not.toHaveBeenCalled();

    // second call
    bnode.process(1, 2, 3);

    expect(t1.process).toHaveBeenCalledTimes(1);

    expect(t2.process).toHaveBeenCalled();
    expect(t2.process).toHaveBeenCalledWith(1, 2, 3);

    expect(t3.process).not.toHaveBeenCalled();

    // third call
    bnode.process(1, 2, 3);

    expect(t1.process).toHaveBeenCalledTimes(1);

    expect(t2.process).toHaveBeenCalledTimes(1);

    expect(t3.process).toHaveBeenCalled();
    expect(t3.process).toHaveBeenCalledWith(1, 2, 3);

    // fourth call
    bnode.process(1, 2, 3);

    expect(t1.process).toHaveBeenCalledTimes(2);
    expect(t1.process).toHaveBeenLastCalledWith(1, 2, 3);

    expect(t2.process).toHaveBeenCalledTimes(1);

    expect(t3.process).toHaveBeenCalledTimes(1);
  });
});
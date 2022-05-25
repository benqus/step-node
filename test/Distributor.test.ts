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
    bnode.process(1);

    expect(t1.execute).toHaveBeenCalled();
    expect(t1.execute).toHaveBeenCalledWith(1);

    expect(t2.execute).not.toHaveBeenCalled();

    expect(t3.execute).not.toHaveBeenCalled();

    // second call
    bnode.process(2);

    expect(t1.execute).toHaveBeenCalledTimes(1);

    expect(t2.execute).toHaveBeenCalled();
    expect(t2.execute).toHaveBeenCalledWith(2);

    expect(t3.execute).not.toHaveBeenCalled();

    // third call
    bnode.process(3);

    expect(t1.execute).toHaveBeenCalledTimes(1);

    expect(t2.execute).toHaveBeenCalledTimes(1);

    expect(t3.execute).toHaveBeenCalled();
    expect(t3.execute).toHaveBeenCalledWith(3);

    // fourth call
    bnode.process(4);

    expect(t1.execute).toHaveBeenCalledTimes(2);
    expect(t1.execute).toHaveBeenLastCalledWith(4);

    expect(t2.execute).toHaveBeenCalledTimes(1);

    expect(t3.execute).toHaveBeenCalledTimes(1);
  });
});
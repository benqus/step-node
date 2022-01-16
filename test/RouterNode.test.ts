import { RouterNode } from '../lib/RouterNode';
import { createIProcessableFixture } from './fixtures/IProcessableFixture';

describe('RouterNode', () => {
  test('Create route', () => {
    const rnode = new RouterNode();
    const path = 'a';

    const route = rnode.route(path);
    
    expect(route.path).toEqual(path);
    expect(route.target).toBeNull();
  });

  test('Setting route target receives process', () => {
    const rnode = new RouterNode();
    const pathA = 'a';
    const pathB = 'b';
    const targetA = createIProcessableFixture();
    const targetB = createIProcessableFixture();

    rnode.route(pathA).target = targetA;
    rnode.route(pathB).target = targetB;

    rnode.process(pathA, 1, 2, 3);
    
    expect(targetA.process).toHaveBeenCalled();
    expect(targetA.process).toHaveBeenCalledWith(1, 2, 3);
    
    expect(targetB.process).not.toHaveBeenCalled();
  });

  test('only the specified route is processed', () => {
    const rnode = new RouterNode();
    const pathA = 'a';
    const pathB = 'b';
    const targetA = createIProcessableFixture();
    const targetB = createIProcessableFixture();

    rnode.route(pathA).target = targetA;
    rnode.route(pathB).target = targetB;

    rnode.process(pathA);
    
    expect(targetA.process).toHaveBeenCalled();
    expect(targetB.process).not.toHaveBeenCalled();
  });
});

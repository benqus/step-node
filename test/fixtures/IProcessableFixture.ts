import { IProcessable } from '../../lib/types';

export function createIProcessableFixture(implementation?: (...args: Array<any>) => void): IProcessable {
  return {
    process: jest.fn(implementation),
  };
}
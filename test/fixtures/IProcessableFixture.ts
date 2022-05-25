import { Args, IExecutable } from '../../lib/types';

export function createIProcessableFixture(implementation?: (...args: Args) => void): IExecutable<unknown> {
  return {
    execute: jest.fn(implementation),
  };
}
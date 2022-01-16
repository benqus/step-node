import { IRoute } from '../../lib/types';

export function createIRouteFixture(path: string): IRoute {
  const target = null;
  return { path, target } as IRoute;
}

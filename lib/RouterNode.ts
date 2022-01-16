import { IRoute, IProcessable } from './types';

export class Route implements IRoute {
  public target: IProcessable = null;

  constructor(public readonly path: string = '') {}
}

export class RouterNode implements IProcessable {
  private _routes: Map<string, IRoute> = new Map();

  route(path: string): IRoute {
    const route = new Route(path);
    this._routes.set(route.path, route);
    return route;
  }

  process(path: string, ...rawInputs: Array<any>): void {
    const route = this._routes.get(path);
    route?.target?.process(...rawInputs);
  }
}

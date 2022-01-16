import { IProcessable } from './types';

export class Route {
  public target: IProcessable = null;

  constructor(public readonly route: string = '') {}
}

export class RouterNode implements IProcessable {
  private _routes: Map<string, Route> = new Map();

  route(path: string): Route {
    const route = new Route(path);
    this._routes.set(path, route);
    return route;
  }

  process([ path, ...rawInputs ]: [string, Array<any>]): void {
    const route = this._routes.get(path);
    route?.target?.process(...rawInputs);
  }
}

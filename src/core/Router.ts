import Route from "./Route";
import Block from "./Block";

interface ComponentConstructable<P extends Record<string, any> = any> {
  new (props: P): Block<P>;
}


class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private _currentRoute: Route | null = null;
  private history = window.history;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];

    Router.__instance = this;
  }

  get currentRoute(): string | null {
    return window.location.pathname;
  }

  public use = (pathname: string, block: ComponentConstructable) => {
    const route = new Route(pathname, block, this.rootQuery);
    this.routes.push(route);

    return this;
  };

  public start = () => {
    window.onpopstate = (() => {
      this._onRoute(window.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  };

  private _onRoute = (pathname: string) => {
    let route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  };

  public go = (pathname: string) => {
    this.history.pushState({}, "", pathname);

    this._onRoute(pathname);
  };

  public back = () => {
    this.history.back();
  };

  public forward = () => {
    this.history.forward();
  };

  private getRoute = (pathname: string) => {
    const route = this.routes.find(route => route.match(pathname));
    if (route) return route;
    else {
      window.location.pathname = "404";
      return this.routes.find(el => el.match("404"));
    }
  };
}
export default new Router("#app");

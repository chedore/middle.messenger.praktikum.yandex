import Route from "./Route";
import Block from './Block';


class Router {
  private _currentRoute: Route | null = null;
  private routes: Route[] = [];
  private history = window.history;
  private static __instance: Router;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
        return Router.__instance;
    }
    this.routes = [];

    Router.__instance = this;
  }

  public use = (pathname:string, block: Block) =>{
    const route = new Route(pathname, block, {rootQuery: this.rootQuery});
    this.routes.push(route);
    return this;
  }

  public start = () => {
    window.onpopstate = (event => {
        this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);
    this._onRoute(window.location.pathname);
  }

  private _onRoute = (pathname: string) => {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
        this._currentRoute.leave();
    }

    this._currentRoute = route;

    if(route !== null){
      route.render(route, pathname);
    }
  }

  public go = (pathname: string) => {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back = () => {
    this.history.back();
  }

  public forward = () => {
    this.history.forward();
  }

  private getRoute = (pathname: string) => {
    const route = this.routes.find(route => route.match(pathname));
    if(!route) {
      return this.routes.find(route => route.match('*'))
    }
    return route
  }
}

export default new Router('#app');
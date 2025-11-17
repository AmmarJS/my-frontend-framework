import Route from "./Route";

class Router {
  private _routes: Route[] = [];

  public constructor() {}

  public addRoute(route: Route) {
    this._routes.push(route);
  }

  public addRoutes(routes: Route[]) {
    this._routes.push(...routes);
  }

  public listenToUrlChanges() {
    this.handleRouteChange(window.location.pathname);

    window.addEventListener("popstate", () => {
      this.handleRouteChange(window.location.pathname);
    });

    const pushState = history.pushState;
    const replaceState = history.replaceState;

    history.pushState = (...args) => {
      pushState.apply(history, args);
      this.handleRouteChange(window.location.pathname);
    };

    history.replaceState = (...args) => {
      replaceState.apply(history, args);
      this.handleRouteChange(window.location.pathname);
    };
  }

  private handleRouteChange(path: string) {
    console.log("URL changed:", path);
    console.log(this._routes);
    for (const route of this._routes) {
      if (route.url === path) {
        route.page.renderPage();
      }
    }
  }
}

export default Router;

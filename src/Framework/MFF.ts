import Router from "./Router/Router";

class MFF {
  private _router: Router = new Router();
  private _appContainer: Element | null = null;

  public constructor(appContainer: Element | null, router: Router) {
    this._appContainer = appContainer;
    this._router = router;
    this._router.listenToUrlChanges();
  }

  public setAppContainer(appContainer: Element | null) {
    this._appContainer = appContainer;
  }

  public setRouter(router: Router) {
    this._router = router;
    this._router.listenToUrlChanges();
  }

  public get router(): Router {
    return this._router;
  }
}

export default MFF;

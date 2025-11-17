import Page from "../Page/Page";

class Route {
  private _url: string = "";
  private _page: Page = new Page(null, { _htmlFile: "", _cssFile: "" });

  public constructor(url: string, page: Page) {
    if (this.isUrlValid(url)) this._url = url;
    if (this.isPageValid(page)) this._page = page;
  }

  private isUrlValid(url: string): boolean {
    if(!url) return false;
    return true;
  }
  private isPageValid(page: Page): boolean {
    if(!page) return false;
    return true;
  }

  public get url(): string {
    return this._url;
  }
  public get page(): Page {
    return this._page;
  }

  public set url(url: string) {
    this._url = url;
  }
  public set page(page: Page) {
    this._page = page;
  }
}

export default Route;

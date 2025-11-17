import type Component from "../Component/Component";
import Renderer from "../Renderer/Renderer";

class Page {
  private _parentContainer: Element | null = null;
  private _component: Component;

  public constructor(parentContainer: Element | null, component: Component) {
    this._component = component;
    if (parentContainer) this._parentContainer = parentContainer;
  }

  public renderPage() {
    if (!this._parentContainer) return;
    if (!this._component._htmlFile) return;

    Renderer.renderHTML(this._component._htmlFile, this._parentContainer);
  }
}

export default Page;

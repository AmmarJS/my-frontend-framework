class Parser {
  private constructor() {}

  public static convertStringIntoHTML(html: string): HTMLElement {
    const doc = new DOMParser().parseFromString(html, "text/html");

    return doc.body;
  }
}

export default Parser;

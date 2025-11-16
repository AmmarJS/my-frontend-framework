import Parser from "../Parser/Parser";

class Renderer {
  public static renderHTML(html: string, parent: Element) {
    const doc = Parser.convertStringIntoHTML(html);

    if (parent.innerHTML !== "") parent.innerHTML = "";

    const nodes = Array.from(doc.children);

    nodes.forEach((el) => {
      parent.appendChild(el);
    });
  }
}

export default Renderer;

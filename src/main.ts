import HomePage from "./Pages/HomePage/HomePage.page.html"
import Renderer from "./Framework/Renderer/Renderer";

const parentContainer = document.querySelector("#app");

if(parentContainer) Renderer.renderHTML(HomePage, parentContainer)

// if(indexPage) indexPage.append(Parser.convertStringIntoHTML(HomePage));
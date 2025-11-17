import MFF from "./Framework/MFF";
import Page from "./Framework/Page/Page";
import Route from "./Framework/Router/Route";
import Router from "./Framework/Router/Router";
import Home from "./Pages/HomePage/HomePage";

const parentContainer = document.querySelector("#app");
const router = new Router();
router.addRoute(new Route("/home", new Page(parentContainer, new Home())))
const mff = new MFF(parentContainer, router);
import HomePage from "./HomePage.page.html"
import HomePageCSS from "./HomePage.css";
import type Component from "../../Framework/Component/Component";

class Home implements Component {
    _htmlFile: string = HomePage;
    _cssFile: string = HomePageCSS;
}

export default Home;

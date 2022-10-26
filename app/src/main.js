import { HomePage } from "./pages/HomePage.js";
import { ProductPage } from "./pages/ProductPage.js";
import { Page404Error } from "./pages/Page404Error.js"

import { Header } from "./components/Header/Header.js";
import { Nav } from "./components/Nav/Nav.js";

import { parseRequestUrl } from "./utils/parseRequestUrl";
import { Slider } from "./components/Slider/Slider.js";

const routes = {
  '/': HomePage,
  '/product/:id': ProductPage,
};
console.log(routes);

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Page404Error;

  const header = document.getElementById('header-container');
  console.log(header)
  header.innerHTML = await Header.render()

  const navbar = document.getElementById('header-navbar');
  navbar.innerHTML = await Nav.render()
  
  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();

}

window.addEventListener('load', router)
window.addEventListener('hashchange', router)



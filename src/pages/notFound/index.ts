export { NotFound as default } from './notFound';

require("babel-core/register");
import { renderDOM } from 'core';
import { NotFound } from './notFound';
// import './app.css';


document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new NotFound());
});

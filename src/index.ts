require('babel-core/register')

import { Block, renderDOM, registerComponent } from './core'
import './app.scss';

import { LoginPage } from './pages/login/login'
import Title from './components/title/'
import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import ErrorComponent from './components/error';
import ControlledInput from './components/controlledInput';
// import Layout from './components/layout';

registerComponent(Title)
registerComponent(Button)
registerComponent(Link);
registerComponent(Input);
registerComponent(ErrorComponent);
registerComponent(ControlledInput);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new LoginPage())
});

(window as any).currentPage = new Proxy(
    { page: 'login' },
    {
      get(target: any, prop) {
        const value = target[prop]
        console.log('get data: ', value)
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, prop, value) {
        target[prop] = value
        console.log(value)
        renderDOM(new target[prop]())
        return true
      },
    },
  )

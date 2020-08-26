import _ from 'lodash';
import printMe from './print.js';
import './styles.css'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
//// document.body.appendChild(component());// Using this old code line would not allow us to use hmr to replace actual code in  webpage.
// + Represents HMR adaptable code.
let element = component(); // + Store the element to re-render on print.js changes
document.body.appendChild(element); // +

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    //// printMe();
    document.body.removeChild(element);// +
    element = component(); // + Re-render the "component" to update the click handler
    document.body.appendChild(element); // +
  })
}
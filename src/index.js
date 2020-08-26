import _ from 'lodash';
import { component1, component2 } from './component.js';
import printMe from './print.js';
import './styles.css'

const element = component1()
document.body.appendChild(element);
document.body.appendChild(component2())

if (module.hot) {
  // alert('hot') // Intutively put here to know when this
  // module.hot flag triggers.
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    document.body.appendChild(component1());
    document.body.appendChild(component2())
  })
}
// ────────────────────────────────────────────────────────
// just notes: What do these do???
// document.body.removeChild()
// document.body.appendChild()
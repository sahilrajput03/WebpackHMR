import printMe, { colorExported } from './print.js';

export function component1() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Helllo', 'webpack'], ' ');

  btn.innerHTML = 'Click mee and and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;

}

export function component2() {
  const element = document.createElement('div')
  element.style.color = 'red';
  element.innerHTML = '<pre>' + JSON.stringify(document, null, 2) + '</pre>'
  // elemen.style.fontfamily = 'Comic Sans';
  // element.innerHTML = 'Cool things'
  // element.innerHTML = _.join(['Whats thisssssss'], '')
  // element.innerHTML = _.join(['Whats', 'thisssssss'], ' ')
  // element.innerHTML = _.join(['<pre>', JSON.stringify(document, null, 2), '</pre>'], '')
  // Below shit doesn't work.
  // element.innerHTML = '<pre>JSON.stringify(document, null, 2)</pre>'
  return element
}

// ────────────────────────────────────────────────────────
// my note:
// Below method to change style doesn't work. :(
// element.style = {
//   ...element.style,
//   "color": "orange"
// }

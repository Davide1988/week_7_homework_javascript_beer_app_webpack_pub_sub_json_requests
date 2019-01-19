const Beers = require('./models/beers.js')
const FirstView = require('./views/first_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');


  const renderSpace = document.querySelector('#container')
  const selector = document.querySelector('#birrette')
  const view = new FirstView(selector , renderSpace)
  view.bindEvents();



  const dataSet = new Beers
  dataSet.getData();
});

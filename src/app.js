const Beers = require('./models/beers.js')
const FirstView = require('./views/first_view.js')
const ForGraphichView = require('./views/for_graphic_view.js')


document.addEventListener('DOMContentLoaded', () => {



  const renderSpace = document.querySelector('#container')
  const selector = document.querySelector('#birrette')
  const view = new FirstView(selector , renderSpace)
  view.bindEvents();

  const header = document.querySelector('#head')
  const allBody = document.querySelector('#container')
  const graphicPage = new ForGraphichView(header, allBody)
  graphicPage.bindEvents();



  const dataSet = new Beers
  dataSet.getData();
});

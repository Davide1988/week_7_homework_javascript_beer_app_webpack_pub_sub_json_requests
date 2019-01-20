const PubSub = require('../helpers/pub_sub.js')
const RenderView = require('./render_view.js')
const ForGraphichView = require('./for_graphic_view.js')

const FirstView = function(selector , container){
  this.selector = selector
  this.container = container
  this.data = null;
};

FirstView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers', (evt)=>{
    this.data = evt.detail
    this.fill(this.data)
    PubSub.publish('forGrapich', this.data)
  })
  this.selector.addEventListener('change', (evt) =>{
  const beerName = evt.target.value
  const beerDetails = this.data.filter((beer) => {
    if (beer.name === beerName){
      return beer
    }
   })
   const passToRender = new RenderView (beerDetails, this.container , beerName);
   passToRender.render();
  })
};

FirstView.prototype.fill = function (beers) {
  beers.forEach((beer) =>{
    const option = document.createElement('option')
    option.textContent = beer.name
    this.selector.appendChild(option)
  })
};



module.exports = FirstView;

const PubSub = require('../helpers/pub_sub.js')

const ForGraphichView =  function (header, body) {
  this.header = header
  this.body = body;
  this.data = [];
}

ForGraphichView.prototype.bindEvents = function () {
  PubSub.subscribe('forGrapich', (evt) =>{
    this.data = evt.detail
    const graphButton = document.createElement('button')
    graphButton.classList.add("graphic")
    graphButton.textContent = "Graphic of my beers"
    this.header.appendChild(graphButton)

    graphButton.addEventListener('click' , (evt) =>{
      evt.preventDefault();
      this.fillGraph()
    })
  })
};

ForGraphichView.prototype.fillGraph = function () {
  this.body.innerHTML = "THIS IS WHERE MY GRAPH WOULD HAVE BEEN IF I HAD MORE TIME"
};




module.exports = ForGraphichView


const RenderView = function(data , container, beerName){
  this.data = data
  this.container = container
  this.beerName = beerName
}


RenderView.prototype.render = function () {
console.log(this.data);
  this.container.innerHTML = " "
  this.data.forEach((object) =>{

    const div = document.createElement('div')
    div.classList.add("beer-result")
    this.container.appendChild(div)


    const name = document.createElement('h3')
    name.textContent = `NAME : ${this.beerName}`
    div.appendChild(name)


    const abv = document.createElement('h3')
    abv.textContent = `ABV : ${object.abv} %`
    div.appendChild(abv)

    const description = document.createElement('p')
    description.textContent = `Description : ${object.description}`
    div.appendChild(description)

    const food = document.createElement('ul')
    food.textContent = "Food pairing : "
    div.appendChild(food)

    object.food_pairing.forEach((element) =>{

      const li = document.createElement('li')
      li.textContent = element
      food.appendChild(li)
    })

    const img = document.createElement('img')
    img.src = object.image_url
    img.classList.add("beer-pic")
    div.appendChild(img)


    const shopLink = document.createElement('a')
    shopLink.href = "https://www.brewdog.com/browse/c-BrewDogBeer-1/"
    shopLink.textContent = "BUY ME !"
    div.appendChild(shopLink)

    const question =  document.createElement('div')
    question.classList.add("question")
    div.appendChild(question)

    const yes = document.createElement('button')
    yes.type = "button"
    yes.textContent = "YES"
    yes.onClick = this.questionYes()
    question.appendChild(yes)
    console.dir(yes);


  })
};


RenderView.prototype.questionYes= function () {

};


module.exports = RenderView;

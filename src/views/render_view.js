
const RenderView = function(data , container, beerName){
  this.data = data
  this.container = container
  this.beerName = beerName
  this.yes
}


RenderView.prototype.render = function () {

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

    console.log(this.beerName);


    if (localStorage.getItem(this.beerName) === "yes"){

       const saveResponse = document.createElement('p')
       saveResponse.textContent = "You had this before mate did you like it?"
       div.appendChild(saveResponse)
    }
    else {


    const question =  document.createElement('div')
    question.classList.add("question")
    div.appendChild(question)

    const sentence = document.createElement('p')
    sentence.textContent = "Have you ever had this beer before???"
    question.appendChild(sentence)


    const yes = document.createElement('button')
    yes.type = "button"
    yes.textContent = "YES"
    yes.value = "yes"
    question.appendChild(yes)


    // const no = document.createElement('button')
    // no.type = "button"
    // no.textContent = "NO"
    // no.value = "no"
    // question.appendChild(no)


    yes.addEventListener('click', (evt) =>{
      evt.preventDefault();
      localStorage.setItem(this.beerName, evt.target.value);
      question.innerHTML = "Thanks for your response!"
    })

    // no.addEventListener('click', (evt) =>{
    //   evt.preventDefault();
    //   console.log(evt.target.value);
    // })

   }
  });
};








module.exports = RenderView;

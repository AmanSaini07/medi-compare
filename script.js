// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

$(function(){

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    centerMode: true,
    centerPadding: '0',
  });

});

function myFunction () {
  let x = document.getElementById("container");
  if (x.style.display === "block") 
  {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  }
}

// function myFunction1() {
//   var x = document.getElementById("container");
//   x.style.display = "none";
// }

document.getElementById('newsPageCard1')

url = 'https://newsapi.org/v2/top-headlines?apiKey=a1979ffaeafd44ef8794c3528c4513a6&q=health'

fetch(url).then(function (response) {
    return response.json()
}).then(function (data) {
    let articles = data.articles
    let newsBigHtml = "";
    // articles.forEach((element) => {
    //   console.log(element["urlToImage"])

    for (let i = 0; i < 3; i++) {
      element = data.articles[i]
      // console.log(i)
      // console.log(element)

        let newsBigCard = `<div class="card" style="width: 25rem;">
                            <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                              <div class="card-body">
                              <h5 class="card-title">${element["title"].slice(0, 50)}...</h5>
                                <p class="card-text">${element["description"].slice(0, 100)}... <a href="${element['url']}" target="_blank" style="color: blue; text-decoration: none;">Read more here</a></p>
                              </div>
                        </div>`

        newsBigHtml += newsBigCard;
    }
    // });

    newsPageCard1.innerHTML = newsBigHtml;
})

document.getElementById('newsPageCard2')

url = 'https://newsapi.org/v2/top-headlines?apiKey=a1979ffaeafd44ef8794c3528c4513a6&q=health'

fetch(url).then(function (response) {
    return response.json()
}).then(function (data) {
    let articles = data.articles
    let newsBigHtml = "";
    // articles.forEach((element) => {
    //   console.log(element["urlToImage"])

    for (let i = 3; i < 6; i++) {
      element = data.articles[i]
      // console.log(i)
      // console.log(element)

        let newsBigCard = `<div class="card" style="width: 25rem;">
                            <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                              <div class="card-body">
                              <h5 class="card-title">${element["title"].slice(0, 50)}...</h5>
                                <p class="card-text">${element["description"].slice(0, 100)}... <a href="${element['url']}" target="_blank" style="color: blue; text-decoration: none;">Read more here</a></p>
                              </div>
                        </div>`

        newsBigHtml += newsBigCard;
    }
    // });

    newsPageCard2.innerHTML = newsBigHtml;
})

document.getElementById('newsPageCard3')

url = 'https://newsapi.org/v2/top-headlines?apiKey=a1979ffaeafd44ef8794c3528c4513a6&q=health'

fetch(url).then(function (response) {
    return response.json()
}).then(function (data) {
    let articles = data.articles
    let newsBigHtml = "";
    // articles.forEach((element) => {
    //   console.log(element["urlToImage"])

    for (let i = 6; i < 9; i++) {
      element = data.articles[i]
      // console.log(i)
      // console.log(element)

        let newsBigCard = `<div class="card" style="width: 25rem;">
                            <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                              <div class="card-body">
                              <h5 class="card-title">${element["title"].slice(0, 50)}...</h5>
                                <p class="card-text">${element["description"].slice(0, 100)}... <a href="${element['url']}" target="_blank" style="color: blue; text-decoration: none;">Read more here</a></p>
                              </div>
                        </div>`

        newsBigHtml += newsBigCard;
    }
    // });

    newsPageCard3.innerHTML = newsBigHtml;
})

document.getElementById('newsPageCard4')

url = 'https://newsapi.org/v2/top-headlines?apiKey=a1979ffaeafd44ef8794c3528c4513a6&q=health'

fetch(url).then(function (response) {
    return response.json()
}).then(function (data) {
    let articles = data.articles
    let newsBigHtml = "";
    // articles.forEach((element) => {
    //   console.log(element["urlToImage"])

    for (let i = 9; i < 12; i++) {
      element = data.articles[i]
      // console.log(i)
      // console.log(element)

        let newsBigCard = `<div class="card" style="width: 25rem;">
                            <img src="${element["urlToImage"]}" class="card-img-top" alt="Image Not Found">
                              <div class="card-body">
                              <h5 class="card-title">${element["title"].slice(0, 50)}...</h5>
                                <p class="card-text">${element["description"].slice(0, 100)}... <a href="${element['url']}" target="_blank" style="color: blue; text-decoration: none;">Read more here</a></p>
                              </div>
                        </div>`

        newsBigHtml += newsBigCard;
    }
    // });

    newsPageCard4.innerHTML = newsBigHtml;
})





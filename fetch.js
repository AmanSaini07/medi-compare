document.getElementById('productCards')

// source = '.json'
// apiKey = 'XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'
// url = `https://medicompare-2c108-default-rtdb.firebaseio.com/${source}?auth=${apiKey}`

let url = 'https://obscure-ridge-32410.herokuapp.com/DataLimit?limit=5'

// console.log(url)
fetch(url).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let medicine = data
  // console.log(medicine) 
  let cardHtml = "";
  medicine.forEach((element) => {
    // console.log(element)

    let productCard =

      `<div class="card" style="width: 18rem;">
                    <img src="Images/image_4.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${element["Medicine_Names"]}</h5>
                      <p>Actual Price : Rs. ${element["Price"]}</p>
                      <p>Discount(%) : ${element["Discount"]}</p>
                      <p>Website Name : ${element["Website_Names"]}</p>
                      <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`

    cardHtml += productCard;

  });

  productCards.innerHTML = cardHtml;
})

// for bottom cards

document.getElementById('doctorRefernce')

let docInfoUrl = 'https://doctor-s-information-11241-default-rtdb.firebaseio.com/.json?auth=NynYJBx20xTcPdSiIKriyF4nW02sJ61o92qza8Yf'

// console.log(url)
fetch(docInfoUrl).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let infoData = data.Information
  // console.log(infoData) 
  let docInfoCardHtml = "";
  infoData.forEach((element) => {
    // console.log(element)

    if (element.SYMPTOMS == "ACNE") {

      // console.log(element["DOCTOR'S NAME"])

      let infoCard =

        `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element["DOCTOR'S NAME"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Suggested For: ${element["SYMPTOMS"]}</h6>
                      <p class="card-text">${element["SPEACILIST"]}</p>
                      <p class="card-text">${element["EXPIRENCE"]}</p>
                      <a href="#" class="card-link">Contact: XXXXX XXXXX</a>
                        </div>
                        </div>`

      docInfoCardHtml += infoCard;

    }
  });

  doctorRefernce.innerHTML = docInfoCardHtml;
})

// for category doctor refrence page - card1

document.getElementById('doctorRefernce1')

let docInfoUrl1 = 'https://doctor-s-information-11241-default-rtdb.firebaseio.com/.json?auth=NynYJBx20xTcPdSiIKriyF4nW02sJ61o92qza8Yf'

// console.log(url)
fetch(docInfoUrl1).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let infoData1 = data.Information
  // console.log(infoData) 
  let docInfoCardHtml1 = "";
  infoData1.forEach((element) => {
    // console.log(element)

    if (element.SYMPTOMS == "ACNE") {
      // console.log(element["DOCTOR'S NAME"])

      let infoCard1 =

        `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element["DOCTOR'S NAME"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Suggested For: ${element["SYMPTOMS"]}</h6>
                      <p class="card-text">${element["SPEACILIST"]}</p>
                      <p class="card-text">${element["EXPIRENCE"]}</p>
                      <a href="#" class="card-link">Contact: XXXXX XXXXX</a>
                        </div>
                        </div>`

      docInfoCardHtml1 += infoCard1;

    }
  });

  doctorRefernce1.innerHTML = docInfoCardHtml1;
})

// for category doctor refrence page - card2

document.getElementById('doctorRefernce2')

let docInfoUrl2 = 'https://doctor-s-information-11241-default-rtdb.firebaseio.com/.json?auth=NynYJBx20xTcPdSiIKriyF4nW02sJ61o92qza8Yf'

// console.log(url)
fetch(docInfoUrl2).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let infoData2 = data.Information
  // console.log(infoData) 
  let docInfoCardHtml2 = "";
  infoData2.forEach((element) => {
    // console.log(element)

    if (element.SYMPTOMS == "FEVER") {
      // console.log(element["DOCTOR'S NAME"])

      let infoCard2 =

        `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element["DOCTOR'S NAME"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Suggested For: ${element["SYMPTOMS"]}</h6>
                      <p class="card-text">${element["SPEACILIST"]}</p>
                      <p class="card-text">${element["EXPIRENCE"]}</p>
                      <a href="#" class="card-link">Contact: XXXXX XXXXX</a>
                        </div>
                        </div>`

      docInfoCardHtml2 += infoCard2;

    }
  });

  doctorRefernce2.innerHTML = docInfoCardHtml2;
})

// for category doctor refrence page - card3

document.getElementById('doctorRefernce3')

let docInfoUrl3 = 'https://doctor-s-information-11241-default-rtdb.firebaseio.com/.json?auth=NynYJBx20xTcPdSiIKriyF4nW02sJ61o92qza8Yf'

// console.log(url)
fetch(docInfoUrl3).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let infoData3 = data.Information
  // console.log(infoData) 
  let docInfoCardHtml3 = "";
  infoData3.forEach((element) => {
    // console.log(element)

    if (element.SYMPTOMS == "KIDNEY STONE") {
      // console.log(element["DOCTOR'S NAME"])

      let infoCard3 =

        `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element["DOCTOR'S NAME"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Suggested For: ${element["SYMPTOMS"]}</h6>
                      <p class="card-text">${element["SPEACILIST"]}</p>
                      <p class="card-text">${element["EXPIRENCE"]}</p>
                      <a href="#" class="card-link">Contact: XXXXX XXXXX</a>
                        </div>
                        </div>`

      docInfoCardHtml3 += infoCard3;

    }
  });

  doctorRefernce3.innerHTML = docInfoCardHtml3;
})

// for category doctor refrence page - card4

document.getElementById('doctorRefernce4')

let docInfoUrl4 = 'https://doctor-s-information-11241-default-rtdb.firebaseio.com/.json?auth=NynYJBx20xTcPdSiIKriyF4nW02sJ61o92qza8Yf'

// console.log(url)
fetch(docInfoUrl4).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let infoData4 = data.Information
  // console.log(infoData) 
  let docInfoCardHtml4 = "";
  infoData4.forEach((element) => {
    // console.log(element)

    if (element.SYMPTOMS == "DIABETES") {
      // console.log(element["DOCTOR'S NAME"])

      let infoCard4 =

        `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element["DOCTOR'S NAME"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Suggested For: ${element["SYMPTOMS"]}</h6>
                      <p class="card-text">${element["SPEACILIST"]}</p>
                      <p class="card-text">${element["EXPIRENCE"]}</p>
                      <a href="#" class="card-link">Contact: XXXXX XXXXX</a>
                        </div>
                        </div>`

      docInfoCardHtml4 += infoCard4;

    }
  });

  doctorRefernce4.innerHTML = docInfoCardHtml4;
})

// for category doctor refrence page - card5

document.getElementById('doctorRefernce5')

let docInfoUrl5 = 'https://doctor-s-information-11241-default-rtdb.firebaseio.com/.json?auth=NynYJBx20xTcPdSiIKriyF4nW02sJ61o92qza8Yf'

// console.log(url)
fetch(docInfoUrl5).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let infoData5 = data.Information
  // console.log(infoData) 
  let docInfoCardHtml5 = "";
  infoData5.forEach((element) => {
    // console.log(element)

    if (element.SYMPTOMS == "BACTERIAL INFECTION") {
      // console.log(element["DOCTOR'S NAME"])

      let infoCard5 =

        `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element["DOCTOR'S NAME"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Suggested For: ${element["SYMPTOMS"]}</h6>
                      <p class="card-text">${element["SPEACILIST"]}</p>
                      <p class="card-text">${element["EXPIRENCE"]}</p>
                      <a href="#" class="card-link">Contact: XXXXX XXXXX</a>
                        </div>
                        </div>`

      docInfoCardHtml5 += infoCard5;

    }
  });

  doctorRefernce5.innerHTML = docInfoCardHtml5;
})

// for category doctor refrence page - card6

document.getElementById('doctorRefernce6')

let docInfoUrl6 = 'https://doctor-s-information-11241-default-rtdb.firebaseio.com/.json?auth=NynYJBx20xTcPdSiIKriyF4nW02sJ61o92qza8Yf'

// console.log(url)
fetch(docInfoUrl6).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let infoData6 = data.Information
  // console.log(infoData) 
  let docInfoCardHtml6 = "";
  infoData6.forEach((element) => {
    // console.log(element)

    if (element.SYMPTOMS == "ARTHRITIES") {
      // console.log(element["DOCTOR'S NAME"])

      let infoCard6 =

        `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element["DOCTOR'S NAME"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Suggested For: ${element["SYMPTOMS"]}</h6>
                      <p class="card-text">${element["SPEACILIST"]}</p>
                      <p class="card-text">${element["EXPIRENCE"]}</p>
                      <a href="#" class="card-link">Contact: XXXXX XXXXX</a>
                        </div>
                        </div>`

      docInfoCardHtml6 += infoCard6;

    }
  });

  doctorRefernce6.innerHTML = docInfoCardHtml6;
})

// for category doctor refrence page - card7

document.getElementById('doctorRefernce7')

let docInfoUrl7 = 'https://doctor-s-information-11241-default-rtdb.firebaseio.com/.json?auth=NynYJBx20xTcPdSiIKriyF4nW02sJ61o92qza8Yf'

// console.log(url)
fetch(docInfoUrl7).then(function (response) {
  // console.log(response)
  return response.json()
}).then(function (data) {
  let infoData7 = data.Information
  // console.log(infoData) 
  let docInfoCardHtml7 = "";
  infoData7.forEach((element) => {
    // console.log(element)

    if (element.SYMPTOMS == "ANXIETY") {

      let infoCard7 =

        `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element["DOCTOR'S NAME"]}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Suggested For: ${element["SYMPTOMS"]}</h6>
                      <p class="card-text">${element["SPEACILIST"]}</p>
                      <p class="card-text">${element["EXPIRENCE"]}</p>
                      <a href="#" class="card-link">Contact: XXXXX XXXXX</a>
                        </div>
                        </div>`

      docInfoCardHtml7 += infoCard7;

    }
  });

  doctorRefernce7.innerHTML = docInfoCardHtml7;
})

function loadMore() {
  let a = document.getElementById("bottomContainer");
  if (a.style.display === "block") {
    a.style.display = "none";
  }
  else {
    a.style.display = "block";
  }

  let btnContainer = document.getElementById("btnContainer")
  btnContainer.style.display = "none";
}

document.getElementById('newsAccordion')

url = 'https://newsapi.org/v2/top-headlines?apiKey=a1979ffaeafd44ef8794c3528c4513a6&q=health'

fetch(url).then(function (response) {
  return response.json()
}).then(function (data) {
  let articles = data.articles
  let newsHtml = "";
  // articles.forEach((element, index) => {
  //   console.log(element)

  for (let num = 1; num <= 5; num++) {
    index = num;
    // console.log(index)
  }

  for (let i = 0; i < 5; i++) {
    element = data.articles[i]
    // console.log(i)
    // console.log(element)

    let tmp = "One";
    if (i === 1) tmp = "Two";
    else if (i === 2) tmp = "Three";
    else if (i === 3) tmp = "Four";
    else if (i === 4) tmp = "Five";

    let newsCard = `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${tmp}">

                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${tmp}" aria-expanded="true" aria-controls="collapse${tmp}">
                      <b> ${element["title"]}</b>
                      </button>

                    </h2>
                        <div id="collapse${tmp}" class="accordion-collapse collapse" aria-labelledby="heading${tmp}" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                          ${element["description"].slice(0, 120)}... <a href="${element['url']}" target="_blank" style="color: blue; text-decoration: none;">Read more here</a>
                          </div>
                  </div>`

    newsHtml += newsCard;
  }

  // }); 
  newsAccordion.innerHTML = newsHtml;

})



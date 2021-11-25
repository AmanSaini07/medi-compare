// for category page - card1

document.getElementById('productCards1')

let medCatURL1 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL1).then(function(response){
    return response.json()
}).then(function(data){
    let medCat1 = data.Medicine
    let medCatCardHTML1 = ""; 
    let mediList1 = new Set();

    medCat1.forEach((element) => {
      if(element.Symptoms == "ADHD" && element.Website_Names === 'NETMEDS'){
            mediList1.add(element);                
        }
    });

    for (let items of mediList1) {
        let medCard1 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML1 += medCard1;
        // console.log('<MedicineName>', items);
    }

    productCards1.innerHTML = medCatCardHTML1;

    // console.log(medCatCardHTML1);
})

// for category page - card2

document.getElementById('productCards2')

let medCatURL2 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL2).then(function(response){
    return response.json()
}).then(function(data){
    let medCat2 = data.Medicine
    let medCatCardHTML2 = ""; 
    let mediList2 = new Set();
    let count = 0;

    medCat2.forEach((element) => {
      if(element.Symptoms == "Alchol Addition" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList2.add(element);    
            
        }
    });

    for (let items of mediList2) {
      // console.log(items)

        let medCard2 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML2 += medCard2;
    }

    productCards2.innerHTML = medCatCardHTML2;
})

// for category page - card3

document.getElementById('productCards3')

let medCatURL3 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL3).then(function(response){
    return response.json()
}).then(function(data){
    let medCat3 = data.Medicine
    let medCatCardHTML3 = ""; 
    let mediList3 = new Set();
    let count = 0;

    medCat3.forEach((element) => {
      if(element.Symptoms == "Amoebiasis" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList3.add(element);    
            
        }
    });

    for (let items of mediList3) {
      // console.log(items)

        let medCard3 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML3 += medCard3;
    }

    productCards3.innerHTML = medCatCardHTML3;
})

// for category page - card4

document.getElementById('productCards4')

let medCatURL4 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL4).then(function(response){
    return response.json()
}).then(function(data){
    let medCat4 = data.Medicine
    let medCatCardHTML4 = ""; 
    let mediList4 = new Set();
    let count = 0;

    medCat4.forEach((element) => {
      if(element.Symptoms == "Anaesthesia - Local" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList4.add(element);    
            
        }
    });

    for (let items of mediList4) {
      // console.log(items)

        let medCard4 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML4 += medCard4;
    }

    productCards4.innerHTML = medCatCardHTML4;
})

// for category page - card5

document.getElementById('productCards5')

let medCatURL5 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL5).then(function(response){
    return response.json()
}).then(function(data){
    let medCat5 = data.Medicine
    let medCatCardHTML5 = ""; 
    let mediList5 = new Set();
    let count = 0;

    medCat5.forEach((element) => {
      if(element.Symptoms == "Anxirty" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList5.add(element);    
            
        }
    });

    for (let items of mediList5) {
      // console.log(items)

        let medCard5 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML5 += medCard5;
    }

    productCards5.innerHTML = medCatCardHTML5;
})

// for category page - card6

document.getElementById('productCards6')

let medCatURL6 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL6).then(function(response){
    return response.json()
}).then(function(data){
    let medCat6 = data.Medicine
    let medCatCardHTML6 = ""; 
    let mediList6 = new Set();
    let count = 0;

    medCat6.forEach((element) => {
      if(element.Symptoms == "Arthritis" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList6.add(element);    
            
        }
    });

    for (let items of mediList6) {
      console.log(items)

        let medCard6 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML6 += medCard6;
    }

    productCards6.innerHTML = medCatCardHTML6;
})

// for category page - card7

document.getElementById('productCards7')

let medCatURL7 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL7).then(function(response){
    return response.json()
}).then(function(data){
    let medCat7 = data.Medicine
    let medCatCardHTML7 = ""; 
    let mediList7 = new Set();
    let count = 0;

    medCat7.forEach((element) => {
      if(element.Symptoms == "Alziemer" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList7.add(element);    
            
        }
    });

    for (let items of mediList7) {
      console.log(items)

        let medCard7 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML7 += medCard7;
    }

    productCards7.innerHTML = medCatCardHTML7;
})

// for category page - card8

document.getElementById('productCards8')

let medCatURL8 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL8).then(function(response){
    return response.json()
}).then(function(data){
    let medCat8 = data.Medicine
    let medCatCardHTML8 = ""; 
    let mediList8 = new Set();
    let count = 0;

    medCat8.forEach((element) => {
      if(element.Symptoms == "Bacterial Infections" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList8.add(element);    
            
        }
    });

    for (let items of mediList8) {
      console.log(items)

        let medCard8 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML8 += medCard8;
    }

    productCards8.innerHTML = medCatCardHTML8;
})

// for category page - card9

document.getElementById('productCards9')

let medCatURL9 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL9).then(function(response){
    return response.json()
}).then(function(data){
    let medCat9 = data.Medicine
    let medCatCardHTML9 = ""; 
    let mediList9 = new Set();
    let count = 0;

    medCat9.forEach((element) => {
      if(element.Symptoms == "Acne" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList9.add(element);    
            
        }
    });

    for (let items of mediList9) {
      console.log(items)

        let medCard9 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML9 += medCard9;
    }

    productCards9.innerHTML = medCatCardHTML9;
})

// for category page - card10

document.getElementById('productCards10')

let medCatURL10 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL10).then(function(response){
    return response.json()
}).then(function(data){
    let medCat10 = data.Medicine
    let medCatCardHTML10 = ""; 
    let mediList10 = new Set();
    let count = 0;

    medCat10.forEach((element) => {
      if(element.Symptoms == "Fever" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList10.add(element);    
            
        }
    });

    for (let items of mediList10) {
      console.log(items)

        let medCard10 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML10 += medCard10;
    }

    productCards10.innerHTML = medCatCardHTML10;
})

// for category page - card11

document.getElementById('productCards11')

let medCatURL11 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL11).then(function(response){
    return response.json()
}).then(function(data){
    let medCat11 = data.Medicine
    let medCatCardHTML11 = ""; 
    let mediList11 = new Set();
    let count = 0;

    medCat11.forEach((element) => {
      if(element.Symptoms == "Infection" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList11.add(element);    
            
        }
    });

    for (let items of mediList11) {
      console.log(items)

        let medCard11 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML11 += medCard11;
    }

    productCards11.innerHTML = medCatCardHTML11;
})

// for category page - card12

document.getElementById('productCards12')

let medCatURL12 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL12).then(function(response){
    return response.json()
}).then(function(data){
    let medCat12 = data.Medicine
    let medCatCardHTML12 = ""; 
    let mediList12 = new Set();
    let count = 0;

    medCat12.forEach((element) => {
      if(element.Symptoms == "Diabetes" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList12.add(element);    
            
        }
    });

    for (let items of mediList12) {
      console.log(items)

        let medCard12 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML12 += medCard12;
    }

    productCards12.innerHTML = medCatCardHTML12;
})

// for category page - card13

document.getElementById('productCards13')

let medCatURL13 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL13).then(function(response){
    return response.json()
}).then(function(data){
    let medCat13 = data.Medicine
    let medCatCardHTML13 = ""; 
    let mediList13 = new Set();
    let count = 0;

    medCat13.forEach((element) => {
      if(element.Symptoms == "Kidney-Disease/Stone" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList13.add(element);    
            
        }
    });

    for (let items of mediList13) {
      console.log(items)

        let medCard13 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML13 += medCard13;
    }

    productCards13.innerHTML = medCatCardHTML13;
})

// for category page - card14

document.getElementById('productCards14')

let medCatURL14 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL14).then(function(response){
    return response.json()
}).then(function(data){
    let medCat14 = data.Medicine
    let medCatCardHTML14 = ""; 
    let mediList14 = new Set();
    let count = 0;

    medCat14.forEach((element) => {
      if(element.Symptoms == "Pain" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList14.add(element);    
            
        }
    });

    for (let items of mediList14) {
      console.log(items)

        let medCard14 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML14 += medCard14;
    }

    productCards14.innerHTML = medCatCardHTML14;
})

// for category page - card15

document.getElementById('productCards15')

let medCatURL15 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL15).then(function(response){
    return response.json()
}).then(function(data){
    let medCat15 = data.Medicine
    let medCatCardHTML15 = ""; 
    let mediList15 = new Set();
    let count = 0;

    medCat15.forEach((element) => {
      if(element.Symptoms == "Headace" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList15.add(element);    
            
        }
    });

    for (let items of mediList15) {
      console.log(items)

        let medCard15 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML15 += medCard15;
    }

    productCards15.innerHTML = medCatCardHTML15;
})

// for category page - card16

document.getElementById('productCards16')

let medCatURL16 = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

fetch(medCatURL16).then(function(response){
    return response.json()
}).then(function(data){
    let medCat16 = data.Medicine
    let medCatCardHTML16 = ""; 
    let mediList16 = new Set();
    let count = 0;

    medCat16.forEach((element) => {
      if(element.Symptoms == "Stomachace" && element.Website_Names === 'NETMEDS' && count  <= 4){ count += 1
            mediList16.add(element);    
            
        }
    });

    for (let items of mediList16) {
      console.log(items)

        let medCard16 = 
                `<div class="card" style="width: 18rem;">
                <img src="Images/image_4.png" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${items.Medicine_Names}</h5>
                    <p>Actual Price : Rs. ${items.Price}</p>
                    <p>Discount(%) : ${items.Discount}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`     
         medCatCardHTML16 += medCard16;
    }

    productCards16.innerHTML = medCatCardHTML16;
})


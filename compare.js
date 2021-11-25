let show = true;

let priceNETMEDS;
let pricePHARMEASY;
let priceTATA1mg;
let priceApolloPharmacy;

let discountNETMEDS;
let discountPHARMEASY;
let discountTATA1mg;
let discountApolloPharmacy;

let symptomsList = document.getElementById("symptomsName")
symptomsList.addEventListener("click", populateMedicines);

let Category = "Select Symptom";

let spinner = `<div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`

let showSpinner = false;

let spinnerContainer = document.getElementById("spinner")

function populateMedicines() {

    document.getElementById('medicinesName')

    if (Category === "Select Symptom") {
        medicinesName.innerHTML = '<option value="">Select Medicine</option>'
    }

    else {

        showSpinner = true;

        spinnerContainer.innerHTML = spinner;

        let symptomsListUrl = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

        fetch(symptomsListUrl).then(function (response) {
            return response.json()
        }).then(function (data) {
            let medicines = data.Medicine
            let listHtml = new Set();
            medicines.forEach((element) => {

                if (element.Symptoms == Category) {
                    console.log(element.Medicine_Names)
                    let listItem =

                        `<option value="">${element.Medicine_Names}</option>`

                    listHtml.add(listItem);
                }

            });

            let listInnerHtml = "";
            for (let items of listHtml) {
                listInnerHtml += items
            }

            medicinesName.innerHTML = listInnerHtml;
            showSpinner = false;
            spinnerContainer.innerHTML = "";
        })
    }

}

function myNewFunction(sel) {
    // alert(sel.options[sel.selectedIndex].text)
    Category = sel.options[sel.selectedIndex].text;
}

function onMedicineSelect(sel) {
    // alert(sel.options[sel.selectedIndex].text)
    selectedMedicineName = sel.options[sel.selectedIndex].text;
}

function myFunction() {
    show = false;
}


let selectedMedicineName;

// company_name = "NETMEDS","PHARMEASY","TATA 1mg","Apollo Pharmacy";


let compareBtn = document.getElementById('compareResultBtn')
compareBtn.addEventListener("click", showCompareResult);

function showCompareResult() {

    showSpinner = true;

    spinnerContainer.innerHTML = spinner;

    // alert("Hello" + selectedMedicineName + Category);Rs. 
    let symptomsListUrl = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN'

    console.log(selectedMedicineName);

    fetch(symptomsListUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log('data:::', data);
        let medicines = data.Medicine
        medicines.forEach((element) => {
            if (element.Symptoms === Category && element.Medicine_Names === selectedMedicineName) {
                if (element.Website_Names === "NETMEDS") {
                    priceNETMEDS = element.Price;
                    discountNETMEDS = element.Discount;
                }
                if (element.Website_Names === "PHARMEASY") {
                    pricePHARMEASY = element.Price;
                    discountPHARMEASY = element.Discount;
                }
                if (element.Website_Names === "TATA 1mg") {
                    priceTATA1mg = element.Price;
                    discountTATA1mg = element.Discount;
                }
                if (element.Website_Names === "Apollo Pharmacy") {
                    priceApolloPharmacy = element.Price;
                    discountApolloPharmacy = element.Discount;
                }
            }

        });
        localStorage.setItem('result1', ` <h5 class="card-title">${selectedMedicineName}</h5>
                    <p>Actual Price : Rs. ${priceNETMEDS}</p>
                    <p>Discount(%) : ${discountNETMEDS}</p>
                    <p>Website Name : NETMEDS</p>`)

        localStorage.setItem('result2', ` <h5 class="card-title">${selectedMedicineName}</h5>
                    <p>Actual Price : Rs. ${pricePHARMEASY}</p>
                    <p>Discount(%) : ${discountPHARMEASY}</p>
                    <p>Website Name : PHARMEASY</p>`)

        localStorage.setItem('result3', ` <h5 class="card-title">${selectedMedicineName}</h5>
                <p>Actual Price : Rs. ${priceTATA1mg}</p>
                <p>Discount(%) : ${discountTATA1mg}</p>
                <p>Website Name : TATA 1mg</p>`)

        localStorage.setItem('result4', ` <h5 class="card-title">${selectedMedicineName}</h5>
            <p>Actual Price : Rs. ${priceApolloPharmacy}</p>
            <p>Discount(%) : ${discountApolloPharmacy}</p>
            <p>Website Name : Apollo Pharmacy</p>`)

        let priceOne, priceTwo, priceThree, priceFour;

        discountNETMEDS = parseInt(discountNETMEDS);
        discountPHARMEASY = parseInt(discountPHARMEASY);
        discountTATA1mg = parseInt(discountTATA1mg);
        discountApolloPharmacy = parseInt(discountApolloPharmacy);

        priceOne = priceNETMEDS - priceNETMEDS * (discountNETMEDS / 100)
        priceTwo = pricePHARMEASY - pricePHARMEASY * (discountPHARMEASY / 100)
        priceThree = priceTATA1mg - priceTATA1mg * (discountTATA1mg / 100)
        priceFour = priceApolloPharmacy - priceApolloPharmacy * (discountApolloPharmacy / 100)

        if (priceOne < priceTwo && priceOne < priceThree && priceOne < priceFour) {
            localStorage.setItem("best", "result1");
        } else if (priceTwo < priceThree && priceTwo < priceFour) {
            localStorage.setItem("best", "result2");
        } else if (priceThree < priceFour) {
            localStorage.setItem("best", "result3");
        } else {
            localStorage.setItem("best", "result4");
        }

        showSpinner = false;
        spinnerContainer.innerHTML = "";
        window.location.href = "compare-result.html";
        show = false;
    })
}



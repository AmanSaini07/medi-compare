// console.log('This is A Search.js');

const symptom = document.getElementById('Symptoms');

const medicine = document.getElementById('Medicine');

async function onSearchTextChanged(text) {
    const url = 'https://medicompare-2c108-default-rtdb.firebaseio.com/.json?auth=XyFT17OCgFk1YUe1IRUeqUsqaoCc1Fa2Ja8WC6qN';
    const response = await fetch(url);
    const json = await response.json();

    let symptomSet = new Set(), medicineSet= new Set();
    for (let i = 0; i < json.Medicine.length; i++) {
        if (json.Medicine[i].Symptoms.substr(0, text.length).toUpperCase() === text.toUpperCase()) {
            symptomSet.add(json.Medicine[i].Symptoms);
        }
        if (json.Medicine[i].Medicine_Names.substr(0, text.length).toUpperCase() === text.toUpperCase())   
            medicineSet.add(json.Medicine[i].Medicine_Names);
    }

    let symptomInnerHTML = '', medicineInnerHTML = '';
    for (let item of symptomSet) {
        console.log(item);
        symptomInnerHTML += `<li><a href="https://www.netmeds.com/" target="_blank">${item}</a></
        li>`
    }
    for (let item of medicineSet) {
        console.log(item);
        medicineInnerHTML += `<li><a href="https://www.netmeds.com/" target="_blank">${item}</a></li>`
    }

    symptom.innerHTML = symptomInnerHTML
    medicine.innerHTML = medicineInnerHTML
}
// console.log('This is a compareResult.js');

let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let result4 = document.getElementById('result4');
let best = document.getElementById('best');

result1.innerHTML = localStorage.getItem('result1')

result2.innerHTML = localStorage.getItem('result2')

result3.innerHTML = localStorage.getItem('result3')

result4.innerHTML = localStorage.getItem('result4')

best.innerHTML = localStorage.getItem(localStorage.getItem('best'))


function showResult () {
    let a = document.getElementById("resultCard");
    if (a.style.display === "block") 
    {
      a.style.display = "none";
    } 
    else {
      a.style.display = "block";
    }

    let btnContainer = document.getElementById("btnContainer")
    btnContainer.style.display = "none";
  }
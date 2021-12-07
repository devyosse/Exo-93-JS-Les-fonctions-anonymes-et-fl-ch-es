let alerte = document.getElementById('alert');
let somme = document.getElementById('somme');
let divv = document.getElementById('divv');

alerte.addEventListener('click',  () => {
    alert("Hello World");
})

somme.addEventListener('click', ()=> {
    let div = document.createElement('div');
    div.innerHTML = 5 + 6;
    divv.appendChild(div);
})

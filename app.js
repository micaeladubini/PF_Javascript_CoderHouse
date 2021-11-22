//Index - Simulador agregar o quitar

let mejoresVinos = document.querySelector('.mejoresVinos');

for (i = 1; i <= 10; i++) {
    console.log(i);
    mejoresVinos.innerHTML += `<div class="item">
    <div>
    <img src="img/vino${i}.jpg"></img>
    <p class="text">Aesop Wine N°${i}</p>
    <input type="submit" class="addButton btn btn-dark"" value="Add to my cart"</input>
    <input type="reset" class="removeButton btn btn-dark" value="Remove from my cart" </input>
    <input type="submit" class="infoButton" value="More info"</input>
    </div>
    </div>`;
}

let agregados = [];

//Captura dónde va a suceder el evento
const addButton = document.querySelectorAll('.addButton');
const removeButton = document.querySelectorAll('.removeButton');

// Recorrer el array y para definir el evento en todos los botones
for (const add of addButton) {
    add.addEventListener('click', function () {
        alert('Great! You added the product to your cart');
        add.style.color = "#E74C3C";
        console.log("Agregaste a Fav");
        localStorage.setItem('Agregados', JSON.stringify(agregados));
        let agregadosJSON = localStorage.getItem('Agregados');
        let agregadosLocalStorage = JSON.parse(localStorage.getItem('Agregados'));

        console.log(agregadosLocalStorage);
        console.log(agregadosJSON);
    })
}

for (const remove of removeButton) {
    remove.addEventListener('click', function () {
        alert('Oh! You removed the product from your cart :(');
        remove.style.color = "#E74C3C";
        console.log("Eliminado");
    })
}


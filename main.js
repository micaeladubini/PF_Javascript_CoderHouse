// Form - Branches
class Cliente {
    constructor(name, lastName, email, place) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.place = place;
    }
}

let clientes = []

let contador = 0;

divClientes = document.getElementById("divClientes");


document.getElementById("idForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let datosFormulario = new FormData(e.target);
    const cliente = new Cliente(datosFormulario.get("nombreC"), datosFormulario.get("apellidoC"), datosFormulario.get("emailC"), datosFormulario.get("lugarC"));
    clientes.push(cliente);
    localStorage.setItem("Clientes", JSON.stringify(clientes));
    document.getElementById("idForm").reset();
})


document.getElementById("botonMostrarClientes").addEventListener("click", function () {
    let clientesJSON = localStorage.getItem('Clientes');
    let clientesLocalStorage = JSON.parse(localStorage.getItem("Clientes"));
    for (cliente of clientes) {
        divClientes.innerHTML += `
        <div class="card" style="width: 18rem;" id="cliente">
            <div class="row-card">
                <p> Name: ${cliente.name} </p><br>
                <p> Last name: ${cliente.lastName} </p><br>
                <p> Email: ${cliente.email} </p><br>
                <p> Place : ${cliente.place} </p><br>
            </div>
        </div>
        `
    }
    console.log(clientesLocalStorage);
    console.log(clientesJSON);
});









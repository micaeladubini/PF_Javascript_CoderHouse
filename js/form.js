class Place {
    constructor(id, name, place, place2) {
        this.id = id;
        this.name = name;
        this.place = place;
        this.place2 = place2;
    }

    devolverDatos() {
        return `
            <div class="card" style="width: 20rem"; id="${this.id}">
                <div class="card-body">
                    <h5 class="card-title">Recommendation Code - ${this.id}</h5>
                    <p class="card-title">Name - ${this.name}</p>
                    <p class="card-text">Place n°1 - ${this.place}</p>
                    <p class="card-text">Place n°2 - ${this.place2}</p>
                    <a href="#" class="btn btn-danger" id="boton${this.id}">Eliminar</a>
                </div>
            </div>
        `
    }
}

function crearId() {
    const cabecera = Date.now().toString(36);
    const cuerpo = Math.random().toString(36).substring(2);
    return cabecera + cuerpo
}

let places = []

$(() => {

    $('#boton1').click(() => {
        places.forEach(place => {
            $('#places').append(place.devolverDatos());
        })
        places.forEach(place => {
            $(`#boton${place.id}`).click(() => {
                $(`#places #${place.id}`).remove();
                let indice = places.findIndex(searchPlace => searchPlace.id == place.id);
                places.splice(indice, 1);
            });
        });
    });

    $('#formPlace').submit((e) => {
        e.preventDefault();
        let datosPlace = new FormData(e.target);
        let place = new Place(crearId(), datosPlace.get("name"), datosPlace.get("place"), datosPlace.get("place2"));
        places.push(place);
        console.log(place);
        $('#formPlace').trigger('reset');
    })
})



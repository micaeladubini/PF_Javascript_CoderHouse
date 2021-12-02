// dark - light mode
let darkMode;

if (localStorage.getItem('dark-mode')) {
    darkMode = localStorage.getItem('dark-mode');
} else {
    darkMode = "light";
}

localStorage.setItem('dark-mode', darkMode);
$(() => {
    if (localStorage.getItem('dark-mode') == "dark") {
        $('body').addClass("dark");
        $('#boton-dark-mode').hide();
        $('#boton-light-mode').show();
    } else {
        $('#boton-light-mode').hide();
    }

    //light mode
    $('#boton-light-mode').click(() => {
        $('#boton-light-mode').hide();
        $('#boton-dark-mode').show();
        $('body').removeClass("dark");

        localStorage.setItem('dark-mode', "light");
    })

    //dark mode
    $('#boton-dark-mode').click(() => {
        $('#boton-light-mode').show();
        $('#boton-dark-mode').hide();
        $('body').addClass("dark");
        localStorage.setItem('dark-mode', "dark");
    })
})

// animación logo en index y contact
const URLIMG = 'https://www.bayareamade.us/wp-content/uploads/2017/10/Aesop_Logo_Black.png';

const DURACION = 2000;
$('main').append(`<div id="logoAnimate" style="display:flex">
                    <img id="logoBanner" src="${URLIMG}" width="200" height="40">
                    <h3 id="textBanner">Follow us @aesop</h3>
                  </div>`);
$('#logoBanner')
    .fadeOut(DURACION, () => { $("#textBanner").html("Follow us @aesop") })
    .fadeIn(DURACION, () => { $("#textBanner").html("every week there is a gift for you") })
    .animate({ opacity: 0.75 },
        DURACION,
        () => { $("#textBanner").html("Follow us @aesop") });


//Sec 2 index
$("#current").prepend("<h2>Premium quality and beautiful designs</h2>");

const wines = [{
    img: "./img/vino10.jpg",
    name: "Lorem ipsum dolor",
    type: "rosé",
    alcohol: "8%",
},
{
    img: "./img/vino9.jpg",
    name: "Lorem ipsum dolor",
    type: "rosé",
    alcohol: "8%",
},
{
    img: "./img/vino8.jpg",
    name: "Lorem ipsum dolori",
    type: "white",
    alcohol: "10%",
},
{
    img: "./img/vino8.jpg",
    name: "Lorem ipsum dolori",
    type: "white",
    alcohol: "10%",
},
{
    img: "./img/vino8.jpg",
    name: "Lorem ipsum dolori",
    type: "white",
    alcohol: "10%",
},
{
    img: "./img/vino8.jpg",
    name: "Lorem ipsum dolori",
    type: "white",
    alcohol: "10%",
}]

for (const w of wines) {
    $("#wines").append(`<div ><h3>
    Deluxe</h3>
    <img src= ${w.img}>
    <h4> Name: ${w.name}</h4>
    <h4> Type: ${w.type} </h4>
    <h4> Alcohol: ${w.alcohol} </h4>
    </div>
    ` ).css({ display: "flex" });
}

// Sec 3 index
$("#next").prepend("<h2>Coming soon ... </h2>");

const surprises = [{
    img: "./img/vino10.jpg",
    name: "Lorem ipsum dolor",
    type: "rosé",
    alcohol: "8%",
},
{
    img: "./img/vino9.jpg",
    name: "Lorem ipsum dolor",
    type: "rosé",
    alcohol: "8%",
},
{
    img: "./img/vino8.jpg",
    name: "Lorem ipsum dolori",
    type: "white",
    alcohol: "10%",
}]

for (const s of surprises) {
    $("#view").append(`<div class="deluxe"><h3>
    Deluxe</h3>
    <img src= ${s.img}>
    <h4> Name: ${s.name}</h4>
    <h4> Type: ${s.type} </h4>
    <h4> Alcohol: ${s.alcohol} </h4>
    </div>
    ` ).css({ display: "flex" });
}


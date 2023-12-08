//VALIDAICJA FORME sa jquery, DINAMICKI ISPIS (NAVMENU, neki tekstovi, slider, )

window.onload = function(){
    let taster = document.querySelector("#bkSubmit");
    taster.addEventListener("click", obradaForme);
}
    brojGresaka = 0;

    // Dinamicki ispis NavMenu-a

    let navMenuText = ["Home", "About", "Features", "Team", "Testimonials", "Contact", "Author"];
    let navMenuLinks = ["index.html", "#about", "#features", "#team", "#testimonials", "#contact","author.html"];

    let navMenuID = document.querySelector("#navbarSupportedContent");

    let ispisNavMenu = `<ul class="navbar-nav ml-auto">`;

    for (let i = 0; i < navMenuLinks.length; i++){
        ispisNavMenu += `<li class="nav-item">
                        <a class="nav-link" href="${navMenuLinks[i]}" data-scroll-nav="${i}">${navMenuText[i]}</a>
                        </li>`;
    }

    ispisNavMenu+="</ul>";

    navMenuID.innerHTML = ispisNavMenu;

    let sadrzajListe = ["Izaberite", "Pitanje", "Odgovor"];
    let valueListe = ["S", "Q", "A"];

     kreiranjePadajuceListe(valueListe, sadrzajListe, "DDL", "DDL");


function obradaForme(){
    let fullName = document.querySelector("#bkFullName");
    let email = document.querySelector("#bkEmail");

    let regFullName, regEmail;

    regFullName = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})+$/;
    regEmail = /^([a-z] | [0-9]){3,20}@(gmail | yahoo | hotmail)\.com$/; //Nisam siguran za ovu validaciju


    proveraIzraza(regFullName, fullName, "The name must be in a format: John Smith");
    proveraIzraza(regEmail, email, "The email must be valid and end in @gmail/yahoo/hotmail.com");
}


function proveraIzraza(regIzraz, objekat, poruka){
    if(!regIzraz.test(objekat.value)){
        objekat.nextElementSibling.classList.remove("hideElement");
        objekat.nextElementSibling.innerHTML = poruka;
        objekat.classList.add("redBorder");
        brojGresaka++;
    }
    else{
        objekat.nextElementSibling.classList.add("hideElement");
        objekat.nextElementSibling.innerHTML = "";
        objekat.classList.remove("redBorder");
    }
}

// Dinamicki ispis Dropdown liste

function kreiranjePadajuceListe(nizValue, nizTekst, nameAtrib, idAtrib){

    let ispisDDL = `<div class = "container"> 
                        <div class = "row">
                            <select name = "${nameAtrib}" id = "${idAtrib}" class = "form-select">`;

     for (let i = 0; i < sadrzajListe.length; i++){
        ispisDDL += `<option value = "${nizValue[i]}">${nizTekst[i]}</option>`
     }

     ispisDDL+='</select></div></div><hr></hr>'

     ispisDDL.innerHTML;
     }

     

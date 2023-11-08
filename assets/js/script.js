function scroll() {
    var position = window.scrollY;
    var div = document.querySelector(".top-fixed");

    if(position != 0) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

var btnBudget = document.querySelector(".budget");
var btn = document.querySelector("#top");
var question = document.querySelector("#question");
var budget = document.querySelector("#budget");
var form = document.querySelector("#form");
var qrcode = document.querySelector("#qrcode");
qrcode.style.display = "none";

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

question.addEventListener("click", function() {
    question.classList.add("active");
    budget.classList.remove("active");
    form.style.display = "flex";
    qrcode.style.display = "none";
});

budget.addEventListener("click", function() {
    question.classList.remove("active");
    budget.classList.add("active");
    form.style.display = "none";
    qrcode.style.display = "flex";
});

btnBudget.addEventListener("click", function() {
  question.classList.remove("active");
  budget.classList.add("active");
  form.style.display = "none";
  qrcode.style.display = "flex";
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

$(function() {
  $(".br").click(function() {
      //header
      $("header nav ul li a").eq(0).text("Inicial");
      $("header nav ul li a").eq(1).text('A "Empresa"');
      $("header nav ul li a").eq(2).text("Serviços");
      $("header nav ul li a").eq(3).text("Localização");
      $("header nav ul li a").eq(4).text("Contato");
      $(".dropdown-menu a").eq(0).text("Inicial");
      $(".dropdown-menu a").eq(1).text('A "Empresa"');
      $(".dropdown-menu a").eq(2).text("Serviços");
      $(".dropdown-menu a").eq(3).text("Localização");
      $(".dropdown-menu a").eq(4).text("Contato");
      $(".en").removeClass("active");
      $(".es").removeClass("active");
      $(".br").addClass("active");
  });
});

$(function() {
  $(".en").click(function() {
      //header
      $("header nav ul li a").eq(0).text("Initial");
      $("header nav ul li a").eq(1).text('The "Company"');
      $("header nav ul li a").eq(2).text("Services");
      $("header nav ul li a").eq(3).text("Localization");
      $("header nav ul li a").eq(4).text("Contact");
      $(".dropdown-menu a").eq(0).text("Initial");
      $(".dropdown-menu a").eq(1).text('The "Company"');
      $(".dropdown-menu a").eq(2).text("Services");
      $(".dropdown-menu a").eq(3).text("Localization");
      $(".dropdown-menu a").eq(4).text("Contact");
      $(".br").removeClass("active");
      $(".es").removeClass("active");
      $(".en").addClass("active");
  });
});

$(function() {
  $(".es").click(function() {
      //header
      $("header nav ul li a").eq(0).text("Inicial");
      $("header nav ul li a").eq(1).text('La "Empresa"');
      $("header nav ul li a").eq(2).text("Servicios");
      $("header nav ul li a").eq(3).text("Ubicación");
      $("header nav ul li a").eq(4).text("Contacto");
      $(".dropdown-menu a").eq(0).text("Inicial");
      $(".dropdown-menu a").eq(1).text('La "Empresa"');
      $(".dropdown-menu a").eq(2).text("Servicios");
      $(".dropdown-menu a").eq(3).text("Ubicación");
      $(".dropdown-menu a").eq(4).text("Contacto");
      $(".br").removeClass("active");
      $(".en").removeClass("active");
      $(".es").addClass("active");
  });
});

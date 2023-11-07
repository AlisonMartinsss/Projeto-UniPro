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


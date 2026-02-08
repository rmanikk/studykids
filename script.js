function toggle(element){
  const content = element.nextElementSibling;

  if(content.style.display === "block"){
    content.style.display = "none";
  }else{
    content.style.display = "block";
  }
}

function loadPDF(file){
  document.getElementById("viewer").src = file;
}
document.addEventListener("click", function () {
  document.getElementById("bgmusic").play();
}, { once: true });

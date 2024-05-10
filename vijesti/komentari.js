function spasikommnetar(){
    var kommentar= document.getElementById("kommentar1").value;

    sessionStorage.setItem("kommentar", kommentar);

    console.log(sessionStorage.getItem("kommentar"))
  



}


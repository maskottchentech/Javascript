let Tubcount = 0;
let Rackcount = 0;
function changeTub() {
    var image = document.getElementById('bathtub');
    // console.log(image)
    Tubcount+=1;
    // console.log(Tubcount)
    
    if (Tubcount == 1) {
        document.getElementById("bth").style.display = "block";
        document.getElementById("bth1").style.display = "none";
        // console.log(Tubcount)
    } else if (Tubcount == 2){
        document.getElementById("bth").style.display = "none";
        document.getElementById("bth1").style.display = "block";
    }
    else if (Tubcount == 3){
        document.getElementById("bth1").style.display = "none";
        document.getElementById("bth").style.display = "none";
        Tubcount = 0;
    }
  }

function changerack() {
    var image_rack = document.getElementById('rack');
    // console.log(image)
    Rackcount+=1;
    console.log(Rackcount)
    
    if (Rackcount == 1) {
        document.getElementById("rck").style.display = "block";
        document.getElementById("rck1").style.display = "none";
        // console.log(Rackcount)

    } else if (Rackcount == 2){
        document.getElementById("rck").style.display = "none";
        document.getElementById("rck1").style.display = "block";
        // Rackcount = 0;
    }
    else if (Rackcount == 3){
        document.getElementById("rck").style.display = "none";
        document.getElementById("rck1").style.display = "none";
        Rackcount = 0;
    }
  }
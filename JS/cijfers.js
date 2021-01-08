function toonx () {}

function bereken() {

    // cijfer1 t/m 4 moet de inhoud krijgen van input elementen uit het form.
    var cijfer1 = document.getElementById("cijfer1").value;
    var cijfer2 = document.getElementById("cijfer2").value;
    var cijfer3 = document.getElementById("cijfer3").value;
    var cijfer4 = document.getElementById("cijfer4").value;
    var grades = [cijfer1, cijfer2, cijfer3, cijfer4];
    var total = 0;

    // function som(cijfer1, cijfer2, cijfer3, cijfer4)
    //     {
    //         var a
    //     }
    for(var i = 0; i < grades.length; i++) {
        total += parseInt(grades[i]);
    }
    console.log(total);
    var x= total / grades.length; 
    document.getElementById("totaal").value = totaal;
    return false
    return x
}    


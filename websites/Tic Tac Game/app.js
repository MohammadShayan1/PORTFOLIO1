
var last = "O";
function pressbtn(id) {
    if (last === "O") {
        $("#turns").html("O turn");
        $(`#${id}`).html("X");
        last = "X";
        document.getElementById(id).disabled = true;
        result();
    }
    else {
        $("#turns").html("X turn");
        $(`#${id}`).html("O");
        last = "O";
        document.getElementById(id).disabled = true;
        result();
    }
}

function result() {
    if (((
        $("#1").html() == $("#2").html()) &&
        ($("#2").html() == $("#3").html())) &&
        ($("#3").html() != "")) {
        $("#result").html($("#1").html() + ", Win!");
        console.log($("#1").html() + ", Win!");
        endGame();
    }
    else if ((($("#4").html() == $("#5").html()) && ($("#5").html() == $("#6").html())) && ($("#6").html() != "")) {
        $("#result").html($("#4").html() + ", Win!");
        console.log($("#4").html() + ", Win!");
        endGame();
    }
    else if ((($("#7").html() == $("#8").html()) && ($("#8").html() == $("#9").html())) && ($("#9").html() != "")) {
        $("#result").html($("#7").html() + ", Win!");
        console.log($("#7").html() + ", Win!");
        endGame();
    }
    else if ((($("#1").html() == $("#4").html()) && ($("#4").html() == $("#7").html())) && ($("#7").html() != "")) {
        $("#result").html($("#1").html() + ", Win!");
        console.log($("#1").html() + ", Win!");
        endGame();
    }
    else if ((($("#2").html() == $("#5").html()) && ($("#5").html() == $("#8").html())) && ($("#8").html() != "")) {
        $("#result").html($("#2").html() + ", Win!");
        console.log($("#2").html() + ", Win!");
        endGame();
    }
    else if ((($("#3").html() == $("#6").html()) && ($("#6").html() == $("#9").html())) && ($("#9").html() != "")) {
        $("#result").html($("#3").html() + ", Win!");
        console.log($("#3").html() + ", Win!");
        endGame();
    }
    else if ((($("#1").html() == $("#5").html()) && ($("#5").html() == $("#9").html())) && ($("#9").html() != "")) {
        $("#result").html($("#1").html() + ", Win!");
        console.log($("#1").html() + ", Win!");
        endGame();
    }
    else if ((($("#3").html() == $("#5").html()) && ($("#5").html() == $("#7").html())) && ($("#7").html() != "")) {
        $("#result").html($("#3").html() + ", Win!");
        console.log($("#3").html() + ", Win!");
        endGame();
    }
    else{
        checkDraw()
    }
}

function endGame(){
    for(i=1; i<=9;i++){
        document.getElementById(i).disabled = true;
    }
}
function refresh(){
    for(i=1; i<=9;i++){
        document.getElementById(i).disabled = false;
        document.getElementById(i).innerHTML = "";
        $("#result").html("");
    }
}
function checkDraw() {
    let count = 0
    for(i=1; i<=9;i++){
        if(document.getElementById(i).innerHTML != ""){
            count++;
        }
    }
    if(count === 9){
        $("#result").html("Draw, Please Try Again!");
        console.log("Draw, Please Try Again!");
    }

}

$(".accordion h2").click(function(){
    $(this).next().slideToggle();
    $(".accordion div").not($(this).next()).slideUp();
})

var secondsLabel = document.querySelector(".seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString + "s";
  } else {
    return valString + "s";
  }
}

$("textarea").keyup(function(){
    let textLength = $(this).val().length;

    $("#chars").text( 100 - textLength <= 0 ? "your available character finished" : 100 - textLength )
})
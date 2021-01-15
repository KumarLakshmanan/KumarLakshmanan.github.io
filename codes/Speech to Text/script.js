var recognition;
var play = false;
$(document).ready(function () {
  //recognition = new (SpeechRecognition || webkitSpeechRecognition || mozSpeechRecognition || msSpeechRecognition)();
  recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  //recognition.start();

  recognition.onresult = function (event) {
    var txt = event.results[0][0].transcript;
    txt = $("#text").val() + txt;
    $("#text").val(txt);
    console.log("You said: ", event.results[0][0].transcript);
  };
  recognition.onspeechend = function () {
    recognition.stop();
  };
});
function playbtn() {
  if (play) {
    recognition.stop();
    $("#play").html('<i class="material-icons">mic_none</i> Activate');
    play = false;
  } else {
    $("#play").html('<i class="material-icons">mic</i> Deactivate');
    play = true;
    recognition.start();
  }
}
function select() {
  $("#text").select();
}
function clear() {
  $("#text").val("");
}

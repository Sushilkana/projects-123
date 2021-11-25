var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition;

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    Speak();
}

function Speak(){
    synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
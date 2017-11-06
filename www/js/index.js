    
function submitText() {
	var text = $('#textinput').val();
	alert(text);
    storeValue();
}

function storeValue(key, value) {
   localStorage.setItem('userInput', $('#textinput').val());
}

function outputValue(){
   alert( "User input is = " + localStorage.getItem("userInput"));
}
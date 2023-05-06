getAim = () => {
    let aim = document.getElementById("form-select").value;
    if (aim === "Decrypt"){
        document.getElementById("DecryptButton").style.display = "block";
        document.getElementById("EncryptButton").style.display = "none";
    }
    else if (aim === "Encrypt"){
    
        document.getElementById("DecryptButton").style.display = "none";
        document.getElementById("EncryptButton").style.display = "block";
        
    }
}
const upperAlphabets  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerAlphabets  = "abcdefghijklmnopqrstuvwxyz"
let operation 
let key
let message
let originalIndex;
let newIndex;
let charFromMessage;

determineWhetherToAddOrSubtract = () => {
if (operation == "Encrypt"){
    newIndex = originalIndex + key
    if (newIndex > 25){
        newIndex -= 26
    }
} else if (operation == "Decrypt"){
    newIndex = originalIndex -key
    if (newIndex < 0){
        newIndex += 26
    }
}}


encodeOrDecode = ()=> {
   operation = document.getElementById("form-select").value;
  key = parseInt(document.getElementById("key").value);
message = document.getElementById("messageBox").value;
let newMessage = ""

if (operation== "Click here to select" || key == NaN || message == ""){
    alert("Please fill all fields")
return;
}

    for (i=0; i<message.length; i++){
charFromMessage = message[i];
if (charFromMessage == charFromMessage.toLowerCase()) {
    originalIndex = lowerAlphabets.indexOf(charFromMessage)
    determineWhetherToAddOrSubtract()
    if (originalIndex == -1){
        newMessage += charFromMessage
    }else{
        newMessage += lowerAlphabets[newIndex]
    }

    
} else if (charFromMessage == charFromMessage.toUpperCase()) {
    originalIndex = upperAlphabets.indexOf(charFromMessage)
    determineWhetherToAddOrSubtract()
    if (originalIndex == -1){
        newMessage += charFromMessage
    }else{
        newMessage += upperAlphabets[newIndex] 
    }
   
}

    }
    document.getElementById("outputResult").innerHTML = newMessage;
    console.log(message)
    console.log(newMessage)
    
}

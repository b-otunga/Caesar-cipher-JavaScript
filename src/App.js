import './App.css';
import './index.css';
import React, { useState } from 'react';

function App() {

  const [operation, setOperation] = useState("");
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const upperAlphabets  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerAlphabets  = "abcdefghijklmnopqrstuvwxyz"
let originalIndex;
let newIndex;
let charFromMessage;

const determineWhetherToAddOrSubtract = () => {
  if (operation == "Encrypt"){
      newIndex = originalIndex + key
      console.log("newi" +newIndex)
      console.log("origi" + originalIndex)
      console.log("key" + key)
      if (newIndex > 25){
          newIndex -= 26
      }
  } else if (operation == "Decrypt"){
      newIndex = originalIndex -key
      if (newIndex < 0){
          newIndex += 26
      }
  }}

  const encodeOrDecode = ()=> {
//     operation = document.getElementById("form-select").value;
//  message = document.getElementById("messageBox").value;
 let newMessage = ""
 
 if (operation== "Click here to select" || parseInt(key) == NaN || message == ""){
     alert("Please fill all fields")
 return;
 }
 
     for (let i=0; i<message.length; i++){
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

  const handleKeyChange = (event) => {
    const key = event.target.value;
    setKey(event.target.value);
    console.log(key)
  }

  const handleMessageChange = (event) => {
    const message = event.target.value;
    setMessage(message);
    
  console.log(message)
  }

  const getOperation = (event) => {
    const operation = event.target.value;
  setOperation(operation);
    if (operation === "Decrypt"){
      document.getElementById("DecryptButton").style.display = "block";
      document.getElementById("EncryptButton").style.display = "none";
  }
  else if (operation === "Encrypt"){
  
      document.getElementById("DecryptButton").style.display = "none";
      document.getElementById("EncryptButton").style.display = "block";
      
  }
  console.log(operation)

  }

  return (
    <div className="App">
   <div id = "homeContainer" >
   <h3 id="Caesar">Caesar Cipher App</h3>
   <div className="pageIntro">
 
             <h6>Hi, we help you encrypt your messages so no one can understand them, we will also decript them for you. Choose your aim below</h6>
             </div>
             <div className="select w-50" id="select">
     <label htmlFor="form-select" className="form-label" >I want to...</label>
             <select className="form-select" id="form-select" aria-label="Default select example" onChange={getOperation}>
                 <option defaultValue>Click here to select</option>
                 <option value="Encrypt">Encrypt my message</option>
                 <option value="Decrypt">Decrypt a message</option>
               </select>

               <div className="key" id="keyBox"  >
                <label htmlFor="form-select" className="form-label" >Pick your encryption key</label>
                        <select className="form-select" id="key" aria-label="Default select example" onChange={handleKeyChange}>
                            <option defaultValue>Click to pick a Key</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25" >25</option>
                    
                          </select>
                          
                        </div>
               
               
             </div>
             <div className="encryptMessageBox  w-50" id="encryptMessageBox">
     <div className="mb-3">
         <label htmlFor="messageBox" className="form-label">Enter your message below</label>
         <textarea className="form-control" id="messageBox" rows="2" placeholder="Type or paste your text here" onChange={handleMessageChange}></textarea>
       </div>
       <button type="submit" className="btn btn-primary" id="EncryptButton" onClick={encodeOrDecode}>Encrypt</button>
       <button type="submit" className="btn btn-primary" id="DecryptButton" onClick={encodeOrDecode}>Decrypt</button>
 </div>

             <div id="outputBox">
     <h5>Result</h5>
  <strong><p id="outputResult">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lectus sit amet justo rutrum, id hendrerit libero sollicitudin. Proin at orci quis augue malesuada iaculis. Vivamus rutrum consequat ligula vitae vestibulum. Aenean imperdiet turpis at dolor malesuada, ac pellentesque sapien eleifend. Donec sit amet odio eu enim congue hendrerit in et odio. Nam dapibus sapien vel nisi facilisis, eu rhoncus lacus gravida. Proin sagittis massa quis dui bibendum suscipit. Sed bibendum turpis eget ante tristique lobortis. Donec lobortis, erat quis auctor lobortis, ex lectus ultrices arcu, in bibendum ipsum metus ut tortor.</p> </strong>
 </div>
             
 

   </div>
    </div>
  );
}

export default App;

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
    
 let newMessage = ""
 
 if (operation== "Click here to select" || !key || message == ""){
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
     
 }

  const handleKeyChange = (event) => {
    let key = parseInt(event.target.value);
    setKey(parseInt(key));
  }

  const handleMessageChange = (event) => {
    const message = event.target.value;
    setMessage(message);
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

  }

  return (
    <div className="App">
   <div id = "homeContainer" >
   <h4 id="Caesar">Caesar Cipher App</h4>
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
  <strong><p id="outputResult">Your result will appear here</p> </strong>
  <br />
 </div>
             
 

   </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import image from './Images/Flower.jpg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import {HomeButtons} from "./Components/HomeButtons"
import { HashRouter as Router, Route, Routes  } from 'react-router-dom';
import BasicQuizPage from "./Components/BasicQuizPage";
import DetailedQuizPage from "./Components/DetailedQuizPage";
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}
//colors: PINK: #e5c0f4, BLUE: #9fbcf6, OFF-WHITE: #fcf8f5
function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div id = "images-and-heading">
        <img src = {image} id = "left-image"></img>
        <h1 id = "header">Welcome to the Career Helpi</h1>
        <img src = {image} id = "right-image"></img>
        </div>
        <p id = "mini-header">Created by:</p>
        <p id = "names">Amanda Smarr, Saieda Ali Zada, and Yaqing Jiang</p>
      </header>
        <Routes>
          <Route path="/" element={<HomeButtons />} />
          <Route path="/basic-quiz" element={<BasicQuizPage />} />
          <Route path="/detailed-quiz" element={<DetailedQuizPage />} />
        </Routes>
        
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
    </Router>
  );
}

export default App;
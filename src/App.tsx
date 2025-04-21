import React, { useState } from 'react';
import image from './Images/Flower.jpg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import {HomeButtons} from "./Components/HomeButtons"
import BasicQuizPage from "./Components/BasicQuizPage";
import DetailedQuizPage from "./Components/DetailedQuizPage";
import { SpanHomeButtons } from './Components/SpanishHomeButtons';
import SpanishBasicQuiz from './Components/SpanishBasicQuiz';
import SpanishDetailedQuiz from './Components/SpanishDetailedQuiz';
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
  const [route, setRoute] = useState<string>(window.location.hash);
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  //language selection
  const [language, setLanguage] = useState<string>("english");
    function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
        setLanguage(event.target.value);
    }
  function renderPage() {
    switch (route) {
      case "#/basic-quiz":
        if (language === 'spanish') {
          return <SpanishBasicQuiz></SpanishBasicQuiz>
        }
        return <BasicQuizPage />;
      case "#/detailed-quiz":
        if (language === 'spanish') {
          return <SpanishDetailedQuiz></SpanishDetailedQuiz>
        }
        return <DetailedQuizPage />;
      default:
        if (language === 'spanish') {
          return <SpanHomeButtons></SpanHomeButtons>;
        }
        return <HomeButtons />;
    }
  }
  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div id = "images-and-heading">
        <img src = {image} id = "left-image" alt = ""></img>
        {language === 'english' ? <h1 id = "header">Welcome to the Career Helpi</h1> : 
        language === 'spanish' ? <h1 id = "header">Bienvenido a Career Helpi</h1> : 
        language === 'chinese' && <h1 id = "header">欢迎来到职业帮助</h1>}
        <img src = {image} id = "right-image" alt = ""></img>
        </div>
        {language ==='english' ? <p id = "mini-header">Created by:</p>: 
        language === 'spanish' ? <p id = "mini-header">Creado por:</p>:
        language === 'chinese' && <p id = "mini-header">创建者：</p>}
        <p id = "names">Amanda Smarr, Saieda Ali Zada, and Yaqing Jiang</p>
      </header>
      {route === "#/" && 
      <Form.Group id = "language-select">
          <Form.Label>Language: </Form.Label>
          <Form.Select id = "options" value = {language} onChange = {changeLanguage}>
              <option value = "english">English</option>
              <option value = "spanish">Español</option>
              <option value = "chinese">中文</option>
          </Form.Select>
      </Form.Group>}
      {renderPage()}
      <footer className = "App-footer"><Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form></footer>
    </div>
   
  );
  }

export default App;
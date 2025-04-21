import React, {useState} from 'react';
import './BasicQuizPage.css';
import { Button, Form ,ProgressBar} from 'react-bootstrap';
const SpanishBasicQuiz = () => {
  const[answer1, setAnswer1] = useState<string[]>([]);
  const[answer2, setAnswer2] = useState<string>("");
  const[answer3, setAnswer3] = useState<string>("");
  const[answer4, setAnswer4] = useState<string>("");
  const[answer5, setAnswer5] = useState<string>("");
  const[answer6, setAnswer6] = useState<string>("");
  const[answer7, setAnswer7] = useState<string>("");

  const totalQuestions = 7;
  const answeredCount =
    (answer1.length > 0 ? 1 : 0) + 
    (answer2 ? 1 : 0) + 
    (answer3 ? 1 : 0) + 
    (answer4 ? 1 : 0) + 
    (answer5 ? 1 : 0) + 
    (answer6 ? 1 : 0) + 
    (answer7 ? 1 : 0);
  const progress = (answeredCount / totalQuestions) * 100;

  /* Setting Answers*/
  const updateAnswer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setAnswer1((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  function updateAnswer2(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer2(event.target.value);
  }
  function updateAnswer3(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer3(event.target.value);
  }
  function updateAnswer4(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer4(event.target.value);
  }
  function updateAnswer5(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer5(event.target.value);
  }
  function updateAnswer6(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer6(event.target.value);
  }
  function updateAnswer7(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer7(event.target.value);
  }
  const isAllAnswered = answeredCount === totalQuestions;
  /* Navigation back home */
  const goBackHome = () => {
    window.location.hash = '/';
  };
  

  return (
    <div>
      <header>
          <Button variant="secondary" id="home-button" onClick={goBackHome}>
          Página de Inicio
          </Button>
      </header>
      <h1 id = "basic-header">Cuestionario de Preguntas Básicas</h1>
      <div className="sticky-progress-bar mt-4">
        <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
      </div>
      <div className = "question-box">
        <div className = "question-boxes">
          <h2 className = "question-headers">Pregunta 1</h2>
          <div className = "questions">¿Qué asignaturas o tópicos disfrutas más?</div>
          <div className = "answers">
            <Form.Check type = "checkbox" id = "question1-answer1" label = "El Arte"value="The Arts" onChange={updateAnswer1}checked={answer1.includes("The Arts")}></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer2" label = "Humanidades"value="Humanities" onChange={updateAnswer1}checked={answer1.includes("Humanities")}></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer3" label = "Ciencias Sociales"value="Social Sciences" onChange={updateAnswer1}checked={answer1.includes("Social Sciences")}></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer4" label = "Materias STEM (Ciencia, Tecnología, Ingeniería, Matemáticas)"value="STEM subjects (Science, Technology, Engineering, Math)" onChange={updateAnswer1}checked={answer1.includes("STEM subjects (Science, Technology, Engineering, Math)")}></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer5" label = "Ninguno de los Anteriores"value="None of the Above" onChange={updateAnswer1}checked={answer1.includes("None of the Above")}></Form.Check>
          </div>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 2</h2>
          <div className = "questions">¿Prefieres trabajar con personas, datos u objetos?</div>
          <div className = "answers">
            <Form.Check type = "radio" id = "question2-answer1" label = "Personas" value = "People" onChange={updateAnswer2} checked = {answer2 === "People"}></Form.Check>
            <Form.Check type = "radio" id = "question2-answer2" label = "Datos" value = "Data" onChange={updateAnswer2} checked = {answer2 === "Data"}></Form.Check>
            <Form.Check type = "radio" id = "question2-answer3" label = "Objetos" value = "Objects" onChange={updateAnswer2} checked = {answer2 === "Objects"}></Form.Check>
          </div>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 3</h2>
          <div className = "questions">¿Preferirías trabajar en interiores o exteriores?</div>
          <Form.Check type = "radio" id = "question3-answer1" label = "Interiores" value = "Indoors" onChange={updateAnswer3} checked = {answer3 === "Indoors"}></Form.Check>
          <Form.Check type = "radio" id = "question3-answer2" label = "Exteriores" value = "Outdoors" onChange={updateAnswer3} checked = {answer3 === "Outdoors"}></Form.Check>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 4</h2>
          <div className = "questions">¿Te gustaría trabajar solo o en equipo?</div>
          <Form.Check type = "radio" id = "question4-answer1" label = "Solo" value = "Alone" onChange={updateAnswer4} checked = {answer4 === "Alone"}></Form.Check>
          <Form.Check type = "radio" id = "question4-answer2" label = "En un Equipo" value = "In a Team" onChange={updateAnswer4} checked = {answer4 === "In a Team"}></Form.Check>
        </div> 
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 5</h2>
          <div className = "questions">¿Te gusta liderar un equipo o seguir instrucciones?</div>
          <Form.Check type = "radio" id = "question5-answer1" label = "Liderando un Equipo" value = "Leading a Team" onChange={updateAnswer5} checked = {answer5 === "Leading a Team"}></Form.Check>
          <Form.Check type = "radio" id = "question5-answer2" label = "Seguir Instrucciones" value = "Following Instructions" onChange={updateAnswer5} checked = {answer5 === "Following Instructions"}></Form.Check>
        </div> 
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 6</h2>
          <div className = "questions">¿Disfrutas de las tareas rutinarias o de probar cosas nuevas a menudo?</div>
          <Form.Check type = "radio" id = "question6-answer1" label = "Tareas de Rutina" value = "Routine Tasks" onChange={updateAnswer6} checked = {answer6 === "Routine Tasks"}></Form.Check>
          <Form.Check type = "radio" id = "question6-answer2" label = "Probar Cosas Nuevas" value = "Trying New Things" onChange={updateAnswer6} checked = {answer6 === "Trying New Things"}></Form.Check>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 7</h2>
          <div className = "questions">¿Qué es más importante para usted: el dinero, ayudar a la comunidad o hacer lo que ama?</div>
          <Form.Check type = "radio" id = "question7-answer1" label = "Money" value = "Money" onChange={updateAnswer7} checked = {answer7 === "Money"}></Form.Check>
          <Form.Check type = "radio" id = "question7-answer2" label = "Ayudando a la Comunidad" value = "Assisting Community" onChange={updateAnswer7} checked = {answer7 === "Assisting Community"}></Form.Check>
          <Form.Check type = "radio" id = "question7-answer3" label = "Haciendo lo que Amas" value = "Doing What You Love" onChange={updateAnswer7} checked = {answer7 === "Doing What You Love"}></Form.Check>
        </div>
        <Button
          id="Submit-Button"onClick={() => alert("¡Resultados enviados!")}disabled={!isAllAnswered}
            style={{backgroundColor: isAllAnswered ? 'purple' : 'grey',cursor: isAllAnswered ? 'pointer' : 'not-allowed',}}>
          ¡Obtenga Resultados!
        </Button>
      </div>
    </div>
  );
};

export default SpanishBasicQuiz;
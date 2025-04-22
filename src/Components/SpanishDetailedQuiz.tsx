import React, {useState} from 'react';
import { Button, Form ,ProgressBar} from 'react-bootstrap';
import './DetailedQuizPage.css'
const SpanishDetailedQuiz = () => {
  const [textAnswer1, setTextAnswer1] = useState('');
  const [textAnswer2, setTextAnswer2] = useState('');
  const [textAnswer3, setTextAnswer3] = useState('');
  const [textAnswer4, setTextAnswer4] = useState('');
  const [textAnswer5, setTextAnswer5] = useState('');
  const [textAnswer6, setTextAnswer6] = useState('');
  const [textAnswer7, setTextAnswer7] = useState('');
  const [textAnswer8, setTextAnswer8] = useState('');
  const textAnsweredCount = [
    textAnswer1,
    textAnswer2,
    textAnswer3,
    textAnswer4,
    textAnswer5,
    textAnswer6,
    textAnswer7,
    textAnswer8,
  ].filter((a) => a.trim() !== '').length;
  const textProgress = (textAnsweredCount / 8) * 100;
  const textAnswers = [textAnswer1, textAnswer2, textAnswer3, textAnswer4, textAnswer5, textAnswer6, textAnswer7,textAnswer8];
  const answeredCount = textAnswers.filter((a) => a.trim() !== '').length;
  const isAllAnswered = answeredCount === textAnswers.length;
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
      <h1 id = "detailed-header">Cuestionario de Preguntas Detalladas</h1>
      <div className="sticky-progress-bar">
        <ProgressBar now={textProgress} variant="info" label={`${Math.round(textProgress)}%`} />
      </div>
      <div className = "question-box">
      <Form>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 1</h2>
        <Form.Group className="questions" controlId="q1">
          <Form.Label>¿Te gusta viajar al trabajo? Si es así, ¿qué tan lejos?</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer1}
            onChange={(e) => setTextAnswer1(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 2</h2>
        <Form.Group className="questions" controlId="q2">
          <Form.Label>¿Qué haces en tu tiempo libre?</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer2}
            onChange={(e) => setTextAnswer2(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 3</h2>
        <Form.Group className="questions" controlId="q3">
          <Form.Label>¿Qué actividades te interesan? ¿Por qué?</Form.Label>
          <Form.Control
           type="text"
           value={textAnswer3}
           onChange={(e) => setTextAnswer3(e.target.value)}
           />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 4</h2>
        <Form.Group className="questions" controlId="q4">
          <Form.Label>¿Cuales son tus clases favoritas y por qué?</Form.Label>
          <Form.Control
           type="text"
          value={textAnswer4}
          onChange={(e) => setTextAnswer4(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 5</h2>
        <Form.Group className="questions" controlId="q5">
          <Form.Label>¿Cuales son tus habilidades blandas y duras?</Form.Label>
          <Form.Control
          type="text"
          value={textAnswer5}
          onChange={(e) => setTextAnswer5(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 6</h2>
        <Form.Group className="questions" controlId="q6">
          <Form.Label>¿Cuáles son las tres características principales que desea tener en su entorno de trabajo?</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer6}
            onChange={(e) => setTextAnswer6(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 7</h2>
        <Form.Group className="questions" controlId="q7">
          <Form.Label>¿Qué importancia tiene el salario laboral en comparación con la satisfacción laboral a la hora de elegir una carrera?</Form.Label>
          <Form.Control
           type="text"
           value={textAnswer7}
           onChange={(e) => setTextAnswer7(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Pregunta 8</h2>
        <Form.Group className="questions" controlId="q8">
         <Form.Label>¿Te ves en un rol de liderazgo o preferirías especializarte en una habilidad específica?</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer8}
            onChange={(e) => setTextAnswer8(e.target.value)}
          />
        </Form.Group>
        </div>
      </Form>
      <Button
        id="Submit-Button"onClick={() => alert("¡Resultados enviados!")}disabled={!isAllAnswered}
        style={{backgroundColor: isAllAnswered ? 'purple' : 'grey',cursor: isAllAnswered ? 'pointer' : 'not-allowed',}}>
          ¡Obtenga Resultados!
      </Button>
      </div>
    </div>
  );
};

export default SpanishDetailedQuiz;
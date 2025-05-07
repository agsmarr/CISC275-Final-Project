import React, { useState } from 'react';
import './BasicQuizPage.css';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import { generateSpanishCareerReport } from './chatgpt';


const SpanishBasicQuiz = () => {
  const [answer1, setAnswer1] = useState<string[]>([]);
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [answer5, setAnswer5] = useState<string>("");
  const [answer6, setAnswer6] = useState<string>("");
  const [answer7, setAnswer7] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState('');
  const [showReport, setShowReport] = useState(false);

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
  const isAllAnswered = answeredCount === totalQuestions;

  const updateAnswer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setAnswer1((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const updateAnswer2 = (e: React.ChangeEvent<HTMLInputElement>) => setAnswer2(e.target.value);
  const updateAnswer3 = (e: React.ChangeEvent<HTMLInputElement>) => setAnswer3(e.target.value);
  const updateAnswer4 = (e: React.ChangeEvent<HTMLInputElement>) => setAnswer4(e.target.value);
  const updateAnswer5 = (e: React.ChangeEvent<HTMLInputElement>) => setAnswer5(e.target.value);
  const updateAnswer6 = (e: React.ChangeEvent<HTMLInputElement>) => setAnswer6(e.target.value);
  const updateAnswer7 = (e: React.ChangeEvent<HTMLInputElement>) => setAnswer7(e.target.value);

  const goBackHome = () => {
    window.location.hash = '/';
  };

  const handleSubmit = async () => {
    if (!isAllAnswered) return;
  
    setLoading(true);
    window.alert('Generando informe de carrera...'); // "Generating career report..."
  
    try {
      const apiKey = localStorage.getItem('MYKEY');
      if (!apiKey) {
        window.alert('Por favor, introduzca su clave de API en el pie de página.');
        setLoading(false);
        return;
      }
  
      const answers = {
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7
      };
  
      const generatedReport = await generateSpanishCareerReport(answers, apiKey.replace(/"/g, ''));
      setReport(generatedReport);
      setShowReport(true);
  
      window.alert('¡Informe de carrera generado con éxito!');
    } catch (error) {
      console.error('Error:', error);
      setReport('No se pudo generar el informe. Por favor, revise su clave de API e inténtelo de nuevo.');
      setShowReport(true);
      window.alert('No se pudo generar el informe. Inténtelo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header>
        <Button variant="secondary" id="home-button" onClick={goBackHome}>
          Página de Inicio
        </Button>
      </header>
      <h1 id="basic-header">Cuestionario de Preguntas Básicas</h1>
      <div className="sticky-progress-bar mt-4">
        <ProgressBar now={progress} variant="info" label={`${Math.round(progress)}%`} />
      </div>
      <div className="question-box">
        <div className="question-boxes">
          <h2 className="question-headers">Pregunta 1</h2>
          <div className="questions">¿Qué materias o temas disfrutas más?</div>
          <div className="answers">
            <Form.Check type="checkbox" label="Artes" value="Artes" onChange={updateAnswer1} checked={answer1.includes("Artes")} />
            <Form.Check type="checkbox" label="Humanidades" value="Humanidades" onChange={updateAnswer1} checked={answer1.includes("Humanidades")} />
            <Form.Check type="checkbox" label="Ciencias Sociales" value="Ciencias Sociales" onChange={updateAnswer1} checked={answer1.includes("Ciencias Sociales")} />
            <Form.Check type="checkbox" label="Ciencias, Tecnología, Ingeniería y Matemáticas" value="STEM" onChange={updateAnswer1} checked={answer1.includes("STEM")} />
            <Form.Check type="checkbox" label="Ninguna de las anteriores" value="Ninguna" onChange={updateAnswer1} checked={answer1.includes("Ninguna")} />
          </div>
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">Pregunta 2</h2>
          <div className="questions">¿Prefieres trabajar con personas, datos u objetos?</div>
          <Form.Check type="radio" label="Personas" value="Personas" onChange={updateAnswer2} checked={answer2 === "Personas"} />
          <Form.Check type="radio" label="Datos" value="Datos" onChange={updateAnswer2} checked={answer2 === "Datos"} />
          <Form.Check type="radio" label="Objetos" value="Objetos" onChange={updateAnswer2} checked={answer2 === "Objetos"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">Pregunta 3</h2>
          <div className="questions">¿Preferirías trabajar en interiores o exteriores?</div>
          <Form.Check type="radio" label="Interiores" value="Interiores" onChange={updateAnswer3} checked={answer3 === "Interiores"} />
          <Form.Check type="radio" label="Exteriores" value="Exteriores" onChange={updateAnswer3} checked={answer3 === "Exteriores"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">Pregunta 4</h2>
          <div className="questions">¿Te gustaría trabajar solo o en equipo?</div>
          <Form.Check type="radio" label="Solo" value="Solo" onChange={updateAnswer4} checked={answer4 === "Solo"} />
          <Form.Check type="radio" label="En equipo" value="En equipo" onChange={updateAnswer4} checked={answer4 === "En equipo"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">Pregunta 5</h2>
          <div className="questions">¿Prefieres liderar un equipo o seguir instrucciones?</div>
          <Form.Check type="radio" label="Liderar un equipo" value="Liderar un equipo" onChange={updateAnswer5} checked={answer5 === "Liderar un equipo"} />
          <Form.Check type="radio" label="Seguir instrucciones" value="Seguir instrucciones" onChange={updateAnswer5} checked={answer5 === "Seguir instrucciones"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">Pregunta 6</h2>
          <div className="questions">¿Disfrutas tareas rutinarias o probar cosas nuevas?</div>
          <Form.Check type="radio" label="Tareas rutinarias" value="Tareas rutinarias" onChange={updateAnswer6} checked={answer6 === "Tareas rutinarias"} />
          <Form.Check type="radio" label="Probar cosas nuevas" value="Probar cosas nuevas" onChange={updateAnswer6} checked={answer6 === "Probar cosas nuevas"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">Pregunta 7</h2>
          <div className="questions">¿Qué es más importante para ti: dinero, ayudar a la comunidad o hacer lo que amas?</div>
          <Form.Check type="radio" label="Dinero" value="Dinero" onChange={updateAnswer7} checked={answer7 === "Dinero"} />
          <Form.Check type="radio" label="Ayudar a la comunidad" value="Ayudar a la comunidad" onChange={updateAnswer7} checked={answer7 === "Ayudar a la comunidad"} />
          <Form.Check type="radio" label="Hacer lo que amas" value="Hacer lo que amas" onChange={updateAnswer7} checked={answer7 === "Hacer lo que amas"} />
        </div>

        <Button
          id="Submit-Button"
          onClick={handleSubmit}
          disabled={!isAllAnswered || loading}
          style={{
            backgroundColor: isAllAnswered ? 'purple' : 'grey',
            cursor: isAllAnswered ? 'pointer' : 'not-allowed'
          }}
        >
          {loading ? 'Generando Informe...' : '¡Obtenga Resultados!'}
        </Button>

        {showReport && (
          <div className="report-section" style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px',
            border: '1px solid #dee2e6'
          }}>
            <h2>Informe de Orientación Profesional</h2>
            <div style={{
              whiteSpace: 'pre-wrap',
              textAlign: 'left',
              marginTop: '15px'
            }}>
              {report}
            </div>
            <Button
              variant="secondary"
              onClick={() => setShowReport(false)}
              style={{
                marginTop: '15px',
                backgroundColor: 'purple',
                borderColor: 'purple',
                color: 'white'
              }}
            >
              Cerrar Informe
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpanishBasicQuiz;

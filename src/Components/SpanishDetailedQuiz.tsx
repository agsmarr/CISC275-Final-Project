import React, { useState } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import './DetailedQuizPage.css';
import { validateSpanishAnswer, generateSpanishDetailedCareerReport } from './chatgpt';

const SpanishDetailedQuiz = () => {
  const [answers, setAnswers] = useState<string[]>(Array(8).fill(''));
  const [errors, setErrors] = useState<string[]>(Array(8).fill(''));
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState('');
  const [showReport, setShowReport] = useState(false);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    if (submitAttempted) {
      const result = validateSpanishAnswer(value, index);
      const newErrors = [...errors];
      newErrors[index] = result.isValid ? '' : result.message;
      setErrors(newErrors);
    }
  };

  const handleBlur = (index: number) => {
    const result = validateSpanishAnswer(answers[index], index);
    const newErrors = [...errors];
    newErrors[index] = result.isValid ? '' : result.message;
    setErrors(newErrors);
  };

  const validateAll = () => {
    const newErrors = answers.map((answer, i) => {
      const result = validateSpanishAnswer(answer, i);
      return result.isValid ? '' : result.message;
    });
    setErrors(newErrors);
    return newErrors.every(err => err === '');
  };

  const handleSubmit = async () => {
    setSubmitAttempted(true);
    const isValid = validateAll();
    if (!isValid) return;
  
    const apiKey = localStorage.getItem('MYKEY');
    if (!apiKey) {
      window.alert('Por favor, ingrese su clave API de OpenAI en el pie de página primero.');
      return;
    }
  
    setLoading(true);
    window.alert('Generando informe profesional...');
  
    try {
      const generatedReport = await generateSpanishDetailedCareerReport(answers, apiKey.replace(/"/g, ''));
      setReport(generatedReport);
      setShowReport(true);
  
      window.alert('¡Informe generado con éxito!');
    } catch (err) {
      console.error(err);
      setReport('No se pudo generar el informe. Por favor, inténtelo de nuevo.');
      setShowReport(true);
      window.alert('No se pudo generar el informe. Inténtelo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  const goBackHome = () => {
    window.location.hash = '/';
  };

  const answeredCount = answers.filter((a) => a.trim() !== '').length;
  const textProgress = (answeredCount / 8) * 100;
  const isAllAnswered = answeredCount === 8 && errors.every(e => e === '');

  const questions = [
    '¿Te gusta viajar al trabajo? Si es así, ¿qué tan lejos?',
    '¿Qué haces en tu tiempo libre?',
    '¿Qué actividades te interesan? ¿Por qué?',
    '¿Cuáles son tus clases favoritas y por qué?',
    '¿Cuáles son tus habilidades blandas y duras?',
    '¿Cuáles son las tres características principales que desea tener en su entorno de trabajo?',
    '¿Qué importancia tiene el salario laboral en comparación con la satisfacción laboral a la hora de elegir una carrera?',
    '¿Te ves en un rol de liderazgo o preferirías especializarte en una habilidad específica?',
  ];

  return (
    <div>
      <header>
        <Button variant="secondary" id="home-button" onClick={goBackHome}>
          Página de Inicio
        </Button>
      </header>
      <h1 id="detailed-header">Cuestionario de Preguntas Detalladas</h1>
      <div className="sticky-progress-bar">
        <ProgressBar now={textProgress} variant="info" label={`${Math.round(textProgress)}%`} />
      </div>
      <div className="question-box">
        <Form>
          {questions.map((label, i) => (
            <div className="question-boxes" key={i}>
              <h2 className="question-headers">Pregunta {i + 1}</h2>
              <Form.Group controlId={`q${i + 1}`} className="questions">
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={answers[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onBlur={() => handleBlur(i)}
                  isInvalid={!!errors[i]}
                />
                <Form.Control.Feedback type="invalid">{errors[i]}</Form.Control.Feedback>
              </Form.Group>
            </div>
          ))}
        </Form>
        <Button
          id="Submit-Button"
          onClick={handleSubmit}
          disabled={!isAllAnswered || loading}
          style={{
            backgroundColor: isAllAnswered ? 'purple' : 'grey',
            cursor: isAllAnswered ? 'pointer' : 'not-allowed',
          }}
        >
          {loading ? 'Generando informe...' : '¡Obtenga Resultados!'}
        </Button>

        {showReport && (
          <div className="report-section">
            <h2>Informe Personalizado de Carrera</h2>
            <div className="report-content">{report}</div>
            <Button
              className="submit-btn"
              onClick={() => setShowReport(false)}
              style={{ marginTop: '15px' }}
            >
              Cerrar Informe
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpanishDetailedQuiz;

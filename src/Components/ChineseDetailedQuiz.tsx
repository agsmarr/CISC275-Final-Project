import React, { useState } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import './DetailedQuizPage.css';
import { generateChineseDetailedCareerReport, validateChineseAnswer} from './chatgpt';
import { ChineseLoadingScreen } from './ChineseLoadingScreen';

const ChineseDetailedQuiz = () => {
  const [textAnswers, setTextAnswers] = useState(Array(8).fill(''));
  const [errors, setErrors] = useState<string[]>(Array(8).fill(''));
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState('');
  const [showReport, setShowReport] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const answeredCount = textAnswers.filter((a) => a.trim() !== '').length;
  const textProgress = (answeredCount / 8) * 100;
  const isAllAnswered = answeredCount === 8;
  const allValid = errors.every(msg => msg === '');

  const goBackHome = () => {
    window.location.hash = '/';
  };
  const gotoBasic = () => {
    window.location.hash = '/basic-quiz';
  }

  const handleChange = (index: number, value: string) => {
    const updatedAnswers = [...textAnswers];
    updatedAnswers[index] = value;
    setTextAnswers(updatedAnswers);

    if (submitAttempted) {
      const validation = validateChineseAnswer(value, index);
      const newErrors = [...errors];
      newErrors[index] = validation.isValid ? '' : validation.message;
      setErrors(newErrors);
    }
  };

  const handleBlur = (index: number) => {
    const validation = validateChineseAnswer(textAnswers[index], index);
    const newErrors = [...errors];
    newErrors[index] = validation.isValid ? '' : validation.message;
    setErrors(newErrors);
  };

  const validateAll = (): boolean => {
    const newErrors = textAnswers.map((a, i) => {
      const result = validateChineseAnswer(a, i);
      return result.isValid ? '' : result.message;
    });
    setErrors(newErrors);
    return newErrors.every(e => e === '');
  };

  const handleSubmit = async () => {
    setSubmitAttempted(true);
    const isValid = validateAll();
  
    if (!isValid || !isAllAnswered) return;
  
    const apiKey = localStorage.getItem('MYKEY');
    if (!apiKey) {
      window.alert('请先在页面底部输入您的 OpenAI API 密钥。');
      return;
    }
  
    setLoading(true);
    setReport('');
    setShowReport(false);
  
    window.alert('正在生成职业报告...');
  
    try {
      const result = await generateChineseDetailedCareerReport(textAnswers, apiKey.replace(/"/g, ''));
      setReport(result);
      setShowReport(true);
  
      window.alert('职业报告生成成功！');
    } catch (error) {
      console.error('生成职业报告失败:', error);
      setReport('生成职业报告失败，请稍后再试。');
      setShowReport(true);
      window.alert('生成职业报告失败，请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  const questions = [
    '你喜欢通勤上班吗？如果喜欢，通勤距离多远？',
    '你在闲暇时做什么？',
    '你对什么活动感兴趣？为什么？',
    '您最喜欢哪些课程？为什么？',
    '你的软技能和硬技能是什么？',
    '您希望您的工作环境具备哪三个最重要的特征？',
    '在选择职业时，薪水与工作满意度相比有多重要？',
    '您认为自己适合担任领导角色吗？或者您更愿意专攻某项特定技能？'
  ];

  return (
    <div>
      {/*If loading is true, loading screen will show
              If report is generated, the report will show
              The quiz will show if loading is false & showReport is false */}
      {loading ? <ChineseLoadingScreen></ChineseLoadingScreen> : !showReport ? 
      <div>
      <header>
        <Button variant="secondary" id="home-button" onClick={goBackHome}>
          主页
        </Button>
      </header>

      <h1 id="detailed-header">详细问题测验</h1>

      <div className="sticky-progress-bar">
        <ProgressBar now={textProgress} variant="info" label={`${Math.round(textProgress)}%`} />
      </div>

      <div className="question-box">
        <Form>
          {questions.map((label, index) => (
            <div className="question-boxes" key={index}>
              <h2 className="question-headers">问题 {index + 1}</h2>
              <Form.Group controlId={`q${index + 1}`}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={textAnswers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onBlur={() => handleBlur(index)}
                  isInvalid={!!errors[index]}
                />
                <Form.Control.Feedback type="invalid">
                  {errors[index]}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          ))}
        </Form>

        <Button
          id="Submit-Button"
          onClick={handleSubmit}
          disabled={!isAllAnswered || loading || !allValid}
          className="submit-btn"
          style={{
            backgroundColor: isAllAnswered && allValid ? 'purple' : 'grey',
            cursor: isAllAnswered && allValid ? 'pointer' : 'not-allowed',
            marginTop: '15px',
          }}
        >
          获得结果！
        </Button>
        </div>
        </div> :
        (
          <div className = "report-border">
            <div className="report-section">
              <div className = "report-text"></div>
              {/* Report below */}
            <h2 id = "report-header">职业规划报告</h2>
            <div style={{
              whiteSpace: 'pre-wrap',
              textAlign: 'left',
              marginTop: '15px'
            }}>
              {report}
          </div>
          </div>
            <div className = "report-buttons">
            {/*Home Page Button*/}
            <Button style = {{fontSize: '25px', backgroundColor: '#7698dc', fontWeight: 'bold', color: '#f8f9fa', border: 'transparent', boxShadow: '8px 8px 10px rgb(174, 174, 174)'}}
              onClick={() => goBackHome()}
            >
              返回首页
            </Button>
            {/*Detailed Quiz Page Button*/}
            <Button style = {{fontSize: '25px', backgroundColor: '#7698dc', fontWeight: 'bold', color: '#f8f9fa', border: 'transparent', boxShadow: '8px 8px 10px rgb(174, 174, 174)'}}
            onClick={() => gotoBasic()}>
              基础测验页面
             </Button>
            </div>
          </div>
        )}
      </div>
  );
};

export default ChineseDetailedQuiz;

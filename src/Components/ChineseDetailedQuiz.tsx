import React, { useState } from 'react';
import { Button, Form, ProgressBar, Spinner } from 'react-bootstrap';
import './DetailedQuizPage.css';
import { generateChineseDetailedCareerReport } from './chatgpt';

const ChineseDetailedQuiz = () => {
  const [textAnswers, setTextAnswers] = useState(Array(8).fill(''));
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState('');
  const [showReport, setShowReport] = useState(false);

  const answeredCount = textAnswers.filter((a) => a.trim() !== '').length;
  const textProgress = (answeredCount / 8) * 100;
  const isAllAnswered = answeredCount === 8;

  const goBackHome = () => {
    window.location.hash = '/';
  };

  const handleChange = (index: number, value: string) => {
    const updatedAnswers = [...textAnswers];
    updatedAnswers[index] = value;
    setTextAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    if (!isAllAnswered) return;

    const apiKey = localStorage.getItem('MYKEY');
    if (!apiKey) {
      alert('请先在页面底部输入您的 OpenAI API 密钥。');
      return;
    }

    setLoading(true);
    setReport('');
    setShowReport(false);

    try {
      const result = await generateChineseDetailedCareerReport(textAnswers, apiKey.replace(/"/g, ''));
      setReport(result);
      setShowReport(true);
    } catch (error) {
      setReport('生成职业报告失败，请稍后再试。');
      setShowReport(true);
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
                />
              </Form.Group>
            </div>
          ))}
        </Form>

        <Button
          id="Submit-Button"
          onClick={handleSubmit}
          disabled={!isAllAnswered || loading}
          className="submit-btn"
          style={{
            backgroundColor: isAllAnswered ? 'purple' : 'grey',
            cursor: isAllAnswered ? 'pointer' : 'not-allowed',
            marginTop: '15px',
          }}
        >
          {loading ? <Spinner animation="border" size="sm" /> : '获得结果！'}
        </Button>

        {showReport && (
          <div className="report-section">
            <h2>个性化职业报告</h2>
            <div className="report-content" style={{ whiteSpace: 'pre-line' }}>
              {report}
            </div>
            <Button
              className="submit-btn"
              onClick={() => setShowReport(false)}
              style={{ marginTop: '15px' }}
            >
              关闭报告
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChineseDetailedQuiz;

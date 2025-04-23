import React, {useState} from 'react';
import { Button, Form ,ProgressBar} from 'react-bootstrap';
import './DetailedQuizPage.css'
const ChineseDetailedQuiz = () => {
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
        主页
        </Button>
      </header>
      <h1 id = "detailed-header">详细问题测验</h1>
      <div className="sticky-progress-bar">
        <ProgressBar now={textProgress} variant="info" label={`${Math.round(textProgress)}%`} />
      </div>
      <div className = "question-box">
      <Form>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题1</h2>
        <Form.Group className="questions" controlId="q1">
          <Form.Label>你喜欢通勤上班吗？如果喜欢，通勤距离多远？</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer1}
            onChange={(e) => setTextAnswer1(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题2</h2>
        <Form.Group className="questions" controlId="q2">
          <Form.Label>你在闲暇时做什么？</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer2}
            onChange={(e) => setTextAnswer2(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题3</h2>
        <Form.Group className="questions" controlId="q3">
          <Form.Label>你对什么活动感兴趣？为什么？</Form.Label>
          <Form.Control
           type="text"
           value={textAnswer3}
           onChange={(e) => setTextAnswer3(e.target.value)}
           />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题4</h2>
        <Form.Group className="questions" controlId="q4">
          <Form.Label>您最喜欢哪些课程？为什么？</Form.Label>
          <Form.Control
           type="text"
          value={textAnswer4}
          onChange={(e) => setTextAnswer4(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题5</h2>
        <Form.Group className="questions" controlId="q5">
          <Form.Label>你的软技能和硬技能是什么？</Form.Label>
          <Form.Control
          type="text"
          value={textAnswer5}
          onChange={(e) => setTextAnswer5(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题6</h2>
        <Form.Group className="questions" controlId="q6">
          <Form.Label>您希望您的工作环境具备哪三个最重要的特征？</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer6}
            onChange={(e) => setTextAnswer6(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题7</h2>
        <Form.Group className="questions" controlId="q7">
          <Form.Label>在选择职业时，薪水与工作满意度相比有多重要？</Form.Label>
          <Form.Control
           type="text"
           value={textAnswer7}
           onChange={(e) => setTextAnswer7(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题8</h2>
        <Form.Group className="questions" controlId="q8">
         <Form.Label>您认为自己适合担任领导角色吗？或者您更愿意专攻某项特定技能？</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer8}
            onChange={(e) => setTextAnswer8(e.target.value)}
          />
        </Form.Group>
        </div>
      </Form>
      <Button
        id="Submit-Button"onClick={() => alert("结果已提交！")}disabled={!isAllAnswered}
        style={{backgroundColor: isAllAnswered ? 'purple' : 'grey',cursor: isAllAnswered ? 'pointer' : 'not-allowed',}}>
          获得结果！
      </Button>
      </div>
    </div>
  );
};

export default ChineseDetailedQuiz;
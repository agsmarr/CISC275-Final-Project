import React, { useState } from 'react';
import './BasicQuizPage.css';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import { generateChineseCareerReport } from './chatgpt';
import { ChineseLoadingScreen } from './ChineseLoadingScreen';

const ChineseBasicQuiz = () => {
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
    setAnswer1((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
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
    window.alert('正在生成职业报告...'); // “Generating report…”
  
    try {
      const apiKey = localStorage.getItem('MYKEY');
      if (!apiKey) {
        window.alert('请先在页脚中输入您的 OpenAI API 密钥。');
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
        answer7,
      };
  
      const generatedReport = await generateChineseCareerReport(answers, apiKey.replace(/"/g, ''));
      setReport(generatedReport);
      setShowReport(true);
  
      window.alert('职业报告生成成功！');
    } catch (error) {
      console.error('生成报告失败:', error);
      setReport('生成报告失败，请稍后再试。');
      setShowReport(true);
      window.alert('生成报告失败，请稍后再试。');
    } finally {
      setLoading(false);
    }
  };
  /* Navigation back home */
  const gotoDetailed = () => {
    window.location.hash = '/detailed-quiz';
  }

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
      <h1 id="basic-header">基本问题测验</h1>
      <div className="sticky-progress-bar mt-4">
        <ProgressBar now={progress} variant="info" label={`${Math.round(progress)}%`} />
      </div>
      <div className="question-box">
        <div className="question-boxes">
          <h2 className="question-headers">问题1</h2>
          <div className="questions">您最喜欢什么科目或话题？</div>
          <div className="answers">
            <Form.Check type="checkbox" label="艺术" value="The Arts" onChange={updateAnswer1} checked={answer1.includes("The Arts")} />
            <Form.Check type="checkbox" label="人文学科" value="Humanities" onChange={updateAnswer1} checked={answer1.includes("Humanities")} />
            <Form.Check type="checkbox" label="社会科学" value="Social Sciences" onChange={updateAnswer1} checked={answer1.includes("Social Sciences")} />
            <Form.Check type="checkbox" label="STEM学科（科学、技术、工程、数学）" value="STEM subjects (Science, Technology, Engineering, Math)" onChange={updateAnswer1} checked={answer1.includes("STEM subjects (Science, Technology, Engineering, Math)")} />
            <Form.Check type="checkbox" label="以上都不是" value="None of the Above" onChange={updateAnswer1} checked={answer1.includes("None of the Above")} />
          </div>
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">问题2</h2>
          <div className="questions">您更喜欢与人、数据还是物体打交道？</div>
          <Form.Check type="radio" label="人们" value="People" onChange={updateAnswer2} checked={answer2 === "People"} />
          <Form.Check type="radio" label="数据" value="Data" onChange={updateAnswer2} checked={answer2 === "Data"} />
          <Form.Check type="radio" label="对象" value="Objects" onChange={updateAnswer2} checked={answer2 === "Objects"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">问题3</h2>
          <div className="questions">你喜欢在室内还是室外工作？</div>
          <Form.Check type="radio" label="室内" value="Indoors" onChange={updateAnswer3} checked={answer3 === "Indoors"} />
          <Form.Check type="radio" label="户外活动" value="Outdoors" onChange={updateAnswer3} checked={answer3 === "Outdoors"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">问题4</h2>
          <div className="questions">您想单独工作还是团队工作？</div>
          <Form.Check type="radio" label="独自的" value="Alone" onChange={updateAnswer4} checked={answer4 === "Alone"} />
          <Form.Check type="radio" label="在团队中" value="In a Team" onChange={updateAnswer4} checked={answer4 === "In a Team"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">问题5</h2>
          <div className="questions">你喜欢领导团队还是遵循指示？</div>
          <Form.Check type="radio" label="带领团队" value="Leading a Team" onChange={updateAnswer5} checked={answer5 === "Leading a Team"} />
          <Form.Check type="radio" label="遵循说明" value="Following Instructions" onChange={updateAnswer5} checked={answer5 === "Following Instructions"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">问题6</h2>
          <div className="questions">您喜欢做日常工作还是经常尝试新事物？</div>
          <Form.Check type="radio" label="日常任务" value="Routine Tasks" onChange={updateAnswer6} checked={answer6 === "Routine Tasks"} />
          <Form.Check type="radio" label="尝试新事物" value="Trying New Things" onChange={updateAnswer6} checked={answer6 === "Trying New Things"} />
        </div>

        <div className="question-boxes">
          <h2 className="question-headers">问题7</h2>
          <div className="questions">对你来说什么更重要：金钱、帮助社区还是做你喜欢的事情？</div>
          <Form.Check type="radio" label="钱" value="Money" onChange={updateAnswer7} checked={answer7 === "Money"} />
          <Form.Check type="radio" label="协助社区" value="Assisting Community" onChange={updateAnswer7} checked={answer7 === "Assisting Community"} />
          <Form.Check type="radio" label="做你喜欢的事" value="Doing What You Love" onChange={updateAnswer7} checked={answer7 === "Doing What You Love"} />
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
              onClick={() => gotoDetailed()}>
              详细测验页面
            </Button>
            </div>
          </div>
        )}
      </div>
  );
};

export default ChineseBasicQuiz;

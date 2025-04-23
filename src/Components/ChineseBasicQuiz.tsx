import React, {useState} from 'react';
import './BasicQuizPage.css';
import { Button, Form ,ProgressBar} from 'react-bootstrap';
const ChineseBasicQuiz = () => {
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
          主页
          </Button>
      </header>
      <h1 id = "basic-header">基本问题测验</h1>
      <div className="sticky-progress-bar mt-4">
        <ProgressBar now={progress} variant="info" label={`${Math.round(progress)}%`} />
      </div>
      <div className = "question-box">
        <div className = "question-boxes">
          <h2 className = "question-headers">问题1</h2>
          <div className = "questions">您最喜欢什么科目或话题？</div>
          <div className = "answers">
            <Form.Check type = "checkbox" id = "question1-answer1" label = "艺术"value="The Arts" onChange={updateAnswer1}checked={answer1.includes("The Arts")}></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer2" label = "人文学科"value="Humanities" onChange={updateAnswer1}checked={answer1.includes("Humanities")}></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer3" label = "社会科学"value="Social Sciences" onChange={updateAnswer1}checked={answer1.includes("Social Sciences")}></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer4" label = "STEM学科（科学、技术、工程、数学）"value="STEM subjects (Science, Technology, Engineering, Math)" onChange={updateAnswer1}checked={answer1.includes("STEM subjects (Science, Technology, Engineering, Math)")}></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer5" label = "以上都不是"value="None of the Above" onChange={updateAnswer1}checked={answer1.includes("None of the Above")}></Form.Check>
          </div>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题2</h2>
          <div className = "questions">您更喜欢与人、数据还是物体打交道？</div>
          <div className = "answers">
            <Form.Check type = "radio" id = "question2-answer1" label = "人们" value = "People" onChange={updateAnswer2} checked = {answer2 === "People"}></Form.Check>
            <Form.Check type = "radio" id = "question2-answer2" label = "数据" value = "Data" onChange={updateAnswer2} checked = {answer2 === "Data"}></Form.Check>
            <Form.Check type = "radio" id = "question2-answer3" label = "对象" value = "Objects" onChange={updateAnswer2} checked = {answer2 === "Objects"}></Form.Check>
          </div>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题3</h2>
          <div className = "questions">你喜欢在室内还是室外工作?</div>
          <Form.Check type = "radio" id = "question3-answer1" label = "室内" value = "Indoors" onChange={updateAnswer3} checked = {answer3 === "Indoors"}></Form.Check>
          <Form.Check type = "radio" id = "question3-answer2" label = "户外活动" value = "Outdoors" onChange={updateAnswer3} checked = {answer3 === "Outdoors"}></Form.Check>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题4</h2>
          <div className = "questions">您想单独工作还是团队工作？</div>
          <Form.Check type = "radio" id = "question4-answer1" label = "独自的" value = "Alone" onChange={updateAnswer4} checked = {answer4 === "Alone"}></Form.Check>
          <Form.Check type = "radio" id = "question4-answer2" label = "在团队中" value = "In a Team" onChange={updateAnswer4} checked = {answer4 === "In a Team"}></Form.Check>
        </div> 
        <div className = "question-boxes">
        <h2 className = "question-headers">问题5</h2>
          <div className = "questions">你喜欢领导团队还是遵循指示？</div>
          <Form.Check type = "radio" id = "question5-answer1" label = "带领团队" value = "Leading a Team" onChange={updateAnswer5} checked = {answer5 === "Leading a Team"}></Form.Check>
          <Form.Check type = "radio" id = "question5-answer2" label = "遵循说明" value = "Following Instructions" onChange={updateAnswer5} checked = {answer5 === "Following Instructions"}></Form.Check>
        </div> 
        <div className = "question-boxes">
        <h2 className = "question-headers">问题6</h2>
          <div className = "questions">您喜欢做日常工作还是经常尝试新事物？</div>
          <Form.Check type = "radio" id = "question6-answer1" label = "日常任务" value = "Routine Tasks" onChange={updateAnswer6} checked = {answer6 === "Routine Tasks"}></Form.Check>
          <Form.Check type = "radio" id = "question6-answer2" label = "尝试新事物" value = "Trying New Things" onChange={updateAnswer6} checked = {answer6 === "Trying New Things"}></Form.Check>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">问题7</h2>
          <div className = "questions">对你来说什么更重要：金钱、帮助社区还是做你喜欢的事情？</div>
          <Form.Check type = "radio" id = "question7-answer1" label = "钱" value = "Money" onChange={updateAnswer7} checked = {answer7 === "Money"}></Form.Check>
          <Form.Check type = "radio" id = "question7-answer2" label = "协助社区" value = "Assisting Community" onChange={updateAnswer7} checked = {answer7 === "Assisting Community"}></Form.Check>
          <Form.Check type = "radio" id = "question7-answer3" label = "做你喜欢的事" value = "Doing What You Love" onChange={updateAnswer7} checked = {answer7 === "Doing What You Love"}></Form.Check>
        </div>
        <Button
          id="Submit-Button"onClick={() => alert("结果已提交！")}disabled={!isAllAnswered}
            style={{backgroundColor: isAllAnswered ? 'purple' : 'grey',cursor: isAllAnswered ? 'pointer' : 'not-allowed',}}>
          获得结果！
        </Button>
      </div>
    </div>
  );
};

export default ChineseBasicQuiz;
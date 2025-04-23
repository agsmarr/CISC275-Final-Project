import {Button} from 'react-bootstrap';
import './HomeButtons.css';
export function ChineseHomeButtons() {
    const goToBasicQuiz = () => {
        window.location.hash = '/basic-quiz';
      };
    
    const goToDetailedQuiz = () => {
        window.location.hash = '/detailed-quiz';
      };
        return (<div>
            <h1 id = "bottom-h1">选择一个测验!</h1>
            <p id = "bottom-p">选择基本或详细的测验来发现最适合您的职业类型!
            </p>
            <div className = "Buttons">
                <div className="quiz-container">
                    {/*<Link to="/basic-quiz">*/}
                    <Button id="Basic" onClick={goToBasicQuiz}>基本问题测验</Button>
                    
                    {/* adding Basic Question description */}
                        <div className="quiz-description">
                        <p>
                        导航至“基本问题”页面，回答一些关于您自己的基本问题，以确定适合您的职业！
                        </p>
            </div>
            </div> 
                <div className="quiz-container">
                    {/*<Link to="/detailed-quiz">*/}
                    <Button id="Detailed" onClick={goToDetailedQuiz}>详细问题测验</Button>
                    {/*</Link>*/}
                        {/* adding Detailed Question description */}
                        <div className="quiz-description">
                        <p>
                        导航至“详细问题”页面，回答一些关于您自己的基本问题，以确定适合您的职业！
                        </p>
                </div>
                </div>

            </div>
            
    </div>)
}

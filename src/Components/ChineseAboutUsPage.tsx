import React from 'react';
import {Button} from 'react-bootstrap';
import './AboutUsPage.css';
import image1 from './ComponentImages/Saieda.jpg';
import image2 from './ComponentImages/Yaqing.jpg';
import image3 from './ComponentImages/Amanda.jpg';
function ChineseAboutUs() {
    const goBackHome = () => {
        window.location.hash = '/';
      };
    return (<div>
    <header>
        <Button variant="secondary" id="home-button" onClick={goBackHome}>
        Página de inicio
        </Button>
    </header>
    <body>
        <div id = "about-us-message">
            <h1 className = "about-header">关于我们</h1>
            <p>我们的团队开发了一种评估工具，可以帮助用户做出职业决策。
                无论您是高中生、大学生还是寻求职业转变的专业人士，我们的应用程序都可以帮助您确定职业生涯的下一步。
                我们致力于提供有趣且直观的体验，使用人工智能生成的响应来引导用户找到最适合他们的生活方式和兴趣的职业。
                返回主页查看我们的基本和详细的专业评论，或与下面的开发人员见面！</p>
        </div>
        <h1 className = "about-header">认识开发商!</h1>
        <div className = "intro-border">
            <div className = "intro-box">
                <div className = "picture-box">
                <img className = "images" src = {image1} alt = ""></img>
                    <p>Saieda Ali Zada</p>
                    <a href = "mailto:saieda@udel.edu">saieda@udel.edu</a>
                </div>
                <p className = "intros">我是 Saieda，特拉华大学 CISC 系的一名大三学生。我喜欢打排球、做饭和画画。
                </p>
            </div>
        </div>
        <div className = "intro-border">
            <div className = "intro-box">
                <div className = "picture-box">
                <img className = "images" src = {image2} alt = ""></img>
                    <p>Yaqing Jiang</p>
                    <a href = "mailto:yaqingj@udel.edu">yaqingj@udel.edu</a>
                </div>
                <p className = "intros">我是雅青。我是 UD 的一名大三学生。我喜欢滑冰、滑雪和直排轮滑。</p>
            </div>
        </div>
        <div className = "intro-border">
            <div className = "intro-box">
                <div className = "picture-box">
                    <img className = "images" src = {image3} alt = ""></img>
                    <p>Amanda Smarr</p>
                    <a href = "mailto:agsmarr@udel.edu">agsmarr@udel.edu</a>
                </div>
                <p className = "intros">我是阿曼达，我是特拉华大学的一名大二学生。
                我学习计算机科学，专攻网络安全，目前担任 HenHacks 团队的组织者。</p>
            </div>
        </div>
    </body>
    </div>)
}
export default ChineseAboutUs
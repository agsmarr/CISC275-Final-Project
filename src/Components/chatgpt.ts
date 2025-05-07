//ChineseDetailedQuiz 
export async function generateChineseDetailedCareerReport(answers: string[], apiKey: string): Promise<string> {
  const systemRole = `你是一位职业规划专家。请根据用户在职业评估问卷中用中文提交的详细回答，生成一份个性化的职业报告。
请提供3-5个适合的职业方向，并为每一个方向给出详细说明。风格应当专业而友好，结合用户的所有回答内容，提出有针对性的建议，并用清晰的标题格式呈现。`;

  const userPrompt = `以下是用户对详细职业测验问题的回答，请分析这些回答并生成一份中文职业规划报告：

1. 通勤偏好：${answers[0]}
2. 闲暇活动：${answers[1]}
3. 感兴趣的活动及原因：${answers[2]}
4. 喜爱的课程及原因：${answers[3]}
5. 拥有的软技能和硬技能：${answers[4]}
6. 希望的工作环境特点：${answers[5]}
7. 对薪资与满意度的重视程度：${answers[6]}
8. 领导倾向还是专精倾向：${answers[7]}

请根据以上回答，给出3-5个适合的职业建议，每个建议配上详细解释，并整体以中文撰写。`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemRole },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
    const data = await response.json();
    return data.choices[0]?.message?.content || '未能生成职业报告';
  } catch (error) {
    console.error('生成职业报告出错:', error);
    return '生成职业报告失败，请稍后再试。';
  }
}


// DetailedQuiz Page
export interface DetailedQuizAnswers {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
  answer8: string;
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const validateAnswer = (answer: string, fieldName: keyof DetailedQuizAnswers): ValidationResult => {
  const rules: Record<keyof DetailedQuizAnswers, { min: number; max: number; required: boolean }> = {
    answer1: { min: 10, max: 200, required: true },
    answer2: { min: 15, max: 300, required: true },
    answer3: { min: 20, max: 300, required: true },
    answer4: { min: 15, max: 300, required: true },
    answer5: { min: 20, max: 400, required: true },
    answer6: { min: 25, max: 350, required: true },
    answer7: { min: 20, max: 300, required: true },
    answer8: { min: 20, max: 300, required: true },
  };

  const rule = rules[fieldName];

  if (rule.required && !answer.trim()) {
    return { isValid: false, message: 'This field is required' };
  }

  if (answer.length < rule.min) {
    return { isValid: false, message: `Minimum ${rule.min} characters required` };
  }

  if (answer.length > rule.max) {
    return { isValid: false, message: `Maximum ${rule.max} characters allowed` };
  }

  return { isValid: true, message: '' };
};

export async function generateDetailedCareerReport(answers: DetailedQuizAnswers, apiKey: string): Promise<string> {
  const systemRole = `You are a career guidance expert. Analyze the user's detailed quiz answers and provide a comprehensive, 
  personalized career report. Suggest 3-5 suitable career paths with detailed explanations for each recommendation, 
  considering all aspects of their responses. Format the response with clear headings. 
  Keep it professional yet friendly so it seems responsive and natural, and provide specific insights based on their answers.`;

  const userPrompt = `Based on these detailed answers to career assessment questions, provide an in-depth career report:
  
  Commute preferences: ${answers.answer1}
  Leisure time activities: ${answers.answer2}
  Interesting activities and reasons: ${answers.answer3}
  Favorite classes and reasons: ${answers.answer4}
  Skills (soft and hard): ${answers.answer5}
  Top work environment characteristics: ${answers.answer6}
  Salary vs satisfaction importance: ${answers.answer7}
  Leadership vs specialization preference: ${answers.answer8}

  Please analyze these responses thoroughly and suggest suitable career paths with detailed explanations.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemRole },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
    const data = await response.json();
    return data.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('Error generating career report:', error);
    return 'Failed to generate career report. Please try again later.';
  }
}

// BasicQuizPage
export interface BasicQuizAnswers {
  answer1: string[];
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
}

export async function generateCareerReport(answers: BasicQuizAnswers, apiKey: string): Promise<string> {
  const systemRole = `You are a career guidance expert. Analyze the user's quiz answers and provide a basic, 
  personalized career report. Suggest 3 suitable career paths with explanations for each recommendation. 
  Format the response with clear headings. Please keep it professional yet friendly so it seems responsive and natural.`;

  const userPrompt = `Based on these answers to career assessment questions, provide a personalized career report:
  
  Subjects enjoyed: ${answers.answer1.join(', ')}
  Prefers working with: ${answers.answer2}
  Work environment preference: ${answers.answer3}
  Work style preference: ${answers.answer4}
  Leadership preference: ${answers.answer5}
  Task preference: ${answers.answer6}
  Motivational priority: ${answers.answer7}

  Please analyze these responses and suggest suitable career paths.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemRole },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('Error generating career report:', error);
    return 'Failed to generate career report. Please try again later.';
  }
}

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

export interface ValidationRules {
  min: number;
  max: number;
  required: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const getValidationRules = (fieldName: keyof DetailedQuizAnswers): ValidationRules => {
  const rules = {
    answer1: { min: 10, max: 200, required: true },
    answer2: { min: 15, max: 300, required: true },
    answer3: { min: 20, max: 300, required: true },
    answer4: { min: 15, max: 300, required: true },
    answer5: { min: 20, max: 400, required: true },
    answer6: { min: 25, max: 350, required: true },
    answer7: { min: 20, max: 300, required: true },
    answer8: { min: 20, max: 300, required: true },
  };
  return rules[fieldName];
};

export const validateAnswer = (answer: string, fieldName: keyof DetailedQuizAnswers): ValidationResult => {
  const rules = getValidationRules(fieldName);
  
  if (rules.required && !answer.trim()) {
    return { isValid: false, message: 'This field is required' };
  }

  if (answer.length < rules.min) {
    return { isValid: false, message: `Minimum ${rules.min} characters required` };
  }

  if (answer.length > rules.max) {
    return { isValid: false, message: `Maximum ${rules.max} characters allowed` };
  }

  return { isValid: true, message: '' };
};

export async function generateDetailedCareerReport(answers: DetailedQuizAnswers, apiKey: string): Promise<string> {
  // Define a role for the system
  const systemRole = `You are a career guidance expert. Analyze the user's detailed quiz answers and provide a comprehensive, 
  personalized career report. Suggest 3-5 suitable career paths with detailed explanations for each recommendation, 
  considering all aspects of their responses. Format the response with clear headings. 
  Keep it professional yet friendly, and provide specific insights based on their answers. Please keep it professional yet friendly.`;

  // Define a role the user 
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
    // Define a role for the system
    const systemRole = `You are a career guidance expert. Analyze the user's quiz answers and provide a basic, 
    personalized career report. Suggest 3-4 suitable career paths with explanations for each recommendation. 
    Format the response with clear headings. Please keep it professional yet friendly.`;
  
    // Define a role the user 
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








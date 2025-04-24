// Components/chatgpt.ts
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
    // Define the system role - this sets how the AI should behave
    const systemRole = `You are a career guidance expert. Analyze the user's quiz answers and provide a detailed, 
    personalized career report. Suggest 3-5 suitable career paths with explanations for each recommendation. 
    Format the response with clear headings and bullet points. Keep it professional yet friendly.`;
  
    // Define the user role - this is the prompt that will be sent with the user's answers
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
          model: 'gpt-4', // or 'gpt-4-turbo' for newer models
          messages: [
            { role: 'system', content: systemRole },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.7 // Controls creativity (0.0 to 2.0)
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
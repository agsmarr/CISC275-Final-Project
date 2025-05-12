/* This file is created for chatgpt integration for Career Quiz Helpi, for cisc275 of 
* Computer and Information Science of University of Delware. It interacts with ChatGPT 
* creates a report for both Basic and Career Assessments in Enligh, Spanish, and Chinese.
* Utalizing Chatgpt as a reference for getting information about how to get API Key, how the
* General format of chatgpt is and how files are required.
 */


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
    return 'Failed to generate career report. Please ensure your api key works.';
  }
}

//SpanishDetailedQuiz
export interface ValidationResult {
  isValid: boolean;
  message: string;
}

const getSpanishValidationRules = (index: number): { min: number; max: number; required: boolean } => {
  const rules = [
    { min: 10, max: 200, required: true },
    { min: 15, max: 300, required: true },
    { min: 20, max: 300, required: true },
    { min: 15, max: 300, required: true },
    { min: 20, max: 400, required: true },
    { min: 25, max: 350, required: true },
    { min: 20, max: 300, required: true },
    { min: 20, max: 300, required: true },
  ];
  return rules[index];
};

export const validateSpanishAnswer = (answer: string, index: number): ValidationResult => {
  const rule = getSpanishValidationRules(index);

  if (rule.required && !answer.trim()) {
    return { isValid: false, message: 'Este campo es obligatorio.' };
  }

  if (answer.length < rule.min) {
    return { isValid: false, message: `Se requieren al menos ${rule.min} caracteres.` };
  }

  if (answer.length > rule.max) {
    return { isValid: false, message: `Se permiten como máximo ${rule.max} caracteres.` };
  }

  return { isValid: true, message: '' };
};

export async function generateSpanishDetailedCareerReport(answers: string[], apiKey: string): Promise<string> {
  const systemRole = `Eres un experto en orientación profesional. Analiza las respuestas detalladas del cuestionario en español y proporciona un informe personalizado de carrera. Sugiere de 3 a 5 trayectorias profesionales adecuadas con explicaciones detalladas. Sé profesional pero amigable y estructura tu respuesta con títulos claros.`;

  const userPrompt = `Basándote en las siguientes respuestas del usuario al cuestionario detallado, proporciona un informe de carrera en español:

1. Preferencias de viaje: ${answers[0]}
2. Actividades en el tiempo libre: ${answers[1]}
3. Actividades de interés y razones: ${answers[2]}
4. Clases favoritas y razones: ${answers[3]}
5. Habilidades (blandas y duras): ${answers[4]}
6. Características deseadas del entorno laboral: ${answers[5]}
7. Importancia del salario vs. satisfacción: ${answers[6]}
8. Preferencia por liderazgo o especialización: ${answers[7]}

Analiza completamente estas respuestas y recomienda trayectorias profesionales adecuadas con explicaciones detalladas.`;

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
    return data.choices[0]?.message?.content || 'No se pudo generar el informe.';
  } catch (error) {
    console.error('Error al generar el informe:', error);
    return 'Error al generar el informe de carrera. Por favor, asegúrate de que tu clave API funcione.';
  }
}



//ChineseDetailedQuiz 
export interface ValidationResult {
  isValid: boolean;
  message: string;
}

// Chinese validation rules
const getChineseValidationRules = (index: number): { min: number; max: number; required: boolean } => {
  const rules = [
    { min: 10, max: 200, required: true },
    { min: 15, max: 300, required: true },
    { min: 20, max: 300, required: true },
    { min: 15, max: 300, required: true },
    { min: 20, max: 400, required: true },
    { min: 25, max: 350, required: true },
    { min: 20, max: 300, required: true },
    { min: 20, max: 300, required: true },
  ];
  return rules[index];
};

export const validateChineseAnswer = (answer: string, index: number): ValidationResult => {
  const rule = getChineseValidationRules(index);

  if (rule.required && !answer.trim()) {
    return { isValid: false, message: '该字段为必填项。' };
  }

  if (answer.length < rule.min) {
    return { isValid: false, message: `至少需要输入 ${rule.min} 个字符。` };
  }

  if (answer.length > rule.max) {
    return { isValid: false, message: `最多允许输入 ${rule.max} 个字符。` };
  }

  return { isValid: true, message: '' };
};

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
    return '生成职业报告失败。请确保您的 API 密钥有效。';
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
    return 'Failed to generate career report. Please ensure your api key works.';
  }
}


//SpanishBasicQuiz
export interface BasicQuizAnswers {
  answer1: string[];
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
}

export async function generateSpanishCareerReport(answers: BasicQuizAnswers, apiKey: string): Promise<string> {
  const systemRole = `Eres un experto en orientación profesional. Analiza las respuestas del usuario al cuestionario y proporciona un informe de carrera personalizado y básico. 
Sugiere 3 trayectorias profesionales adecuadas con explicaciones para cada recomendación. 
Formatea la respuesta con encabezados claros. Mantén un tono profesional pero amistoso para que sea natural y receptivo.`;

  const userPrompt = `Con base en las siguientes respuestas al cuestionario de evaluación vocacional, proporciona un informe profesional personalizado:

1. Asignaturas que disfruta: ${answers.answer1.join(', ')}
2. Preferencia de trabajo: ${answers.answer2}
3. Entorno laboral preferido: ${answers.answer3}
4. Estilo de trabajo: ${answers.answer4}
5. Preferencia de liderazgo: ${answers.answer5}
6. Tipo de tareas preferidas: ${answers.answer6}
7. Prioridad motivacional: ${answers.answer7}

Por favor, analiza estas respuestas y sugiere 3 posibles trayectorias profesionales.`;

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
    return data.choices[0]?.message?.content || 'No se generó ninguna respuesta.';
  } catch (error) {
    console.error('Error al generar el informe profesional:', error);
    return 'Error al generar el informe de carrera. Por favor, asegúrate de que tu clave API funcione.';
  }
}


//ChieseBasicQuiz
// ChineseBasicQuiz
export interface BasicQuizAnswers {
  answer1: string[];
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
}

export async function generateChineseCareerReport(answers: BasicQuizAnswers, apiKey: string): Promise<string> {
  const systemRole = `你是一位职业指导专家。请分析用户在职业测验中的基础回答，并生成一份个性化的职业报告。
建议三个适合的职业路径，并为每个推荐提供简要说明。保持专业而友好的语气，并使用清晰的标题格式呈现内容。`;

  const userPrompt = `请根据以下基础问题的回答，为用户生成一份职业规划报告：

1. 喜欢的学科：${answers.answer1.join(', ')}
2. 工作偏好（人/数据/物体）：${answers.answer2}
3. 喜欢的工作环境：${answers.answer3}
4. 工作方式偏好（独立/团队）：${answers.answer4}
5. 喜欢领导还是执行任务：${answers.answer5}
6. 喜欢的任务类型（例行/创新）：${answers.answer6}
7. 最重要的动机（收入、服务社会、热情）：${answers.answer7}

请提供三个可能的职业方向，并给出每个方向的简要解释。`;

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
    return data.choices[0]?.message?.content || '未能生成职业报告。';
  } catch (error) {
    console.error('生成职业报告出错:', error);
    return '生成职业报告失败。请确保您的 API 密钥有效。';
  }
}


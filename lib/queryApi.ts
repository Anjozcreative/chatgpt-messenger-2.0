
import openai from './chatgpt';



const query = async (input: string, chatId: string, model: string) => {
    const res = await openai.chat.completions.create({
       messages: [
        {
            role: 'system',
            content: input
        }
       ],
        model,
        temperature: 0.9,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,

    }).then((res) => res.choices[0].message.content)

    return res;
};

export default query;